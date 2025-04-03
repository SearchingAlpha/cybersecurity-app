// services/xss-scanner.js
import axios from 'axios';
import cheerio from 'cheerio';

/**
 * XSS Scanner Service for VibeSafe
 * Analyzes web applications for potential cross-site scripting vulnerabilities
 */

/**
 * Scans a website for potential XSS vulnerabilities
 * @param {string} url - The URL to scan
 * @returns {Promise<Object>} - Scan results with vulnerability details
 */
export async function scanForXss(url) {
  try {
    // Validate URL format
    if (!isValidUrl(url)) {
      throw new Error('Invalid URL format');
    }

    // Fetch the webpage content
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'VibeSafe Security Scanner/1.0'
      },
      timeout: 15000 // 15 second timeout
    });

    // Parse HTML content
    const $ = cheerio.load(response.data);
    
    // Results object
    const results = {
      url,
      timestamp: new Date().toISOString(),
      vulnerabilities: [],
      summary: {
        riskLevel: 'Low',
        totalVulnerabilities: 0,
        scannedElements: 0
      }
    };

    // Analyze input fields
    const inputFields = analyzeInputFields($);
    results.vulnerabilities.push(...inputFields.vulnerabilities);
    results.summary.scannedElements += inputFields.scannedCount;
    
    // Analyze URL parameters
    const urlParams = analyzeUrlParameters(url);
    results.vulnerabilities.push(...urlParams.vulnerabilities);
    results.summary.scannedElements += urlParams.scannedCount;
    
    // Analyze form submissions
    const formAnalysis = analyzeFormSubmissions($);
    results.vulnerabilities.push(...formAnalysis.vulnerabilities);
    results.summary.scannedElements += formAnalysis.scannedCount;

    // Update total vulnerabilities count
    results.summary.totalVulnerabilities = results.vulnerabilities.length;
    
    // Determine risk level based on vulnerabilities found
    results.summary.riskLevel = calculateRiskLevel(results.vulnerabilities);
    
    return results;
  } catch (error) {
    console.error('Scan error:', error);
    return {
      url,
      timestamp: new Date().toISOString(),
      error: error.message,
      summary: {
        riskLevel: 'Unknown',
        totalVulnerabilities: 0,
        scannedElements: 0
      }
    };
  }
}

/**
 * Validates URL format
 * @param {string} url - URL to validate
 * @returns {boolean} - Whether URL is valid
 */
function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (err) {
    return false;
  }
}

/**
 * Analyzes all input fields for XSS vulnerabilities
 * @param {CheerioStatic} $ - Cheerio instance with loaded HTML
 * @returns {Object} - Analysis results
 */
function analyzeInputFields($) {
  const vulnerabilities = [];
  const inputs = $('input, textarea');
  
  inputs.each((i, el) => {
    const input = $(el);
    const type = input.attr('type') || 'text';
    const id = input.attr('id') || '';
    const name = input.attr('name') || '';
    
    // Check for lack of input validation attributes
    if (
      (type === 'text' || type === 'search' || type === 'url' || type === 'textarea') && 
      !input.attr('pattern') && 
      !input.attr('maxlength')
    ) {
      vulnerabilities.push({
        type: 'XSS',
        severity: 'Medium',
        element: `Input field ${name || id || 'unnamed'}`,
        description: 'Input field lacks proper validation constraints',
        location: `Element: ${el.name}${id ? ` #${id}` : ''}${name ? ` [name="${name}"]` : ''}`,
        recommendation: 'Add input validation with pattern attribute or maxlength constraints'
      });
    }
  });

  return {
    vulnerabilities,
    scannedCount: inputs.length
  };
}

/**
 * Analyzes URL parameters for potential XSS vectors
 * @param {string} url - URL to analyze
 * @returns {Object} - Analysis results
 */
function analyzeUrlParameters(url) {
  const vulnerabilities = [];
  const parsedUrl = new URL(url);
  const params = parsedUrl.searchParams;
  
  // Count parameters to report even if no vulnerabilities found
  let paramCount = 0;
  
  for (const [name, value] of params.entries()) {
    paramCount++;
    
    // Check for suspicious parameter names that might be used for XSS
    if (['script', 'html', 'code', 'inject', 'xss'].some(term => name.toLowerCase().includes(term))) {
      vulnerabilities.push({
        type: 'XSS',
        severity: 'High',
        element: `URL parameter "${name}"`,
        description: 'Suspicious URL parameter name that might be used for script injection',
        location: `URL: ${parsedUrl.pathname}?${name}=...`,
        recommendation: 'Implement server-side validation and sanitization for all URL parameters'
      });
    }
  }
  
  return {
    vulnerabilities,
    scannedCount: paramCount
  };
}

