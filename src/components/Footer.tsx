import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-16 px-4 bg-gradient-to-t from-rose-900/20 to-transparent backdrop-blur-sm">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-4xl mb-6">💕</div>
          <p className="text-2xl font-playfair font-semibold text-white mb-4">
            Made with ❤️
          </p>
          <p className="text-lg font-poppins text-white/90">
            by [The Jomiloju David]
          </p>
          <p className="text-sm font-poppins text-white/70 mt-8">
            For the most sweetest and amazing person in my life
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;