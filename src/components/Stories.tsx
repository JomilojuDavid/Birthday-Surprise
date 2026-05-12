import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Story {
  id: string;
  name: string;
  videoUrl: string;
  thumbnail?: string;
  duration?: string;
}

const stories: Story[] = [
  {
    id: 'hero',
    name: 'Happy Birthday!',
    videoUrl: '/assets/hero.png',
    thumbnail: '/assets/hero.png',
    duration: '0:05'
  },
  {
    id: 'anty-tolu',
    name: "Anty Tolu",
    videoUrl: "/videos/Anty-tolu-wish.mp4",
    thumbnail: "/videos/Anty-tolu-wish.mp4",
    duration: "0:31"
  },
  {
    id: 'mummy-alvin',
    name: "Mummy Alvin",
    videoUrl: "/videos/mummy-alvin-wish.mp4",
    thumbnail: "/videos/mummy-alvin-wish.mp4",
    duration: "0:43"
  },
  {
    id: 'anty-tope',
    name: "Anty Tope",
    videoUrl: "/videos/Anty-tope-wish.mp4",
    thumbnail: "/videos/Anty-tope-wish.mp4",
    duration: "0:38"
  },
  {
    id: 'anty-yemi',
    name: "Anty Yemi",
    videoUrl: "/videos/Anty-yemi-wish.mp4",
    thumbnail: "/videos/Anty-yemi-wish.mp4",
    duration: "0:32"
  },
  {
    id: 'folasade',
    name: "Folasade",
    videoUrl: "/videos/Folasade-wish.mp4",
    thumbnail: "/videos/Folasade-wish.mp4",
    duration: "0:20"
  },
  {
    id: 'idowu',
    name: "Idowu",
    videoUrl: "/videos/Idowu-wish.mp4",
    thumbnail: "/videos/Idowu-wish.mp4",
    duration: "0:21"
  }
];

const Stories = () => {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const openStory = (story: Story) => {
    setSelectedStory(story);
    setProgress(0);
  };

  const closeStory = () => {
    setSelectedStory(null);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  useEffect(() => {
    if (selectedStory && videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [selectedStory]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', closeStory);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', closeStory);
    };
  }, [selectedStory]);

  return (
    <>
      {/* Stories Bar */}
      <div className="bg-black px-4 py-4 border-b border-gray-800">
        <div className="flex space-x-4 overflow-x-auto">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              className="flex flex-col items-center space-y-1 cursor-pointer"
              whileTap={{ scale: 0.95 }}
              onClick={() => openStory(story)}
            >
              <div className="relative">
                <div className="w-16 h-16 rounded-full p-0.5 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600">
                  <div className="w-full h-full bg-gray-900 rounded-full overflow-hidden flex items-center justify-center">
                    {story.videoUrl.endsWith('.mp4') ? (
                      <video
                        className="w-full h-full object-cover rounded-full"
                        muted
                        playsInline
                        preload="metadata"
                        poster={story.thumbnail || story.videoUrl + '#t=1'}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center text-white text-xs font-bold rounded-full">
                        🎂
                      </div>
                    )}
                  </div>
                </div>
                {index === 0 && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-pink-500 rounded-full flex items-center justify-center border-2 border-black">
                    <span className="text-white text-xs">+</span>
                  </div>
                )}
              </div>
              <span className="text-xs text-gray-300 truncate w-16 text-center">
                {story.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Story Modal */}
      {selectedStory && (
        <div
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
          onClick={closeStory}
        >
          <div
            className="w-full h-full max-w-sm max-h-screen flex flex-col bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Progress Bar */}
            <div className="absolute top-4 left-4 right-4 h-1 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-white transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Header */}
            <div className="absolute top-8 left-4 right-4 flex items-center justify-between z-10">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-purple-500 p-0.5">
                  <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center text-white text-xs">
                    {selectedStory.name.charAt(0)}
                  </div>
                </div>
                <span className="text-white font-medium">{selectedStory.name}</span>
              </div>
              <button
                className="text-white text-xl"
                onClick={closeStory}
              >
                ×
              </button>
            </div>

            {/* Video */}
            <div className="flex-1 flex items-center justify-center p-4">
              {selectedStory.videoUrl.endsWith('.mp4') ? (
                <video
                  ref={videoRef}
                  className="w-full h-full max-h-full object-contain rounded-lg"
                  controls
                  autoPlay
                  playsInline
                  disablePictureInPicture
                >
                  <source src={selectedStory.videoUrl} type="video/mp4" />
                </video>
              ) : (
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">🎂</div>
                  <h2 className="text-2xl font-bold mb-2">Happy Birthday!</h2>
                  <p className="text-gray-300">Abisinuola ❤️</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Stories;