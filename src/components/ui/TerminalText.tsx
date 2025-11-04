import { useState, useEffect } from 'react';

interface TerminalTextProps {
  text: string;
  delay?: number;
  className?: string;
  onComplete?: () => void;
  startVisible?: boolean;
  glitch?: boolean;
}

const TerminalText = ({
  text,
  delay = 100,
  className = '',
  onComplete,
  startVisible = true,
  glitch = false
}: TerminalTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [shouldStart, setShouldStart] = useState(startVisible);

  useEffect(() => {
    if (!shouldStart) return;

    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const typeCharacter = () => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;

        // Vary the delay for more realistic typing
        const currentDelay = Math.random() > 0.9 ? delay * 2 : delay;
        timeoutId = setTimeout(typeCharacter, currentDelay);
      } else {
        setIsTyping(false);
        onComplete?.();
      }
    };

    typeCharacter();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [text, delay, onComplete, shouldStart]);

  useEffect(() => {
    if (startVisible) {
      setShouldStart(true);
    }
  }, [startVisible]);

  const startTyping = () => {
    setShouldStart(true);
  };

  const getTerminalClass = () => {
    let baseClass = 'terminal-text';
    if (className) baseClass += ` ${className}`;
    if (glitch) baseClass += ' terminal-glitch';
    return baseClass;
  };

  return (
    <div className={getTerminalClass()}>
      <span style={{ fontFamily: 'Courier New, monospace' }}>
        {displayedText}
        {isTyping && <span className="terminal-cursor">|</span>}
      </span>
    </div>
  );
};

export default TerminalText;