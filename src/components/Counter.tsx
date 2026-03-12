import React, { useState, useEffect, useRef } from 'react';
import { useInView, animate } from 'motion/react';

interface CounterProps {
  value: string;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });
  
  const numericValue = parseInt(value.replace(/\D/g, '')) || 0;
  const suffix = value.replace(/\d/g, '');

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, numericValue, {
        duration: duration,
        ease: "easeOut",
        onUpdate: (v) => setCount(Math.floor(v)),
      });
      return () => controls.stop();
    }
  }, [isInView, numericValue, duration]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
};

export default Counter;
