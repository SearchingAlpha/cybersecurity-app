// components/sections/InfoSection.jsx
import CardFeature from '@/components/ui/CardFeature';

export default function InfoSection() {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Geometric Background Elements - MORE VISIBLE */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Grid pattern - MORE VISIBLE */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(#2DD4BF20 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}></div>
        
        {/* Large decorative blocks - MORE VISIBLE */}
        <div className="absolute top-40 -left-20 h-60 w-60 bg-[#2DD4BF]/10" style={{ transform: 'rotate(15deg)' }}></div>
        <div className="absolute -bottom-20 right-20 h-80 w-80 border-8 border-[#2DD4BF]/10"></div>
        
        {/* Small accent shapes - MORE VISIBLE */}
        <div className="absolute top-20 right-40 h-16 w-16 bg-[#2DD4BF]/15"></div>
        <div className="absolute bottom-40 left-1/4 h-10 w-10 bg-[#2DD4BF]/15" style={{ transform: 'rotate(45deg)' }}></div>
      </div>
      
      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">ONLINE SECURITY</h2>
          <p className="mx-auto max-w-2xl text-[#6B7280]">
            Get comfortable, secure, and use the internet without worrying.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Feature Cards with properly positioned accents */}
          <FeatureCard
            icon={<ShieldLockIcon className="h-6 w-6 text-white" />}
            title="PROTECTION"
            description="Safe, More Comfortable, and Easier to Use. Threat detection starts working before it is downloaded."
          />
          
          <FeatureCard
            icon={<ShieldIcon className="h-6 w-6 text-white" />}
            title="USE THE INTERNET WITHOUT UNNECESSARY HASSLE"
            description="Avoid downloading malware. Securely exchange data synchronizes them effortlessly and forget about the alarm."
          />
          
          <FeatureCard
            icon={<DevicesIcon className="h-6 w-6 text-white" />}
            title="ALL YOUR DEVICES"
            description="All your devices are within one dashboard, making it easy to run from anywhere and anytime."
          />
          
          <FeatureCard
            icon={<ChartIcon className="h-6 w-6 text-white" />}
            title="INSIGHTS"
            description="Insights that make our trusted agency partners swiftly respond to threats."
          />
        </div>
      </div>
    </section>
  );
}

// Feature Card component with properly positioned corner accents
function FeatureCard({ icon, title, description }) {
  return (
    <div className="relative rounded-none border border-gray-100 bg-white p-6 shadow-sm">
      <div className="relative mb-3 flex h-10 w-10 items-center justify-center rounded-none bg-[#2DD4BF]">
        {icon}
        {/* Properly positioned corner accents for icon */}
        <div className="absolute -top-1 -left-1 h-2 w-2 border-t border-l border-white"></div>
        <div className="absolute -top-1 -right-1 h-2 w-2 border-t border-r border-white"></div>
        <div className="absolute -bottom-1 -left-1 h-2 w-2 border-b border-l border-white"></div>
        <div className="absolute -bottom-1 -right-1 h-2 w-2 border-b border-r border-white"></div>
      </div>
      <h3 className="mb-2 text-lg font-bold">{title}</h3>
      <p className="text-[#6B7280]">{description}</p>
      
      {/* Properly positioned corner accents for card */}
      <div className="absolute -top-1 -left-1 h-4 w-4 border-t-2 border-l-2 border-[#2DD4BF]"></div>
      <div className="absolute -top-1 -right-1 h-4 w-4 border-t-2 border-r-2 border-[#2DD4BF]"></div>
      <div className="absolute -bottom-1 -left-1 h-4 w-4 border-b-2 border-l-2 border-[#2DD4BF]"></div>
      <div className="absolute -bottom-1 -right-1 h-4 w-4 border-b-2 border-r-2 border-[#2DD4BF]"></div>
    </div>
  );
}

// Info Section Icons
function ShieldLockIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
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

function DevicesIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
      <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z" clipRule="evenodd" />
    </svg>
  );
}

function ChartIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z" clipRule="evenodd" />
      <path fillRule="evenodd" d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z" clipRule="evenodd" />
    </svg>
  );
}