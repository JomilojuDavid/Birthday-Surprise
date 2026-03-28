import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import type { Message } from '../types';
const MessagesSection = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    fetch('/messages.json')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(data => {
        console.log('Messages loaded:', data);
        setMessages(data);
      })
      .catch(err => console.error('Messages fetch failed:', err));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="messages" className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-rose-50 to-lavender-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-center mb-4 bg-gradient-to-r from-rose-600 to-lavender-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Messages
        </motion.h2>
        <motion.p 
          className="text-xl md:text-2xl font-poppins text-center text-gray-700 mb-24 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          From People Who Love You
        </motion.p>

        <motion.div
          className="carousel-container flex overflow-x-auto snap-x snap-mandatory gap-8 pb-8 scrollbar-thin scrollbar-thumb-rose-400 scrollbar-track-transparent max-w-none"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {messages.map((message, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
className="group relative flex-none w-80 md:w-[450px] h-[480px] bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl hover:shadow-3xl border border-white/60 hover:border-rose-300/70 transition-all duration-500 hover:-translate-y-4 cursor-grab active:cursor-grabbing snap-start hover:scale-[1.02] min-w-0 flex-shrink-0"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-lavender-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-rose-400 to-lavender-400 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                    💕
                  </div>
                  <div>
                    <h4 className="text-2xl md:text-3xl font-playfair font-semibold text-gray-900 group-hover:text-rose-600 transition-colors">
                      {message.name}
                    </h4>
                  </div>
                </div>
                
                <p className="text-lg md:text-xl font-poppins leading-relaxed text-gray-700 mb-6 line-clamp-6 group-hover:line-clamp-none transition-all duration-300">
                  "{message.message}"
                </p>
                
                <div className="h-1 bg-gradient-to-r from-rose-400 to-lavender-400 rounded-full group-hover:w-full w-16 transition-all duration-500 origin-left" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MessagesSection;