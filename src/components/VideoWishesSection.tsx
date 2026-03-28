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

  const playVideo = (videoUrl: string) => {
    const video = document.createElement('video');
    video.src = videoUrl;
    video.controls = true;
    video.autoplay = true;
    video.style.maxWidth = '100%';
    video.style.maxHeight = '80vh';
    video.style.borderRadius = '24px';
    video.style.boxShadow = '0 50px 100px rgba(0,0,0,0.3)';
    
    const modal = document.createElement('div');
    modal.style.cssText = `
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.9);
      backdrop-filter: blur(20px);
      z-index: 10000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    `;
    
    modal.appendChild(video);
    document.body.appendChild(modal);
    
    video.onended = () => {
      document.body.removeChild(modal);
    };
    
    modal.onclick = (e) => {
      if (e.target === modal) {
        document.body.removeChild(modal);
      }
    };
  };

  return (
    <section id="videos" className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-rose-100 via-white to-lavender-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-center mb-4 bg-gradient-to-r from-rose-500 via-pink-500 to-lavender-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Video Wishes
        </motion.h2>
        <motion.p 
          className="text-xl md:text-2xl font-poppins font-semibold text-center text-gray-800 mb-24 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Hear and see the love from those who couldn't be here
        </motion.p>

        <motion.div
          className="columns-2 md:columns-3 lg:columns-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {videoWishes.map((wish, index) => (
            <motion.div
              key={index}
              className="group relative bg-gradient-to-br from-white/90 to-rose-50/70 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-3xl border-2 border-white/60 hover:border-rose-300/70 transition-all duration-500 hover:-translate-y-4 cursor-pointer overflow-hidden"
              whileHover={{ scale: 1.05 }}
              onClick={() => playVideo(wish.videoUrl)}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-rose-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Dynamic Video Preview Thumbnail */}
              <div className="relative mb-6 h-48 md:h-52 rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-slate-900/20 to-rose-500/10">
                <video 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src={wish.videoUrl}
                  muted
                  playsInline
                  preload="metadata"
                  poster={wish.videoUrl + '#t=1'} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                
                {/* Play Button - Dynamic Icon */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-xl rounded-3xl flex items-center justify-center text-3xl shadow-2xl border-4 border-white/30 group-hover:scale-[1.15] transition-all duration-400 hover:bg-white/30">
                    {wish.videoUrl.endsWith('.mp3') ? '🎤' : '▶️'}
                  </div>
                </motion.div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-rose-500/90 text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm shadow-lg">
                  {wish.duration}
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h4 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">
                  {wish.name}
                </h4>
                <div className="flex items-center gap-2 text-sm text-rose-500 font-semibold mb-4">
                  <div className="w-3 h-3 bg-rose-400 rounded-full animate-pulse" />
                  <span>{wish.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-lg font-poppins text-gray-700">
                  <span>Click to play</span>
                  <motion.div
                    className="w-6 h-6 bg-gradient-to-r from-rose-400 to-lavender-400 rounded-full flex items-center justify-center text-white text-xs"
                    whileHover={{ scale: 1.2 }}
                  >
                    ▶
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VideoWishesSection;