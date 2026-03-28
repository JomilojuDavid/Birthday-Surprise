import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import type { Message } from '../types';
import TypingText from '../components/TypingText';

const MessagesSection = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    fetch('/messages.json')
      .then(res => res.json())
      .then(data => setMessages(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="min-h-screen px-4 py-20">

      {/* HEADER */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold">
          Messages 💌
        </h2>
        <p className="text-white/60 mt-2 text-sm">
          From people who love you
        </p>
      </div>

      {/* CHAT FLOW */}
      <div className="max-w-xl mx-auto space-y-6">
        {messages.map((message, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
             key={index}
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: index * 0.6 }}
             className={`flex ${isLeft ? 'justify-start' : 'justify-end'}`}
            >
              <div className="max-w-[75%]">

                {/* NAME */}
                <p className={`text-xs mb-1 text-white/40 ${isLeft ? 'text-left' : 'text-right'}`}>
                  {message.name}
                </p>

                {/* MESSAGE BUBBLE */}
                <div
                  className={`
                    px-4 py-3 rounded-2xl text-sm md:text-base leading-relaxed
                    ${isLeft 
                      ? 'bg-white/10 border border-white/10 rounded-bl-none' 
                      : 'bg-pink-500 text-white rounded-br-none'}
                  `}
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

export default MessagesSection;import { useEffect, useState, useRef } from 'react';
import type { Message } from '../types';
import TypingText from '../components/TypingText';

const MessagesSection = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [displayIndex, setDisplayIndex] = useState(0); // controls which message is displayed
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('/messages.json')
      .then(res => res.json())
      .then(data => setMessages(data))
      .catch(err => console.error(err));
  }, []);

  // Sequential typing
  useEffect(() => {
    if (messages.length === 0) return;
    if (displayIndex >= messages.length) return;

    const currentMessage = messages[displayIndex];
    const typingDuration = currentMessage.message.length * 20 + 800; // speed * chars + extra pause

    const timeout = setTimeout(() => {
      setDisplayIndex(displayIndex + 1);
      containerRef.current?.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }, typingDuration);

    return () => clearTimeout(timeout);
  }, [displayIndex, messages]);

  return (
    <section className="min-h-screen px-4 py-20 bg-gradient-to-b from-rose-50 to-lavender-50">
      {/* HEADER */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          Messages 💌
        </h2>
        <p className="text-gray-700 mt-2 text-sm">
          From people who love you
        </p>
      </div>

      {/* CHAT FLOW */}
      <div 
        ref={containerRef} 
        className="max-w-xl mx-auto space-y-6 overflow-y-hidden"
      >
        {messages.slice(0, displayIndex).map((message, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div key={index} className={`flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
              <div className="max-w-[75%]">
                {/* NAME */}
                <p className={`text-xs mb-1 ${isLeft ? 'text-left text-gray-600' : 'text-right text-pink-700'}`}>
                  {message.name}
                </p>

                {/* MESSAGE BUBBLE */}
                <div
                  className={`
                    px-4 py-3 rounded-2xl text-sm md:text-base leading-relaxed shadow-md
                    ${isLeft 
                      ? 'bg-white/90 text-gray-900 rounded-bl-none border border-gray-200' 
                      : 'bg-pink-500 text-white rounded-br-none'}
                  `}
                >
                  <TypingText text={message.message} speed={20} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MessagesSection;