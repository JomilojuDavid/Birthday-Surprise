import React, { lazy, Suspense, useState } from 'react';
import { motion } from 'framer-motion';
import TopBar from './components/TopBar';
import Stories from './components/Stories';
import Feed from './components/Feed';
import BottomNav from './components/BottomNav';
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
  const [currentView, setCurrentView] = useState<'feed' | 'reels' | 'profile'>('feed');

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Mobile-only Instagram-style layout */}
      <div className="w-screen max-w-full min-h-screen relative overflow-hidden">
        {/* Top Bar */}
        <TopBar />

        {/* Stories Section */}
        <Stories />

        {/* Main Content */}
        {currentView === 'feed' && (
          <div className="pb-16">
            <Feed />
          </div>
        )}

        {currentView === 'reels' && (
          <div className="pb-16">
            <Suspense fallback={<div className="text-center py-8">Loading videos...</div>}>
              <LazyVideoWishesSection />
            </Suspense>
          </div>
        )}

        {currentView === 'profile' && (
          <div className="pb-16">
            <Suspense fallback={<div className="text-center py-8">Loading profile...</div>}>
              <LazyHeroSection />
              <LazyMessagesSection />
              <LazyLetterSection />
              <LazyGallerySection />
              <LazyFinalReveal />
            </Suspense>
          </div>
        )}

        {/* Bottom Navigation */}
        <BottomNav currentView={currentView} onViewChange={setCurrentView} />

        {/* Floating music button */}
        <MusicToggle />
      </div>
    </div>
  );
};

export default App;