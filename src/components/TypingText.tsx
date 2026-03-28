import { useEffect, useState } from 'react';

interface TypingTextProps {
  text: string;
  speed?: number; // milliseconds per character
  cursor?: boolean; // show blinking cursor
}

const TypingText: React.FC<TypingTextProps> = ({
  text,
  speed = 30,
  cursor = true,
}) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    setDisplayedText('');
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[currentIndex]);
      currentIndex++;
      if (currentIndex >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span>
      {displayedText}
      {cursor && <span className="animate-blink">|</span>}
      <style jsx>{`
        .animate-blink {
          display: inline-block;
          margin-left: 2px;
          width: 1px;
          background-color: currentColor;
          animation: blink 1s steps(2, start) infinite;
        }
        @keyframes blink {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </span>
  );
};

export default TypingText;