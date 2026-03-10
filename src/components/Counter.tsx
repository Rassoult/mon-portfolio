import { useEffect, useState, useRef } from "react";

interface CounterProps {
  end: number;
  duration?: number;
  delay?: number;
  className?: string;
}

const Counter = ({ end, duration = 2000, delay = 0, className = "" }: CounterProps): JSX.Element => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Observer pour détecter quand le compteur est visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || end <= 0) {
      setCount(0);
      return;
    }

    // Délai avant de démarrer l'animation
    let timer: ReturnType<typeof setInterval> | null = null;
    const startTimeout = setTimeout(() => {
      let start = 0;
      const increment = end / (duration / 16); // 60 FPS approximativement
      
      timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          if (timer) clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16); // ~60 FPS
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      if (timer) clearInterval(timer);
    };
  }, [isVisible, end, duration, delay]);

  return <span ref={counterRef} className={className}>{count}</span>;
};

export default Counter;