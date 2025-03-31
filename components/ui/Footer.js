// components/ui/Footer.jsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative border-t border-gray-100 bg-white py-12 overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'linear-gradient(to right, #2DD4BF08 1px, transparent 1px), linear-gradient(to bottom, #2DD4BF08 1px, transparent 1px)', 
          backgroundSize: '50px 50px' 
        }}></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/3 w-1/3 h-px bg-[#2DD4BF]/20"></div>
        <div className="absolute bottom-0 right-1/3 w-1/3 h-px bg-[#2DD4BF]/20"></div>
        <div className="absolute -bottom-20 -left-20 h-40 w-40 border-8 border-[#2DD4BF]/5"></div>
        <div className="absolute top-10 right-10 h-20 w-20 bg-[#2DD4BF]/5" style={{ transform: 'rotate(45deg)' }}></div>
      </div>
      
      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="mb-4 flex items-center">
              <div className="relative mr-2 flex h-8 w-8 items-center justify-center bg-[#2DD4BF]">
                <ShieldIcon className="h-5 w-5 text-white" />
                <div className="absolute -top-0.5 -left-0.5 h-2 w-2 border-t border-l border-white"></div>
                <div className="absolute -top-0.5 -right-0.5 h-2 w-2 border-t border-r border-white"></div>
                <div className="absolute -bottom-0.5 -left-0.5 h-2 w-2 border-b border-l border-white"></div>
                <div className="absolute -bottom-0.5 -right-0.5 h-2 w-2 border-b border-r border-white"></div>
              </div>
              <span className="text-lg font-bold">VibeSafe</span>
            </div>
            <p className="mb-4 text-[#6B7280]">
              Security testing for solo developers and small startups. No coding experience required.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={<TwitterIcon className="h-5 w-5" />} href="#" />
              <SocialLink icon={<GithubIcon className="h-5 w-5" />} href="#" />
              <SocialLink icon={<LinkedinIcon className="h-5 w-5" />} href="#" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="#features">Features</FooterLink>
              <FooterLink href="#pricing">Pricing</FooterLink>
              <FooterLink href="#support">Support</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase">Legal</h3>
            <ul className="space-y-2">
              <FooterLink href="#privacy">Privacy Policy</FooterLink>
              <FooterLink href="#terms">Terms of Service</FooterLink>
              <FooterLink href="#cookies">Cookie Policy</FooterLink>
              <FooterLink href="#gdpr">GDPR Compliance</FooterLink>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase">Stay Updated</h3>
            <p className="mb-4 text-[#6B7280]">
              Subscribe to our newsletter for updates on new features and security tips.
            </p>
            <div className="flex">
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-none border border-gray-200 bg-white px-4 py-2 text-[#6B7280] focus:border-[#2DD4BF] focus:outline-none"
                />
                <div className="absolute -top-0.5 -left-0.5 h-2 w-2 border-t border-l border-[#2DD4BF]"></div>
                <div className="absolute -top-0.5 -right-0.5 h-2 w-2 border-t border-r border-[#2DD4BF]"></div>
                <div className="absolute -bottom-0.5 -left-0.5 h-2 w-2 border-b border-l border-[#2DD4BF]"></div>
                <div className="absolute -bottom-0.5 -right-0.5 h-2 w-2 border-b border-r border-[#2DD4BF]"></div>
              </div>
              <div className="relative">
                <button className="relative rounded-none bg-[#2DD4BF] px-4 py-2 text-white">
                  <ArrowRightIcon className="h-5 w-5" />
                  <div className="absolute -top-0.5 -left-0.5 h-2 w-2 border-t border-l border-white"></div>
                  <div className="absolute -top-0.5 -right-0.5 h-2 w-2 border-t border-r border-white"></div>
                  <div className="absolute -bottom-0.5 -left-0.5 h-2 w-2 border-b border-l border-white"></div>
                  <div className="absolute -bottom-0.5 -right-0.5 h-2 w-2 border-b border-r border-white"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="relative mt-12 border-t border-gray-100 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 text-[#6B7280] md:flex-row md:space-y-0">
            <p>© {new Date().getFullYear()} VibeSafe. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="#privacy" className="hover:text-[#2DD4BF]">Privacy</Link>
              <Link href="#terms" className="hover:text-[#2DD4BF]">Terms</Link>
              <Link href="#sitemap" className="hover:text-[#2DD4BF]">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Footer Subcomponents
function FooterLink({ href, children }) {
  return (
    <li>
      <Link href={href} className="text-[#6B7280] hover:text-[#2DD4BF]">
        {children}
      </Link>
    </li>
  );
}

function SocialLink({ href, icon }) {
  return (
    <Link
      href={href}
      className="relative flex h-8 w-8 items-center justify-center border border-gray-200 text-[#6B7280] hover:border-[#2DD4BF] hover:text-[#2DD4BF]"
    >
      {icon}
      <div className="absolute -top-0.5 -left-0.5 h-1.5 w-1.5 border-t border-l border-[#2DD4BF]"></div>
      <div className="absolute -top-0.5 -right-0.5 h-1.5 w-1.5 border-t border-r border-[#2DD4BF]"></div>
      <div className="absolute -bottom-0.5 -left-0.5 h-1.5 w-1.5 border-b border-l border-[#2DD4BF]"></div>
      <div className="absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 border-b border-r border-[#2DD4BF]"></div>
    </Link>
  );
}

function ShieldIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.75.75 0 00.674 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
    </svg>
  );
}

function TwitterIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    </svg>
  );
}

function GithubIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

function LinkedinIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function ArrowRightIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
    </svg>
  );
}