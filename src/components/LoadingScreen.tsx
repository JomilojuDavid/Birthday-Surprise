import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.random() * 8;
      });
    }, 80);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-rose-500 via-lavender-400 to-rose-600 z-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center text-white"
      >
        <motion.div
          className="w-24 h-24 mx-auto mb-8 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        >
          <div className="w-12 h-12 bg-gradient-to-r from-rose-400 to-lavender-400 rounded-full animate-ping" />
        </motion.div>
        
        <motion.div
          className="text-3xl font-playfair font-bold mb-4 bg-gradient-to-r from-white to-rose-100 bg-clip-text text-transparent"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🎁
        </motion.div>
        
        <p className="text-xl md:text-2xl font-poppins font-medium mb-8">
          Preparing your surprise...
        </p>
        
        <div className="w-64 bg-white/20 rounded-full h-2 mx-auto overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-white to-rose-100 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <p className="text-sm mt-2 opacity-75">{Math.floor(progress)}%</p>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;