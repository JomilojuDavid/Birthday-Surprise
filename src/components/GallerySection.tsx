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
  return (
    <section className="min-h-screen px-4 py-20">
      
      {/* HEADER */}
      <div className="max-w-xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold">
          Our Memories ❤️
        </h2>
        <p className="text-white/60 mt-3 text-sm">
          Moments I never want to forget
        </p>
      </div>

      {/* FEED */}
      <div className="max-w-xl mx-auto space-y-6">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="rounded-3xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg"
          >
            {/* IMAGE */}
            <div className="relative">
              <img
                src={src}
                alt={`Memory ${index + 1}`}
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />

              {/* SUBTLE OVERLAY */}
              <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* CAPTION */}
            <div className="p-4">
              <p className="text-white text-sm leading-relaxed">
                Memory #{index + 1} — one of my favorite moments with you ❤️
              </p>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default GallerySection;