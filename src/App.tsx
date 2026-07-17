/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { HeroSection } from './components/HeroSection';
import { IngredientsSection } from './components/IngredientsSection';
import { PyramidSection } from './components/PyramidSection';
import { CraftsmanshipSection } from './components/CraftsmanshipSection';
import { CollectionSection } from './components/CollectionSection';
import { SignatureSection } from './components/SignatureSection';
import { ExperienceSection } from './components/ExperienceSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GallerySection } from './components/GallerySection';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';
import { Scene3D } from './components/Scene3D';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative w-full bg-luxury-bg text-luxury-text min-h-screen">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Scene3D />
      </div>

      {/* Scroll Content */}
      <div className="relative z-10 w-full flex flex-col">
        <HeroSection />
        <IngredientsSection />
        <PyramidSection />
        <CraftsmanshipSection />
        <CollectionSection />
        <SignatureSection />
        <ExperienceSection />
        <TestimonialsSection />
        <GallerySection />
        <NewsletterSection />
        <Footer />
      </div>
    </div>
  );
}
