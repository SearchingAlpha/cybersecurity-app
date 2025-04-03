// services/xss-scanner.js
import axios from 'axios';
import * as cheerio from 'cheerio'; // Use named imports with namespace

/**
 * XSS Scanner Service for VibeSafe
 * Scans websites and web applications for potential XSS vulnerabilities
 */

// Function to scan a URL for potential XSS vulnerabilities
export async function scanForXSS(url) {
  try {
    // Fetch the target page
    const response = await axios.get(url);
    const html = response.data;
    
    // Load the HTML into cheerio
    const $ = cheerio.load(html);
    
    // Array to store found vulnerabilities
    const vulnerabilities = [];
    
    // Check for input fields that might be vulnerable to XSS
    const inputFields = $('input, textarea');
    inputFields.each((index, element) => {
      const type = $(element).attr('type');
      const id = $(element).attr('id') || '';
      const name = $(element).attr('name') || '';
      
      // Check if input validation is missing
      if (!$(element).attr('pattern') && ['text', 'search', 'url', 'email', undefined].includes(type)) {
        vulnerabilities.push({
          type: 'Potential XSS Vector',
          element: `${element.tagName}${id ? '#'+id : ''}${name ? '[name='+name+']' : ''}`,
          description: 'Input field without pattern validation',
          risk: 'Medium',
          remediation: 'Add input validation with pattern attribute or server-side validation'
        });
      }
    });
    
    // Check for forms without CSRF protection
    const forms = $('form');
    forms.each((index, element) => {
      const hasCSRFToken = $(element).find('input[name="_token"], input[name="csrf_token"]').length > 0;
      
      if (!hasCSRFToken) {
        vulnerabilities.push({
          type: 'Missing CSRF Protection',
          element: `form${$(element).attr('id') ? '#'+$(element).attr('id') : ''}`,
          description: 'Form without CSRF token',
          risk: 'High',
          remediation: 'Add CSRF token to all forms'
        });
      }
    });
    
    // Check for inline JavaScript that might be vulnerable
    const inlineScripts = $('script:not([src])');
    inlineScripts.each((index, element) => {
      const scriptContent = $(element).html();
      
      // Check if the script contains document.write or innerHTML assignments
      if (scriptContent.includes('document.write') || scriptContent.includes('innerHTML')) {
        vulnerabilities.push({
          type: 'Potential XSS Vector',
          element: 'inline script',
          description: 'Script uses document.write or innerHTML which can be XSS vectors',
          risk: 'Medium',
          remediation: 'Avoid using document.write and innerHTML with user input'
        });
      }
    });
    
    // Check for user content areas that might be vulnerable
    const divs = $('div, span, p');
    divs.each((index, element) => {
      const className = $(element).attr('class') || '';
      
      // Check for elements that likely contain user content
      if (className.includes('comment') || className.includes('user') || className.includes('content')) {
        vulnerabilities.push({
          type: 'Potential XSS Vector',
          element: `${element.tagName}.${className}`,
          description: 'Element likely contains user-generated content',
          risk: 'Low',
          remediation: 'Ensure content is properly sanitized before rendering'
        });
      }
    });
    
    return {
      url,
      timestamp: new Date().toISOString(),
      vulnerabilitiesFound: vulnerabilities.length,
      vulnerabilities
    };
  } catch (error) {
    console.error('Error scanning for XSS:', error);
    throw new Error(`Failed to scan ${url}: ${error.message}`);
  }
}

// Function to check if a specific string is vulnerable to XSS
export function testInputForXSS(input) {
  // Common XSS patterns to check against
  const xssPatterns = [
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    /javascript\s*:/gi,
    /onerror\s*=/gi,
    /onload\s*=/gi,
    /onclick\s*=/gi,
    /alert\s*\(/gi,
    /eval\s*\(/gi
  ];
  
  // Check if input matches any XSS patterns
  for (const pattern of xssPatterns) {
    if (pattern.test(input)) {
      return {
        vulnerable: true,
        pattern: pattern.toString(),
        suggestion: 'This input may contain malicious JavaScript code'
      };
    }
  }
  
  return {
    vulnerable: false
  };
}

// Generate security recommendations based on scan results
export function generateXSSRecommendations(scanResults) {
  const recommendations = [];
  
  if (scanResults.vulnerabilitiesFound > 0) {
    recommendations.push({
      title: 'Implement Content Security Policy (CSP)',
      description: 'CSP helps prevent XSS attacks by specifying which dynamic resources are allowed to load',
      implementation: "Add the following header: Content-Security-Policy: default-src 'self'; script-src 'self'"
    });
    
    recommendations.push({
      title: 'Use HttpOnly and Secure Cookies',
      description: 'Prevent JavaScript from accessing cookies and ensure they are only transmitted over HTTPS',
      implementation: 'Set HttpOnly and Secure flags on all sensitive cookies'
    });
    
    recommendations.push({
      title: 'Implement Input Validation',
      description: 'Validate all user inputs both client-side and server-side',
      implementation: 'Use a library like validator.js to sanitize and validate user inputs'
    });
    
    recommendations.push({
      title: 'Use HTML Encoding',
      description: 'Encode all dynamic content before rendering it in the browser',
      implementation: 'Use functions like DOMPurify.sanitize() to sanitize HTML content'
    });
  }
  
  return recommendations;
}