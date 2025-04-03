"use client";

import { useState } from 'react';
import { scanForXSS, generateXSSRecommendations } from '@/services/xss-scanner';
import { AlertCircle, CheckCircle, Clock, ExternalLink, Shield } from 'lucide-react';

export default function XssScanPage() {
  const [url, setUrl] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanResults, setScanResults] = useState(null);
  const [recommendations, setRecommendations] = useState(null);
  const [error, setError] = useState(null);

  const handleScan = async (e) => {
    e.preventDefault();
    
    if (!url || !url.trim().startsWith('http')) {
      setError('Please enter a valid URL starting with http:// or https://');
      return;
    }
    
    setIsScanning(true);
    setError(null);
    setScanResults(null);
    setRecommendations(null);
    
    try {
      // Run the XSS scan
      const results = await scanForXSS(url);
      setScanResults(results);
      
      // Generate security recommendations
      const recs = generateXSSRecommendations(results);
      setRecommendations(recs);
    } catch (err) {
      setError(`Failed to scan: ${err.message}`);
    } finally {
      setIsScanning(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-3xl font-bold">XSS Vulnerability Scanner</h1>
        <p className="text-[#6B7280]">
          Test your website for cross-site scripting vulnerabilities
        </p>
      </div>
      
      <div className="mx-auto max-w-2xl">
        <form onSubmit={handleScan} className="mb-8">
          <div className="relative mb-4">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter website URL (e.g., https://example.com)"
              className="h-12 w-full rounded-none border border-gray-200 bg-white px-4 pr-12 focus:border-[#2DD4BF] focus:outline-none"
              required
            />
            <div className="absolute -top-1 -left-1 h-2 w-2 border-t border-l border-[#2DD4BF]"></div>
            <div className="absolute -top-1 -right-1 h-2 w-2 border-t border-r border-[#2DD4BF]"></div>
            <div className="absolute -bottom-1 -left-1 h-2 w-2 border-b border-l border-[#2DD4BF]"></div>
            <div className="absolute -bottom-1 -right-1 h-2 w-2 border-b border-r border-[#2DD4BF]"></div>
          </div>
          
          <div className="relative">
            <button
              type="submit"
              disabled={isScanning}
              className="relative flex h-12 w-full items-center justify-center rounded-none bg-[#2DD4BF] px-6 text-white transition-all hover:bg-[#2DD4BF]/90 focus:outline-none disabled:opacity-70"
            >
              {isScanning ? (
                <>
                  <Clock className="mr-2 h-5 w-5 animate-spin" />
                  Scanning...
                </>
              ) : (
                <>
                  <Shield className="mr-2 h-5 w-5" />
                  Scan for XSS Vulnerabilities
                </>
              )}
              <div className="absolute -top-1 -left-1 h-2 w-2 border-t border-l border-white"></div>
              <div className="absolute -top-1 -right-1 h-2 w-2 border-t border-r border-white"></div>
              <div className="absolute -bottom-1 -left-1 h-2 w-2 border-b border-l border-white"></div>
              <div className="absolute -bottom-1 -right-1 h-2 w-2 border-b border-r border-white"></div>
            </button>
          </div>
        </form>
        
        {/* Error Message */}
        {error && (
          <div className="mb-6 rounded-none border border-red-200 bg-red-50 p-4 text-red-600">
            <div className="flex items-center">
              <AlertCircle className="mr-2 h-5 w-5" />
              <p>{error}</p>
            </div>
          </div>
        )}
        
        {/* Scan Results */}
        {scanResults && (
          <div className="mb-8 overflow-hidden rounded-none border border-gray-200">
            <div className="border-b border-gray-200 bg-gray-50 p-4">
              <h2 className="text-lg font-bold">Scan Results</h2>
              <p className="text-sm text-[#6B7280]">
                Scanned {scanResults.url} at {new Date(scanResults.timestamp).toLocaleString()}
              </p>
            </div>
            
            <div className="p-4">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center">
                  <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#2DD4BF] text-white">
                    {scanResults.vulnerabilitiesFound}
                  </span>
                  <span className="font-medium">Vulnerabilities Found</span>
                </div>
                
                <a 
                  href={scanResults.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-[#2DD4BF]"
                >
                  Visit Site
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
              
              {scanResults.vulnerabilities.length > 0 ? (
                <div className="space-y-4">
                  {scanResults.vulnerabilities.map((vuln, index) => (
                    <div key={index} className="rounded-none border border-l-4 border-l-yellow-500 border-gray-200 bg-white p-4 shadow-sm">
                      <div className="mb-1 flex items-center justify-between">
                        <h3 className="font-medium">{vuln.type}</h3>
                        <span className={`rounded px-2 py-1 text-xs font-medium ${
                          vuln.risk === 'High' ? 'bg-red-100 text-red-700' :
                          vuln.risk === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {vuln.risk} Risk
                        </span>
                      </div>
                      <p className="mb-2 text-sm text-[#6B7280]">
                        <strong>Element:</strong> {vuln.element}
                      </p>
                      <p className="mb-2 text-sm text-[#6B7280]">{vuln.description}</p>
                      <div className="text-sm font-medium text-[#2DD4BF]">
                        Remediation: {vuln.remediation}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rounded-none border border-green-200 bg-green-50 p-4">
                  <div className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                    <p className="text-green-700">No XSS vulnerabilities detected! Great job!</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        
        {/* Recommendations */}
        {recommendations && recommendations.length > 0 && (
          <div className="rounded-none border border-gray-200">
            <div className="border-b border-gray-200 bg-gray-50 p-4">
              <h2 className="text-lg font-bold">Security Recommendations</h2>
              <p className="text-sm text-[#6B7280]">
                Ways to improve your site's security posture
              </p>
            </div>
            
            <div className="divide-y divide-gray-200">
              {recommendations.map((rec, index) => (
                <div key={index} className="p-4">
                  <h3 className="mb-1 font-medium">{rec.title}</h3>
                  <p className="mb-2 text-sm text-[#6B7280]">{rec.description}</p>
                  <div className="rounded-none bg-gray-50 p-3">
                    <code className="text-xs">{rec.implementation}</code>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}