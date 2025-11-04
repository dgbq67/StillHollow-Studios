import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const trailRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'text'>('default');
    const mousePosition = useRef({ x: 0, y: 0 });
    const trailPosition = useRef({ x: 0, y: 0 });

    useEffect(() => {
        // Don't show cursor on touch devices
        if ('ontouchstart' in window) {
            return;
        }

        const handleMouseMove = (e: MouseEvent) => {
            mousePosition.current = { x: e.clientX, y: e.clientY };

            if (cursorRef.current) {
                cursorRef.current.style.left = e.clientX + 'px';
                cursorRef.current.style.top = e.clientY + 'px';
            }

            setIsVisible(true);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        // Update trail position with delay
        const updateTrail = () => {
            const speed = 0.1;
            trailPosition.current.x += (mousePosition.current.x - trailPosition.current.x) * speed;
            trailPosition.current.y += (mousePosition.current.y - trailPosition.current.y) * speed;

            if (trailRef.current) {
                trailRef.current.style.left = trailPosition.current.x + 'px';
                trailRef.current.style.top = trailPosition.current.y + 'px';
            }

            requestAnimationFrame(updateTrail);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);

        // Start trail animation
        updateTrail();

        // Add hover listeners to interactive elements
        const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [data-cursor]');

        const handleElementMouseEnter = (e: Event) => {
            const target = e.target as HTMLElement;
            setIsHovering(true);

            // Determine cursor type based on element
            const cursorData = target.getAttribute('data-cursor');
            if (cursorData) {
                setCursorType(cursorData as 'pointer' | 'text');
            } else if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.role === 'button') {
                setCursorType('pointer');
            } else if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
                setCursorType('text');
            } else {
                setCursorType('default');
            }
        };

        const handleElementMouseLeave = () => {
            setIsHovering(false);
            setCursorType('default');
        };

        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleElementMouseEnter);
            el.addEventListener('mouseleave', handleElementMouseLeave);
        });

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);

            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleElementMouseEnter);
                el.removeEventListener('mouseleave', handleElementMouseLeave);
            });
        };
    }, []);

    if (!isVisible) return null;

    const getCursorClassName = () => {
        let className = 'cursor';
        if (isHovering) className += ' hover';
        if (isClicking) className += ' click';
        if (cursorType !== 'default') className += ` ${cursorType}`;
        return className;
    };

    return (
        <>
            <div
                ref={cursorRef}
                className={getCursorClassName()}
            />
            <div
                ref={trailRef}
                className="cursor-trail"
            />
        </>
    );
};

export default CustomCursor;