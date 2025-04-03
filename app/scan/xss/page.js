// app/scan/xss/page.jsx
"use client";

import { useState } from 'react';
import { scanForXss, generateXssRecommendations } from '@/services/xss-scanner';
import { AlertCircle, CheckCircle, Clock, ExternalLink, Shield } from 'lucide-react';

export default function XssScanPage() {
  const [url, setUrl] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanResults, setScanResults] = useState(null);
  const [error, setError] = useState(null);

  async function handleScan(e) {
    e.preventDefault();
    
    // Reset states
    setError(null);
    setScanResults(null);
    setIsScanning(true);
    
    try {
      // Perform scan
      const results = await scanForXss(url);
      
      if (results.error) {
        setError(results.error);
      } else {
        setScanResults(results);
      }
    } catch (err) {
      setError(err.message || 'An unexpected error occurred');
    } finally {
      setIsScanning(false);
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-6">
      <header className="mb-8 text-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">XSS Vulnerability Scanner</h1>
        <p className="text-base text-gray-600">
          Test your web app for Cross-Site Scripting vulnerabilities
        </p>
      </header>

      {/* URL Input Form */}
      <form onSubmit={handleScan} className="mb-8">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-grow">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter website URL (e.g., https://example.com)"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isScanning || !url}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              isScanning 
                ? 'bg-gray-100 text-gray-400' 
                : 'bg-teal-500 text-white hover:bg-teal-600'
            }`}
          >
            {isScanning ? (
              <span className="flex items-center justify-center">
                <Clock className="animate-spin mr-2 h-4 w-4" />
                Scanning...
              </span>
            ) : (
              'Run XSS Test'
            )}
          </button>
        </div>
      </form>

      {/* Scanning State */}
      {isScanning && (
        <div className="text-center p-12">
          <div className="relative mx-auto w-20 h-20 mb-4">
            <div className="absolute inset-0 rounded-full bg-teal-100 opacity-30 animate-ping"></div>
            <div className="relative flex items-center justify-center rounded-full bg-teal-50 w-20 h-20">
              <Shield className="h-10 w-10 text-teal-500" />
            </div>
          </div>
          <h2 className="text-xl font-medium mb-2">Scanning for XSS Vulnerabilities</h2>
          <p className="text-gray-500">Analyzing forms, inputs, and URL parameters...</p>
        </div>
      )}

      {/* Error State */}
      {error && !isScanning && (
        <div className="rounded-lg bg-red-50 p-4 mb-6">
          <div className="flex items-center">
            <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
            <h3 className="font-medium text-red-800">Scan Failed</h3>
          </div>
          <p className="mt-2 text-sm text-red-700">{error}</p>
          <p className="mt-2 text-sm text-red-700">
            Please check the URL and try again. Make sure the website is accessible.
          </p>
        </div>
      )}

      {/* Results */}
      {scanResults && !isScanning && (
        <div className="mt-8 bg-white rounded-lg border border-gray-100 overflow-hidden shadow-sm">
          {/* Results Header */}
          <div className={`px-6 py-4 ${
            scanResults.summary.riskLevel === 'High' 
              ? 'bg-red-50 border-b border-red-100' 
              : scanResults.summary.riskLevel === 'Medium'
                ? 'bg-amber-50 border-b border-amber-100'
                : scanResults.summary.riskLevel === 'Low' 
                  ? 'bg-blue-50 border-b border-blue-100' 
                  : 'bg-green-50 border-b border-green-100'
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <h2 className="text-lg font-medium">Scan Results</h2>
                <span className={`ml-3 text-sm px-2.5 py-0.5 rounded-full ${
                  scanResults.summary.riskLevel === 'High' 
                    ? 'bg-red-100 text-red-800' 
                    : scanResults.summary.riskLevel === 'Medium'
                      ? 'bg-amber-100 text-amber-800'
                      : scanResults.summary.riskLevel === 'Low' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                }`}>
                  {scanResults.summary.riskLevel} Risk
                </span>
              </div>
              <div className="text-sm text-gray-500">
                {new Date(scanResults.timestamp).toLocaleString()}
              </div>
            </div>
            <div className="mt-2 text-sm flex items-center">
              <a 
                href={scanResults.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                {scanResults.url.length > 50 
                  ? `${scanResults.url.substring(0, 50)}...` 
                  : scanResults.url
                }
                <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 border-b border-gray-100">
            <div className="p-4 border-r border-gray-100 text-center">
              <div className="text-2xl font-bold mb-1">
                {scanResults.summary.totalVulnerabilities}
              </div>
              <div className="text-sm text-gray-500">Vulnerabilities Found</div>
            </div>
            <div className="p-4 border-r border-gray-100 text-center">
              <div className="text-2xl font-bold mb-1">
                {scanResults.summary.scannedElements}
              </div>
              <div className="text-sm text-gray-500">Elements Scanned</div>
            </div>
            <div className="p-4 text-center col-span-2 md:col-span-1">
              <div className={`text-lg font-bold mb-1 ${
                scanResults.summary.totalVulnerabilities === 0 
                  ? 'text-green-500' 
                  : 'text-amber-500'
              }`}>
                {scanResults.summary.totalVulnerabilities === 0 
                  ? 'Protected' 
                  : 'At Risk'
                }
              </div>
              <div className="text-sm text-gray-500">Status</div>
            </div>
          </div>

          {/* Vulnerabilities List */}
          <div className="p-4">
            <h3 className="font-medium mb-3">Detected Vulnerabilities</h3>
            
            {scanResults.vulnerabilities.length === 0 ? (
              <div className="flex items-center p-4 bg-green-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>No XSS vulnerabilities detected.</span>
              </div>
            ) : (
              <div className="space-y-3">
                {scanResults.vulnerabilities.map((vulnerability, index) => (
                  <div 
                    key={index} 
                    className="p-4 rounded-lg border border-gray-100 hover:border-gray-200 transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                          vulnerability.severity === 'High' 
                            ? 'bg-red-500' 
                            : vulnerability.severity === 'Medium' 
                              ? 'bg-amber-500' 
                              : 'bg-blue-500'
                        }`}></span>
                        <h4 className="font-medium">{vulnerability.element}</h4>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded ${
                        vulnerability.severity === 'High' 
                          ? 'bg-red-100 text-red-800' 
                          : vulnerability.severity === 'Medium' 
                            ? 'bg-amber-100 text-amber-800' 
                            : 'bg-blue-100 text-blue-800'
                      }`}>
                        {vulnerability.severity}
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-2">
                      {vulnerability.description}
                    </p>
                    
                    <div className="text-xs text-gray-500 mb-2">
                      <strong>Location:</strong> {vulnerability.location}
                    </div>
                    
                    <div className="text-sm text-teal-700 bg-teal-50 p-2 rounded">
                      <strong>Recommendation:</strong> {vulnerability.recommendation}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Recommendations Section */}
          {scanResults.vulnerabilities.length > 0 && (
            <div className="border-t border-gray-100 p-4">
              <h3 className="font-medium mb-3">How to Fix</h3>
              <div className="space-y-4">
                {generateXssRecommendations(scanResults.vulnerabilities).map((rec, index) => (
                  <div key={index} className="p-4 rounded-lg bg-gray-50">
                    <h4 className="font-medium mb-2">{rec.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{rec.description}</p>
                    <pre className="text-xs bg-gray-800 text-gray-100 p-3 rounded overflow-x-auto">
                      <code>{rec.code}</code>
                    </pre>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}