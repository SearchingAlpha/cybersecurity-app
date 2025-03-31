// components/ui/ButtonWaitlist.jsx
"use client";

import { useState } from 'react';

export default function ButtonWaitlist() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail('');
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setIsExpanded(false);
      }, 3000);
    }, 1000);
  };

  return (
    <div className="relative">
      {!isExpanded ? (
        <button
          onClick={() => setIsExpanded(true)}
          className="relative flex h-12 items-center justify-center rounded-none bg-[#2DD4BF] px-6 text-white transition-all hover:bg-[#2DD4BF]/90 focus:outline-none"
        >
          <span className="mr-2 text-sm font-medium">Improve your online security with a leading VPN service</span>
          <ArrowRightIcon className="h-4 w-4" />
          <div className="absolute -top-1 -left-1 h-2 w-2 border-t border-l border-white"></div>
          <div className="absolute -top-1 -right-1 h-2 w-2 border-t border-r border-white"></div>
          <div className="absolute -bottom-1 -left-1 h-2 w-2 border-b border-l border-white"></div>
          <div className="absolute -bottom-1 -right-1 h-2 w-2 border-b border-r border-white"></div>
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col sm:flex-row">
          <div className="relative mb-2 flex-1 sm:mb-0 sm:mr-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              disabled={isSubmitting || isSuccess}
              className="h-12 w-full rounded-none border border-gray-200 bg-white px-4 text-[#6B7280] focus:border-[#2DD4BF] focus:outline-none"
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
              disabled={isSubmitting || isSuccess}
              className={`relative h-12 rounded-none px-6 text-sm font-medium transition-all focus:outline-none ${
                isSuccess
                  ? 'bg-green-500 text-white'
                  : 'bg-[#2DD4BF] text-white hover:bg-[#2DD4BF]/90'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <LoadingSpinner className="mr-2 h-4 w-4" />
                  <span>Submitting...</span>
                </span>
              ) : isSuccess ? (
                <span className="flex items-center justify-center">
                  <CheckIcon className="mr-2 h-4 w-4" />
                  <span>Joined!</span>
                </span>
              ) : (
                'Get started'
              )}
              <div className="absolute -top-1 -left-1 h-2 w-2 border-t border-l border-white"></div>
              <div className="absolute -top-1 -right-1 h-2 w-2 border-t border-r border-white"></div>
              <div className="absolute -bottom-1 -left-1 h-2 w-2 border-b border-l border-white"></div>
              <div className="absolute -bottom-1 -right-1 h-2 w-2 border-b border-r border-white"></div>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

// Button Subcomponents
function ArrowRightIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
    </svg>
  );
}

function LoadingSpinner({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <circle className="opacity-25" cx="12" cy="12" r="10" strokeWidth="4" />
      <path className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
  );
}

function CheckIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
    </svg>
  );
}