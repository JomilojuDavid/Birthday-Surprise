import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import HeroSection from './components/HeroSection';
import MessagesSection from './components/MessagesSection';
import VideoWishesSection from './components/VideoWishesSection';
import LetterSection from './components/LetterSection';
import GallerySection from './components/GallerySection';
import FinalReveal from './components/FinalReveal';
import Footer from './components/Footer';
import MusicToggle from './components/MusicToggle';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="scroll-smooth overflow-x-hidden">
      <MusicToggle />
      <HeroSection />
      <MessagesSection />
      <VideoWishesSection />
      <LetterSection />
      <GallerySection />
      <FinalReveal />
      <Footer />
    </div>
  );
};

export default App;
