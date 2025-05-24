import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function GlowCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Trail effect positions
  const trailCount = 3;
  const trailPositions = Array.from({ length: trailCount }, () => ({
    x: useMotionValue(-100),
    y: useMotionValue(-100),
    xSpring: useSpring(useMotionValue(-100), springConfig),
    ySpring: useSpring(useMotionValue(-100), springConfig),
    delay: 0.05
  }));

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      // Update trail positions with staggered delay
      trailPositions.forEach((trail, index) => {
        setTimeout(() => {
          trail.x.set(e.clientX);
          trail.y.set(e.clientY);
        }, index * 50);
      });
    };

    const handleHoverStart = (e) => {
      setIsHovering(true);
      const target = e.target.closest('a, button, [data-cursor-hover]');
      setIsInteractive(!!target);
    };

    const handleHoverEnd = () => {
      setIsHovering(false);
      setIsInteractive(false);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    const hoverables = document.querySelectorAll('a, button, [data-cursor-hover]');
    hoverables.forEach(el => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      
      hoverables.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isHovering ? (isInteractive ? 1.8 : 1.5) : 1,
          backgroundColor: isInteractive 
            ? "rgba(255, 255, 255, 1)"
            : "rgba(255, 255, 255, 0.9)",
          opacity: isClicking ? 0.7 : 1
        }}
        transition={{
          scale: { type: "spring", stiffness: 500, damping: 15 },
          backgroundColor: { duration: 0.15 },
          opacity: { duration: 0.1 }
        }}
      />
      
      {/* Trailing dots */}
      {trailPositions.map((trail, index) => (
        <motion.div
          key={index}
          className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
          style={{
            x: trail.xSpring,
            y: trail.ySpring,
          }}
          animate={{
            scale: 1 - (index * 0.2),
            backgroundColor: isInteractive 
              ? `rgba(255, 255, 255, ${0.6 - (index * 0.15)})`
              : `rgba(255, 255, 255, ${0.5 - (index * 0.1)})`,
            opacity: isClicking ? 0.4 : 0.8 - (index * 0.2)
          }}
          transition={{
            scale: { type: "spring", stiffness: 500, damping: 15 },
            backgroundColor: { duration: 0.15 },
            opacity: { duration: 0.1 }
          }}
        />
      ))}
      
      {/* Outer glow */}
      <motion.div
        className="fixed top-0 left-0 w-24 h-24 rounded-full pointer-events-none z-[9997] -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isHovering ? (isInteractive ? 1.5 : 1.2) : 0.8,
          opacity: isHovering ? (isInteractive ? 0.4 : 0.3) : 0.2,
          background: "radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)"
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          duration: 0.3
        }}
      />
    </>
  );
}