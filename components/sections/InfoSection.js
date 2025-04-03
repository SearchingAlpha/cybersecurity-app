// components/sections/InfoSection.jsx
import CardFeature from '@/components/ui/CardFeature';
import ButtonWaitlist from '@/components/ui/ButtonWaitlist';

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
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">WHY YOU'LL LOVE IT</h2>
          <p className="mx-auto max-w-2xl text-[#6B7280]">
            Get comfortable, secure, and use the internet without worrying.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Feature Cards with properly positioned accents */}
          <FeatureCard
            icon={<ShieldLockIcon className="h-6 w-6 text-white" />}
            title="NO-TECHIE FILTER"
            description="Designed for creators, not coders. Test your app with a single click."
          />
          
          <FeatureCard
            icon={<ShieldIcon className="h-6 w-6 text-white" />}
            title="EXHAUSTIVE REPORTS"
            description="Get crystal-clear, step-by-step guides to lock down your app."
          />
          
          <FeatureCard
            icon={<DesignIcon className="h-6 w-6 text-white" />}
            title="MINIMAL VIBES, MAXIMUM EDGE"
            description="Sleek design meets standout security—because your app deserves both."
          />
        </div>

        <div className="mt-20 mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">HOW IT WORKS</h2>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <FeatureCard
            icon={<ScanIcon className="h-6 w-6 text-white" />}
            title="SCAN"
            description="Upload your app or connect it in seconds."
          />
          
          <FeatureCard
            icon={<AnalyzeIcon className="h-6 w-6 text-white" />}
            title="ANALYZE"
            description="We dig deep to uncover every weak spot."
          />
          
          <FeatureCard
            icon={<StrengthIcon className="h-6 w-6 text-white" />}
            title="STRENGTHEN"
            description="Follow our no-jargon fixes to bulletproof your creation."
          />
        </div>

        <div className="mt-20 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">STAND OUT, STAY SAFE</h2>
          <p className="mx-auto max-w-2xl text-[#6B7280] mb-10">
            Your app's unique. Its security should be too. With VibeSafe, you're not just building—you're building smart. Ready to test your app like a pro?
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <div className="mb-8">
              <ButtonWaitlist />
            </div>
            
            <button className="relative flex h-12 items-center justify-center rounded-none border-2 border-[#2DD4BF] px-6 text-[#2DD4BF] transition-all hover:bg-[#2DD4BF]/10 focus:outline-none">
              <span className="text-sm font-medium">See a Sample Report</span>
              <div className="absolute -top-1 -left-1 h-2 w-2 border-t border-l border-[#2DD4BF]"></div>
              <div className="absolute -top-1 -right-1 h-2 w-2 border-t border-r border-[#2DD4BF]"></div>
              <div className="absolute -bottom-1 -left-1 h-2 w-2 border-b border-l border-[#2DD4BF]"></div>
              <div className="absolute -bottom-1 -right-1 h-2 w-2 border-b border-r border-[#2DD4BF]"></div>
            </button>
          </div>
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

function DesignIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.747 18.747 0 00-3.471 2.987 10.04 10.04 0 014.815 4.815 18.748 18.748 0 002.987-3.472l3.386-5.079A1.902 1.902 0 0020.599 1.5zm-8.3 14.025a18.76 18.76 0 001.896-1.207 8.026 8.026 0 00-4.513-4.513A18.75 18.75 0 008.475 11.7l-.278.5a5.26 5.26 0 013.601 3.602l.502-.278zM6.75 13.5A3.75 3.75 0 003 17.25a1.5 1.5 0 01-1.601 1.497.75.75 0 00-.7 1.123 5.25 5.25 0 009.8-2.62 3.75 3.75 0 00-3.75-3.75z" clipRule="evenodd" />
    </svg>
  );
}

function ScanIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
    </svg>
  );
}

function AnalyzeIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
    </svg>
  );
}

function StrengthIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" clipRule="evenodd" />
    </svg>
  );
}