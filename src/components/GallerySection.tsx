import { motion } from 'framer-motion';

const images = [
  '/gallery/img1.jpg',
  '/gallery/img2.jpg',
  '/gallery/img3.jpg',
  '/gallery/img4.jpg',
  '/gallery/img5.jpg',
  '/gallery/img6.jpg',
];

const GallerySection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-lavender-50 to-rose-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-center mb-4 bg-gradient-to-r from-lavender-600 to-rose-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Memories
        </motion.h2>
        <motion.p 
          className="text-xl md:text-2xl font-poppins text-center text-gray-700 mb-20 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          A gallery of moments that make my heart smile
        </motion.p>

        <motion.div
          className="columns-2 md:columns-3 lg:columns-4 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer glass-card border hover:border-rose-300/50"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <img 
                src={src}
                alt={`Memory ${index + 1}`}
                className="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-110 rounded-2xl block"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <h4 className="text-white text-xl md:text-2xl font-playfair font-semibold drop-shadow-2xl">
                  Beautiful Moment #{index + 1}
                </h4>
                <p className="text-rose-100 font-poppins text-sm mt-1 drop-shadow-lg">
                  Every picture tells our story ✨
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;