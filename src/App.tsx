import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import Footer from './components/Footer';
import MusicToggle from './components/MusicToggle';

const LazyHeroSection = lazy(() => import('./components/HeroSection'));
const LazyMessagesSection = lazy(() => import('./components/MessagesSection'));
const LazyVideoWishesSection = lazy(() => import('./components/VideoWishesSection'));
const LazyLetterSection = lazy(() => import('./components/LetterSection'));
const LazyGallerySection = lazy(() => import('./components/GallerySection'));
const LazyFinalReveal = lazy(() => import('./components/FinalReveal'));

const sectionWrapper = (Component: React.ReactNode) => (
  <motion.section
    className="min-h-screen w-full flex items-center justify-center px-4"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    viewport={{ once: true }}
  >
    {Component}
  </motion.section>
);

const App = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden text-white">

      {/* 🌌 GLOBAL BACKGROUND (THIS CHANGES EVERYTHING) */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black via-purple-900 to-pink-900" />

      {/* Optional subtle glow overlay */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,192,203,0.15),transparent_60%)]" />

      {/* 🎵 Floating music button */}
      <MusicToggle />

      {/* 🔄 CONTENT FLOW */}
      <Suspense
        fallback={
          <div className="h-screen flex items-center justify-center text-white text-xl">
            Preparing your surprise ✨
          </div>
        }
      >
        {sectionWrapper(<LazyHeroSection />)}
        {sectionWrapper(<LazyMessagesSection />)}
        {sectionWrapper(<LazyVideoWishesSection />)}
        {sectionWrapper(<LazyLetterSection />)}
        {sectionWrapper(<LazyGallerySection />)}
        {sectionWrapper(<LazyFinalReveal />)}
      </Suspense>

      {/* Footer stays simple */}
      <Footer />
    </div>
  );
};

export default App;