/**
 * Analyzes form submissions for potential XSS vulnerabilities
 * @param {CheerioStatic} $ - Cheerio instance with loaded HTML
 * @returns {Object} - Analysis results
 */
function analyzeFormSubmissions($) {
  const vulnerabilities = [];
  const forms = $('form');
  
  forms.each((i, el) => {
    const form = $(el);
    const id = form.attr('id') || '';
    const action = form.attr('action') || '';
    const method = (form.attr('method') || 'get').toLowerCase();
    
    // Forms with GET method are more susceptible to XSS
    if (method === 'get') {
      vulnerabilities.push({
        type: 'XSS',
        severity: 'Medium',
        element: `Form ${id || 'unnamed'}`,
        description: 'Form uses GET method which may expose form data in URL and enable XSS attacks',
        location: `Form${id ? ` #${id}` : ''}${action ? ` action="${action}"` : ''}`,
        recommendation: 'Consider using POST method for forms and implement CSRF protection'
      });
    }
    
    // Check if there's no CSRF protection
    const hasCSRFToken = form.find('input[name*="csrf"], input[name*="token"]').length > 0;
    if (!hasCSRFToken) {
      vulnerabilities.push({
        type: 'XSS',
        severity: 'Medium',
        element: `Form ${id || 'unnamed'}`,
        description: 'Form lacks CSRF protection which can be combined with XSS for attack escalation',
        location: `Form${id ? ` #${id}` : ''}${action ? ` action="${action}"` : ''}`,
        recommendation: 'Implement CSRF tokens for all forms'
      });
    }
  });
  
  return {
    vulnerabilities,
    scannedCount: forms.length
  };
}

/**
 * Calculates risk level based on vulnerabilities
 * @param {Array} vulnerabilities - List of found vulnerabilities
 * @returns {string} - Risk level assessment
 */
function calculateRiskLevel(vulnerabilities) {
  const highCount = vulnerabilities.filter(v => v.severity === 'High').length;
  const mediumCount = vulnerabilities.filter(v => v.severity === 'Medium').length;
  
  if (highCount > 0) {
    return 'High';
  } else if (mediumCount > 2) {
    return 'Medium';
  } else if (mediumCount > 0 || vulnerabilities.length > 0) {
    return 'Low';
  }
  
  return 'Safe';
}

/**
 * Generates recommendations to fix XSS vulnerabilities
 * @param {Array} vulnerabilities - List of found vulnerabilities
 * @returns {Array} - List of recommendations
 */
export function generateXssRecommendations(vulnerabilities) {
  const recommendations = [
    {
      title: 'Sanitize User Input',
      description: 'Always sanitize user input before displaying it back on pages.',
      code: `// Example using DOMPurify
import DOMPurify from 'dompurify';

const userInput = formData.comment;
const sanitizedInput = DOMPurify.sanitize(userInput);
document.getElementById('comment').innerHTML = sanitizedInput;`
    },
    {
      title: 'Use Content Security Policy',
      description: 'Implement Content Security Policy headers to restrict script sources.',
      code: `// In your Next.js middleware.js
export function middleware(req) {
  const response = NextResponse.next();
  
  // Add Content Security Policy header
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self'"
  );
  
  return response;
}`
    },
    {
      title: 'Use React\'s JSX',
      description: 'React\'s JSX automatically escapes values by default.',
      code: `// Safe - React escapes this automatically
function Comment({ userData }) {
  return <div>{userData.comment}</div>;
}

// Unsafe - Never do this
function UnsafeComment({ userData }) {
  return <div dangerouslySetInnerHTML={{ __html: userData.comment }} />;
}`
    }
  ];
  
  // Add specific recommendations based on found vulnerabilities
  if (vulnerabilities.some(v => v.element.includes('form'))) {
    recommendations.push({
      title: 'Validate Form Inputs',
      description: 'Add validation to all form inputs on both client and server side.',
      code: `// Client-side validation example
function validateForm() {
  const input = document.getElementById('userInput').value;
  const pattern = /^[a-zA-Z0-9 .,!?'-]+$/;
  
  if (!pattern.test(input)) {
    showError('Please use only alphanumeric characters and basic punctuation.');
    return false;
  }
  
  return true;
}`
    });
  }
  
  return recommendations;
}