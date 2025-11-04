import { useEffect, useState, useRef } from 'react';

interface ParallaxOptions {
  speed?: number;
  direction?: 'vertical' | 'horizontal';
  offset?: number;
  disabled?: boolean;
  easing?: (t: number) => number;
}

export const useParallax = (
  options: ParallaxOptions = {}
) => {
  const {
    speed = 0.5,
    direction = 'vertical',
    offset = 0,
    disabled = false,
    easing = (t: number) => t
  } = options;

  const elementRef = useRef<HTMLElement>(null);
  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (disabled) {
      setTransform({ x: 0, y: 0 });
      setIsActive(false);
      return;
    }

    const handleScroll = () => {
      if (!elementRef.current) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const elementTop = elementRef.current.offsetTop;
      const elementHeight = elementRef.current.offsetHeight;
      const elementBottom = elementTop + elementHeight;

      // Check if element is in viewport
      const inViewport = elementBottom > 0 && elementTop < windowHeight + scrollY;
      setIsActive(inViewport);

      if (!inViewport) return;

      let newTransform = { x: 0, y: 0 };

      if (direction === 'vertical') {
        // Calculate vertical parallax with easing
        const elementCenter = elementTop + elementHeight / 2;
        const viewportCenter = scrollY + windowHeight / 2;
        const distance = viewportCenter - elementCenter;
        const easedDistance = easing(distance / windowHeight) * windowHeight;
        newTransform.y = easedDistance * speed + offset;
      } else {
        // Calculate horizontal parallax with easing
        const easedScroll = easing(scrollY / windowHeight) * windowHeight;
        newTransform.x = easedScroll * speed + offset;
      }

      setTransform(newTransform);
    };

    // Throttled scroll handler for performance
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
  }, [speed, direction, offset, disabled, easing]);

  // Handle resize events
  useEffect(() => {
    const handleResize = () => {
      if (!disabled) {
        window.dispatchEvent(new Event('scroll'));
      }
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [disabled]);

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
      'data-parallax-direction': direction,
      'data-parallax-active': isActive
    };
  };

  return {
    ref: elementRef,
    transform,
    isActive,
    style: getTransformStyle(),
    dataAttributes: getDataAttributes()
  };
};

// Easing functions for smooth parallax effects
export const easings = {
  linear: (t: number) => t,
  easeIn: (t: number) => t * t,
  easeOut: (t: number) => t * (2 - t),
  easeInOut: (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  easeOutCubic: (t: number) => (--t) * t * t + 1,
  easeInCubic: (t: number) => t * t * t,
  easeInOutCubic: (t: number) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
};

export default useParallax;