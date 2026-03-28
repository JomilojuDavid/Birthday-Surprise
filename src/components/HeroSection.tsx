import { motion } from 'framer-motion';

const HeroSection = () => {
  const scrollToMessages = () => {
    document.getElementById('messages')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-rose-400 via-lavender-400 to-rose-500 pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 to-lavender-500/20 animate-pulse-soft" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-rose-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-lavender-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl opacity-50 animate-pulse" />
      </div>

      {/* ✅ FIXED: Replaced useInView with whileInView */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="text-center text-white px-4 max-w-4xl mx-auto z-10 relative"
      >
        <motion.div
          className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold mb-6 md:mb-8 leading-tight"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Happy Birthday,
          <motion.span
            className="block bg-gradient-to-r from-rose-100 to-white bg-clip-text text-transparent drop-shadow-2xl"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Abisinuola
          </motion.span>
          <span className="text-4xl md:text-6xl">❤️</span>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl lg:text-3xl font-poppins font-light mb-12 md:mb-16 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          A little surprise made just for you
        </motion.p>

        <motion.button
          onClick={scrollToMessages}
          className="group relative px-12 py-6 bg-white/20 backdrop-blur-xl rounded-3xl font-poppins font-semibold text-xl md:text-2xl border-2 border-white/30 hover:border-white/50 transition-all duration-300 hover:bg-white/30 hover:scale-105 shadow-2xl hover:shadow-3xl"
          whileHover={{ scale: 1.05, boxShadow: '0 25px 50px -12px rgba(255, 255, 255, 0.25)' }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span className="relative z-10 flex items-center gap-3">
            Open Your Gift 
            <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">🎁</span>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-lavender-400 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;