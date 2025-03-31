// app/page.jsx
import HeroSection from '@/components/sections/HeroSection';
import InfoSection from '@/components/sections/InfoSection';
import { Suspense } from 'react';
import LoadingFallback from '@/components/ui/LoadingFallback';

export default function Home() {
  return (
    <main className="min-h-screen bg-base">
      <Suspense fallback={<LoadingFallback />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <InfoSection />
      </Suspense>
    </main>
  );
}