
import React, { useState, useEffect } from 'react';

interface TypeWriterProps {
  text: string;
  speed?: number;
  className?: string;
}

const TypeWriter: React.FC<TypeWriterProps> = ({ text, speed = 50, className = '' }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Calculate speed to complete typing in 2 seconds
  const calculatedSpeed = Math.max(1, Math.floor(2000 / text.length));

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, calculatedSpeed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, calculatedSpeed]);

  return (
    <p className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </p>
  );
};

export default TypeWriter;
