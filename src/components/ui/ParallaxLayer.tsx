import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface ParallaxLayerProps {
  children?: React.ReactNode;
  speed?: number;
  direction?: 'vertical' | 'horizontal';
  className?: string;
  disabled?: boolean;
  offset?: number;
}

const ParallaxLayer = ({
  children,
  speed = 0.5,
  direction = 'vertical',
  className = '',
  disabled = false,
  offset = 0
}: ParallaxLayerProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '50px',
    triggerOnce: false
  });

  useEffect(() => {
    if (disabled || !inView) return;

    const handleScroll = () => {
      if (!elementRef.current) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const elementTop = elementRef.current.offsetTop;
      const elementHeight = elementRef.current.offsetHeight;
      const elementBottom = elementTop + elementHeight;

      // Only transform if element is in viewport
      if (elementBottom < 0 || elementTop > windowHeight + scrollY) return;

      let newTransform = { x: 0, y: 0 };

      if (direction === 'vertical') {
        // Calculate vertical parallax offset
        const elementCenter = elementTop + elementHeight / 2;
        const viewportCenter = scrollY + windowHeight / 2;
        const distance = viewportCenter - elementCenter;
        newTransform.y = distance * speed + offset;
      } else {
        // Calculate horizontal parallax offset
        newTransform.x = scrollY * speed + offset;
      }

      setTransform(newTransform);
    };

    // Throttle scroll events for performance
    let ticking = false;
    const optimizedScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', optimizedScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', optimizedScroll);
    };
  }, [speed, direction, disabled, inView, offset]);

  // Handle resize events
  useEffect(() => {
    const handleResize = () => {
      if (!disabled && inView) {
        window.dispatchEvent(new Event('scroll'));
      }
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [disabled, inView]);

  const setRefs = (element: HTMLDivElement | null) => {
    elementRef.current = element;
    ref(element);
  };

  const getTransformStyle = () => {
    if (disabled) return {};
    return {
      transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      willChange: 'transform'
    };
  };

  const getDataAttributes = () => {
    if (disabled) return {};
    return {
      'data-parallax-speed': speed,
      'data-parallax-direction': direction
    };
  };

  return (
    <div
      ref={setRefs}
      className={`parallax-layer ${className}`}
      style={getTransformStyle()}
      {...getDataAttributes()}
    >
      {children}
    </div>
  );
};

export default ParallaxLayer;