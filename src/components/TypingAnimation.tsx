
import React, { useState, useEffect } from 'react';

interface TypingAnimationProps {
  text: string;
  className?: string;
  speed?: number;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ 
  text, 
  className = '', 
  speed = 50 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className={`${className} typing-animation`}>
      {displayText}
      <span className="animate-blink-caret">|</span>
    </span>
  );
};

export default TypingAnimation;
