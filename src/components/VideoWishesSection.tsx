import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface VideoWish {
  name: string;
  videoUrl: string;
  thumbnail?: string;
  duration?: string;
}

const videoWishes: VideoWish[] = [
  {
    name: "Anty Tolu Special Message 🎥",
    videoUrl: "/videos/Anty-tolu-wish.mp4",
    thumbnail: "/videos/Anty-tolu-wish.mp4",
    duration: "0:31"
  },
  {
    name: "Mummy Alvin Birthday Toast 🎥", 
    videoUrl: "/videos/mummy-alvin-wish.mp4",
    thumbnail: "/videos/mummy-alvin-wish.mp4",
    duration: "0:43"
  },
  {
    name: "Anty Tope Wish 🎥",
    videoUrl: "/videos/Anty-tope-wish.mp4",
    thumbnail: "/videos/Anty-tope-wish.mp4",
    duration: "0:38"
  },
  {
    name: "Anty Yemi Wish 🎥",
    videoUrl: "/videos/Anty-yemi-wish.mp4",
    thumbnail: "/videos/Anty-yemi-wish.mp4",
    duration: "0:32"
  },
  {
    name: "Folasade Wish 🎥",
    videoUrl: "/videos/Folasade-wish.mp4",
    thumbnail: "/videos/Folasade-wish.mp4",
    duration: "0:20"
  },
  {
    name: "Idowu Wish 🎥",
    videoUrl: "/videos/Idowu-wish.mp4",
    thumbnail: "/videos/Idowu-wish.mp4",
    duration: "0:21"
  },
  {
    name: "Voice Message - Daddy 🎤",
    videoUrl: "/audio/daddy-voice.mp3",
    thumbnail: "/assets/hero.png",
    duration: "0:31"
  },
  {
    name: "Voice Message - Mummy 🎤",
    videoUrl: "/audio/mummy-voice.mp3",
    thumbnail: "/assets/hero.png",
    duration: "0:16"
  },
  {
    name: "Voice Message - Mercy-Edebo 🎤",
    videoUrl: "/audio/mercy-voice.mp3",
    thumbnail: "/assets/hero.png",
    duration: "1:42"
  }
];


const VideoWishesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentWish, setCurrentWish] = useState<VideoWish | null>(null);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const openModal = (wish: VideoWish) => {
    setCurrentWish(wish);
    setIsModalOpen(true);
    setProgress(0);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentWish(null);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  useEffect(() => {
    if (isModalOpen && currentWish && videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [isModalOpen, currentWish]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', closeModal);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', closeModal);
    };
  }, [currentWish]);

  return (
    <>
      <section id="videos" className="py-20 px-4 bg-black min-h-screen">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-playfair font-bold text-center mb-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Video Wishes
          </motion.h2>
          <motion.p 
            className="text-base font-poppins font-semibold text-center text-white mb-16 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Hear and see the love from those who couldn't be here
          </motion.p>

          <motion.div
            className="grid grid-cols-2 gap-4 max-w-2xl mx-auto px-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {videoWishes.map((wish, index) => (
              <motion.div
                key={index}
                className="group relative w-64 h-auto mx-auto p-6 snap-center"
                whileHover={{ scale: 1.05, y: -8 }}
                onClick={() => openModal(wish)}
              >
                {/* IG Stories Style Circle Preview */}
                <div className="stories-ring relative w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full shadow-lg border-4 border-white/70 cursor-pointer group-hover:rotate-3">
                  <video 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 rounded-full"
                    src={wish.videoUrl}
                    muted
                    playsInline
                    preload="metadata"
                    poster={wish.thumbnail || wish.videoUrl + '#t=1'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent rounded-full" />
                  
                  {/* Pulsing Play Icon */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <div className="w-12 h-12 bg-white/30 backdrop-blur-xl rounded-full flex items-center justify-center text-lg shadow-lg border-4 border-white/50 group-hover:bg-white/70 transition-all duration-400">
                      {wish.videoUrl.endsWith('.mp3') ? '🎤' : '▶️'}
                    </div>
                  </motion.div>

                  {/* Duration Ring Badge */}
                  <div className="absolute top-1 right-1 w-8 h-8 bg-rose-500/95 backdrop-blur-md rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-lg border border-white/50">
                    {wish.duration}
                  </div>
                </div>
                
                {/* Name & Play Prompt */}
                <div className="text-center">
                  <h4 className="text-sm font-playfair font-bold text-white mb-1 truncate px-2 drop-shadow-sm">
                    {wish.name}
                  </h4>
                  <div className="flex items-center justify-center gap-1 text-xs text-pink-400 font-semibold">
                    <div className="w-1 h-1 bg-pink-400 rounded-full animate-pulse" />
                    <span>Tap</span>
                    <motion.div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full" whileHover={{ scale: 1.2 }} />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* IG Reels Fullscreen Modal */}
      {isModalOpen && currentWish && (
        <div 
          className="ig-modal fixed inset-0 z-[10001] flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="w-full h-full max-w-md max-h-screen flex flex-col bg-black rounded-lg overflow-hidden shadow-2xl mx-auto my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="ig-modal-header px-4 pt-3 pb-2 flex items-center justify-between">
              <button 
                className="text-white/80 hover:text-white text-2xl p-2 rounded-full hover:bg-white/10 transition-all"
                onClick={closeModal}
              >
                ×
              </button>
              <h3 className="font-bold text-base text-white truncate max-w-xs text-center px-4">
                {currentWish.name}
              </h3>
              <div className="w-10" />
            </div>

            {/* Video Player */}
            <div className="ig-modal-video flex-1 flex items-center justify-center bg-black p-2">
              <video 
                ref={videoRef}
                className="w-full h-full max-h-[60vh] object-contain rounded-lg shadow-lg"
                controls
                autoPlay
                playsInline
                disablePictureInPicture
              >
                <source src={currentWish.videoUrl} type={currentWish.videoUrl.endsWith('.mp3') ? 'audio/mpeg' : 'video/mp4'} />
              </video>
            </div>

            {/* Progress Bar */}
            <div className="ig-modal-progress mx-4 mb-4">
              <div 
                className="ig-modal-progress-bar"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoWishesSection;