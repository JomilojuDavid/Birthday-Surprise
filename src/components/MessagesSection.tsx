import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import type { Message } from '../types';
import TypingText from './TypingText'; // Make sure this path is correct

const MessagesSection = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    fetch('/messages.json')
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error('Failed to load messages:', err));
  }, []);

  return (
    <section className="min-h-screen px-4 py-20 bg-gradient-to-b from-rose-50 to-lavender-50">
      {/* HEADER */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          Messages 💌
        </h2>
        <p className="text-gray-700 mt-2 text-sm md:text-base">
          From people who love you
        </p>
      </div>

      {/* CHAT FLOW */}
      <div className="max-w-xl mx-auto space-y-6">
        {messages.map((message, index) => {
          const isLeft = index % 2 === 0; // Alternate sides for chat bubbles
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.6 }} // stagger messages
              className={`flex ${isLeft ? 'justify-start' : 'justify-end'}`}
            >
              <div className="max-w-[75%]">
                {/* SENDER NAME */}
                <p
                  className={`text-xs mb-1 ${
                    isLeft ? 'text-left text-gray-600' : 'text-right text-pink-500'
                  }`}
                >
                  {message.name}
                </p>

                {/* MESSAGE BUBBLE */}
                <div
                  className={`px-4 py-3 rounded-2xl text-sm md:text-base leading-relaxed ${
                    isLeft
                      ? 'bg-white/80 border border-white/20 rounded-bl-none text-gray-900'
                      : 'bg-pink-500 text-white rounded-br-none'
                  } shadow-lg`}
                >
                  <TypingText text={message.message} speed={20} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default MessagesSection;