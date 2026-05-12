import { useEffect, useState } from 'react';
import type { Message } from '../types';
import TypingText from './TypingText';

const MessagesSection = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [displayIndex, setDisplayIndex] = useState(0); // Which message is currently typing
  const [showNext, setShowNext] = useState(false);

  useEffect(() => {
    fetch('/messages.json')
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error(err));
  }, []);

  const handleTypingComplete = () => {
    // Trigger next message after current finishes
    setShowNext(true);
  };

  return (
    <section className="min-h-screen px-4 py-20 flex flex-col items-center">
      {/* HEADER */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Messages 💌</h2>
        <p className="text-white/60 mt-2 text-sm">From people who love you</p>
      </div>

      {/* CHAT FLOW */}
      <div className="max-w-xl w-full space-y-6">
        {messages.slice(0, displayIndex + 1).map((message, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={index}
              className={`flex ${isLeft ? 'justify-start' : 'justify-end'}`}
            >
              <div className="max-w-[75%]">
                {/* NAME */}
                <p className={`text-xs mb-1 text-white/40 ${isLeft ? 'text-left' : 'text-right'}`}>
                  {message.name}
                </p>

                {/* MESSAGE BUBBLE */}
                <div
                  className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    isLeft
                      ? 'bg-white/10 border border-white/10 rounded-bl-none'
                      : 'bg-pink-500 text-white rounded-br-none'
                  }`}
                >
                  <TypingText
                    text={message.message}
                    speed={20}
                    cursor={true}
                    key={index} // reset typing when message changes
                    // Callback after typing finishes
                    onComplete={() => {
                      // Show next message after a short delay
                      setTimeout(() => {
                        setDisplayIndex((prev) => prev + 1);
                        setShowNext(false);
                      }, 800);
                    }}
                  />
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