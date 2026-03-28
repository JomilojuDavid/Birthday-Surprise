import { motion } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';

const FinalReveal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // ✅ FIXED: Pre-generate stable particle positions
  const particlePositions = useMemo(() => 
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${(i * 17.3913) % 100}%`,
      top: `${(i * 23.4567) % 100}%`,
      delay: `${(i * 0.1) % 2}s`
    })), 
  []);

  const words = [
    "This may not be the biggest gift,",
    "but it's made with everything I have right now.",
    "I love you more than words can express.",
    "Happy Birthday, my love 💕"
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-32 px-4 bg-gradient-to-br from-rose-600 via-lavender-500 to-rose-600 relative overflow-hidden">
      {/* Background particles - ✅ FIXED */}
      <div className="absolute inset-0">
        {particlePositions.map((pos) => (
          <motion.div
            key={pos.id}  // ✅ Stable key
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: pos.left,
              top: pos.top,
              animationDelay: pos.delay
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="text-center text-white max-w-4xl mx-auto z-10 relative px-8"
      >
        <motion.div
          className="w-32 h-32 mx-auto mb-12 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-6xl shadow-2xl"
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: 'easeInOut' 
          }}
        >
          🎂
        </motion.div>

        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-12 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Final Words
        </motion.h2>

        <div className="space-y-8 max-w-3xl mx-auto">
          {words.map((word, index) => (
            <motion.p
              key={index}
              className="text-xl md:text-2xl lg:text-3xl font-poppins font-light leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { 
                opacity: 1, 
                y: 0 
              } : {}}
              transition={{ 
                duration: 1, 
                delay: 0.8 + index * 0.4 
              }}
            >
              {word}
            </motion.p>
          ))}
        </div>

        <motion.div
          className="mt-20 pt-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <p className="text-6xl md:text-7xl font-playfair font-bold bg-gradient-to-r from-white to-rose-100 bg-clip-text text-transparent drop-shadow-2xl mb-8">
            I love you! 💖
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <motion.button
              className="px-12 py-4 bg-white/20 backdrop-blur-xl rounded-2xl font-poppins font-semibold text-xl border-2 border-white/30 hover:border-white/50 transition-all duration-300 hover:bg-white/30 hover:scale-105 shadow-xl hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              ↑ Back to Top
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FinalReveal;