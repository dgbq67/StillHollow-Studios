import { useEffect, useState } from 'react';

export type CursorType = 'default' | 'pointer' | 'text' | 'hover';

interface CursorPosition {
  x: number;
  y: number;
}

export const useCursor = () => {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorType, setCursorType] = useState<CursorType>('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Don't track cursor on touch devices
    if ('ontouchstart' in window) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const setHover = (hovering: boolean, type: CursorType = 'hover') => {
    setIsHovering(hovering);
    setCursorType(hovering ? type : 'default');
  };

  const setCursorState = (type: CursorType) => {
    setCursorType(type);
  };

  return {
    position,
    isHovering,
    isClicking,
    cursorType,
    isVisible,
    setHover,
    setCursorState,
  };
};

export default useCursor;