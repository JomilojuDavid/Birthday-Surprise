import { useEffect, useState } from 'react';

interface TypingTextProps {
  text: string;          // Text to type
  speed?: number;        // Typing speed in ms per character
  cursor?: boolean;      // Show blinking cursor
  onComplete?: () => void; // Callback when typing finishes
}

const TypingText: React.FC<TypingTextProps> = ({
  text,
  speed = 40,
  cursor = true,
  onComplete,
}) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText(''); // Reset when text changes
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[currentIndex]);
      currentIndex++;
      if (currentIndex >= text.length) {
        clearInterval(interval);
        onComplete?.(); // Trigger callback after typing finishes
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, onComplete]);

  return (
    <span>
      {displayedText}
      {cursor && <span className="animate-pulse">|</span>}
    </span>
  );
};

export default TypingText;