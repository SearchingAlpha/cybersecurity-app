// components/sections/HeroSection.jsx
"use client";

import Image from 'next/image';
import ButtonWaitlist from '@/components/ui/ButtonWaitlist';
import VibeWave from '@/components/ui/VibeWave';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-base to-base-content/5 pb-20 pt-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          {/* Left Side Content */}
          <div className="mb-10 max-w-md md:mb-0 md:pr-8">         
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              <span className="block">Security For</span>
              <span className="block text-primary">Vibe Coders</span>
            </h1>
            
            <p className="mb-8 text-base-content/80 text-lg">
              It&apos;s a service that provides easy-to-use and confident security testing for solo developers and small startups.
            </p>
            
            <div className="mb-6 flex items-center space-x-4">
              <div className="flex items-center">
                <CheckCircleIcon className="mr-2 h-5 w-5 text-primary" />
                <span className="text-sm">24/7 vulnerability detection</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="mr-2 h-5 w-5 text-primary" />
                <span className="text-sm">No coding experience needed</span>
              </div>
            </div>
            
            <ButtonWaitlist />
          </div>
          
          {/* Right Side Image/Animation */}
          <div className="relative h-[400px] w-full max-w-lg md:h-[500px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <VibeWave />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-48 w-48 rounded-full bg-primary/10 p-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-36 w-36 rounded-full bg-primary/20 p-4">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-primary">
                      <ShieldCheckIcon className="h-16 w-16 text-primary-content" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Hero Section Subcomponents
function CheckCircleIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
    </svg>
  );
}

function ShieldIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.75.75 0 00.674 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
    </svg>
  );
}

function ShieldCheckIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.75.75 0 00.674 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
    </svg>
  );
}