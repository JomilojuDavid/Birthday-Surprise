import { motion } from 'framer-motion';

const HeroSection = () => {
  const scrollToMessages = () => {
    document.getElementById('messages')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 text-center overflow-hidden">

      {/* 🌌 SUBTLE GLOW BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-pink-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full" />
      </div>

      {/* 💖 CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >

        {/* MAIN TEXT */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
          Happy Birthday
        </h1>

        <motion.h2
          className="text-5xl md:text-7xl font-bold mt-2 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Abisinuola ❤️
        </motion.h2>

        {/* SUBTEXT */}
        <p className="mt-6 text-white/60 text-sm md:text-lg leading-relaxed">
          I made something special for you
        </p>

        {/* 🎁 CTA BUTTON */}
        <motion.button
          onClick={scrollToMessages}
          whileTap={{ scale: 0.95 }}
          className="mt-10 px-8 py-4 rounded-full bg-white text-black font-medium text-sm md:text-base shadow-xl hover:scale-105 transition"
        >
          Open Your Gift 🎁
        </motion.button>

      </motion.div>
    </section>
  );
};

export default HeroSection;