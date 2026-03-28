import { motion } from 'framer-motion';

const LetterSection = () => {
  return (
    <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-t from-white via-rose-50/30 to-lavender-50/30 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="glass-card rounded-3xl p-12 md:p-20 shadow-2xl border border-white/30 relative overflow-hidden max-w-5xl mx-auto"
        >
          {/* Decorative envelope */}
          <motion.div
            className="w-32 h-32 bg-gradient-to-r from-rose-400 via-pink-400 to-lavender-400 rounded-full mx-auto mb-12 flex items-center justify-center text-5xl shadow-2xl border-4 border-white/20"
            initial={{ rotate: -15 }}
            whileInView={{ rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            💌
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-12 text-center bg-gradient-to-r from-gray-900 via-gray-700 to-rose-600 bg-clip-text text-transparent drop-shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            My Heartfelt Letter to You
          </motion.h2>

          {/* Beautiful Letter Content */}
          <div className="space-y-8 prose prose-2xl max-w-none mx-auto text-left lg:prose-wide">
            <blockquote className="glass-card text-2xl md:text-3xl font-serif italic leading-[1.6] p-12 rounded-3xl border-l-[8px] border-rose-400 shadow-2xl relative bg-gradient-to-r from-rose-500/5 via-white/50 to-lavender-500/5">
              <motion.span 
                className="block font-bold text-4xl md:text-5xl text-rose-600 mb-12 drop-shadow-2xl text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                My Dearest Abisinuola 💕
              </motion.span>
              
              <motion.p 
                className="mb-8 text-xl leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                Happy Birthday, my love ❤️
              </motion.p>

              <motion.p 
                className="mb-10 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                Today feels special… not just because it's your birthday, but because this day was supposed to be our introduction. Funny how life works, right? I'd fall for you all over again—probably even faster this time 😏
              </motion.p>

              <div className="glass-card bg-rose-50/70 p-8 rounded-2xl my-8 border border-rose-200/50">
                <motion.p 
                  className="italic text-xl mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                >
                  You have this beautiful way of being soft <span className="font-bold text-rose-600">and strong</span>. I see you fully—your kindness, emotions, depth—and I choose you every time.
                </motion.p>
              </div>

              <motion.p 
                className="mb-8 text-rose-600 font-semibold text-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                Thank you for staying through my struggles. You believed when I couldn't. That makes me want to love you deeper every day.
              </motion.p>

              <motion.p 
                className="mb-12 italic text-pink-500 text-xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.8 }}
              >
                If I was with you now, I'd steal kisses between sentences, whisper "happy birthday," and remind you how special you are 😏❤️
              </motion.p>

              <div className="border-t-4 border-dashed border-rose-300 pt-12 mb-12 opacity-80">
                <motion.p 
                  className="text-xl italic font-serif text-center text-gray-700 mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 2 }}
                >
                  My prayer: God guides, protects, blesses everything your heart desires. You grow more amazing every day.
                </motion.p>
                <motion.p 
                  className="text-3xl font-bold text-center text-rose-600 drop-shadow-2xl mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 2.2 }}
                >
                  Happy Birthday, my queen 👑
                </motion.p>
              </div>

              <div className="text-center space-y-4 pt-8 border-t border-rose-200/50">
                <motion.span 
                  className="block font-serif text-4xl font-bold text-rose-500 drop-shadow-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 2.4 }}
                >
                  Forever yours,
                </motion.span>
                <motion.span 
                  className="block text-3xl font-bold text-lavender-600 drop-shadow-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 2.6 }}
                >
                  Oluwajomiloju 💕
                </motion.span>
              </div>
            </blockquote>
          </div>

          <motion.div
            className="mt-20 pt-16 border-t-4 border-dashed border-rose-200 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 3 }}
          >
            <p className="text-3xl md:text-4xl font-display italic text-rose-600 drop-shadow-xl">With all my love ❤️</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LetterSection;

