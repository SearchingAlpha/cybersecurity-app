// components/sections/HeroSection.jsx
import Image from 'next/image';
import ButtonWaitlist from '@/components/ui/ButtonWaitlist';

export default function HeroSection() {
  return (
    <section className="relative bg-[#F9FAFB] py-16 overflow-hidden">
      {/* Geometric Background Elements - MORE VISIBLE */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Grid Lines - MORE VISIBLE */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'linear-gradient(to right, #2DD4BF20 1px, transparent 1px), linear-gradient(to bottom, #2DD4BF20 1px, transparent 1px)', 
          backgroundSize: '80px 80px' 
        }}></div>
        
        {/* Top-right decorative shape - MORE VISIBLE */}
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full border-8 border-[#2DD4BF]/15"></div>
        <div className="absolute top-40 -right-10 h-40 w-40 rounded-full border-4 border-[#2DD4BF]/20"></div>
        
        {/* Bottom-left decorative shape - MORE VISIBLE */}
        <div className="absolute -bottom-40 -left-40 h-96 w-96 border-8 border-[#2DD4BF]/15" style={{ transform: 'rotate(45deg)' }}></div>
        <div className="absolute bottom-10 left-10 h-20 w-20 border-4 border-[#2DD4BF]/20" style={{ transform: 'rotate(45deg)' }}></div>
      </div>
      
      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Side Content */}
          <div className="mb-12 w-full max-w-lg md:mb-0 md:pr-8">
            <div className="mb-4 flex items-center">
              <div className="relative mr-2 h-8 w-8 rounded-none flex items-center justify-center">
                {/* Properly positioned corner accents */}
                <div className="absolute -top-1 -left-1 h-2 w-2 border-t border-l border-white"></div>
                <div className="absolute -top-1 -right-1 h-2 w-2 border-t border-r border-white"></div>
                <div className="absolute -bottom-1 -left-1 h-2 w-2 border-b border-l border-white"></div>
                <div className="absolute -bottom-1 -right-1 h-2 w-2 border-b border-r border-white"></div>
              </div>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              <span className="block">SECURITY</span>
              <span className="block text-[#2DD4BF]">VIBESAFE</span>
            </h1>
            
            <p className="mb-8 text-[#6B7280] text-lg">
              It's a service that provides easy-to-use and confident security testing for solo developers and small startups.
            </p>
            
            <div className="mb-8 flex items-center space-x-6">
              <div className="flex items-center">
                <ShieldCheckIcon className="mr-2 h-5 w-5 text-[#2DD4BF]" />
                <span className="text-sm">24/7 malware protection</span>
              </div>
            </div>
            
            <div className="mb-8">
              <ButtonWaitlist />
            </div>
          </div>
          
          {/* Right Side Image */}
          <div className="w-full max-w-md relative">
            <div className="relative aspect-square rounded-none bg-white border border-[#2DD4BF]/30 flex items-center justify-center overflow-hidden shadow-md">
              <div className="absolute w-full h-full">
                {/* Grid lines for inside the eye container - MORE VISIBLE */}
                <div className="absolute inset-0" style={{ 
                  backgroundImage: 'linear-gradient(to right, #2DD4BF10 1px, transparent 1px), linear-gradient(to bottom, #2DD4BF10 1px, transparent 1px)', 
                  backgroundSize: '20px 20px' 
                }}></div>
                
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-2/5 rounded-full border-4 border-[#2DD4BF]/40"></div>
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60%] h-[30%] bg-[#2DD4BF]/15 rounded-full"></div>
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40%] h-[20%] bg-[#2DD4BF]/25 rounded-full"></div>
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[20%] h-[10%] bg-[#2DD4BF] rounded-full"></div>
                <div className="absolute top-[40%] right-[30%] w-2 h-2 bg-[#2DD4BF] rounded-full"></div>
                <div className="absolute top-[60%] left-[30%] w-2 h-2 bg-[#2DD4BF] rounded-full"></div>
                <div className="absolute left-0 right-0 top-1/2 h-px bg-[#2DD4BF]/40"></div>
                <div className="absolute bottom-0 top-0 left-1/2 w-px bg-[#2DD4BF]/40"></div>
              </div>
              
              {/* Properly positioned corner accents */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#2DD4BF]"></div>
              <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[#2DD4BF]"></div>
              <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[#2DD4BF]"></div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#2DD4BF]"></div>
            </div>
            
            {/* Status information section below the eye */}
            <div className="relative mt-4 bg-white p-4 border border-gray-100 rounded-none shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500">Protection Status</span>
                <span className="text-sm font-medium text-green-500">Active</span>
              </div>
              <div className="mt-2 h-1.5 w-full bg-gray-100 rounded-none overflow-hidden">
                <div className="h-full w-full bg-[#2DD4BF] rounded-none"></div>
              </div>
              <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
                <span>No vulnerabilities detected</span>
                <span>Updated 2m ago</span>
              </div>
              
              {/* Properly positioned corner accents */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-[#2DD4BF]"></div>
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-[#2DD4BF]"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-[#2DD4BF]"></div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-[#2DD4BF]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Icon Components
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