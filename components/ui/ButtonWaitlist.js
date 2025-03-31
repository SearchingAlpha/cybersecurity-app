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
          className="flex h-12 items-center justify-center rounded-lg bg-primary px-6 text-primary-content transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          <span className="mr-2 text-sm font-medium">Join the waitlist</span>
          <ArrowRightIcon className="h-4 w-4" />
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            disabled={isSubmitting || isSuccess}
            className="mb-2 h-12 flex-1 rounded-lg border border-base-content/20 bg-base px-4 text-base-content focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:mb-0 sm:mr-2"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting || isSuccess}
            className={`h-12 rounded-lg px-6 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              isSuccess
                ? 'bg-green-500 text-white'
                : 'bg-primary text-primary-content hover:bg-primary/90 focus:ring-primary'
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <LoadingSpinner className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </span>
            ) : isSuccess ? (
              <span className="flex items-center justify-center">
                <CheckIcon className="mr-2 h-4 w-4" />
                Joined!
              </span>
            ) : (
              'Join Now'
            )}
          </button>
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