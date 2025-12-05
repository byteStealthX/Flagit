import { useEffect, useRef, ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

// Scroll-triggered animation wrapper
interface ScrollAnimProps {
  children: ReactNode;
  variant?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scale';
  delay?: number;
  duration?: number;
}

export function ScrollAnimWrapper({
  children,
  variant = 'fadeInUp',
  delay = 0,
  duration = 0.5,
}: ScrollAnimProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const variants = {
    fadeInUp: {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 },
    },
    fadeInLeft: {
      hidden: { opacity: 0, x: -40 },
      visible: { opacity: 1, x: 0 },
    },
    fadeInRight: {
      hidden: { opacity: 0, x: 40 },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants[variant]}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}

// Parallax effect wrapper
interface ParallaxProps {
  children: ReactNode;
  offset?: number;
}

export function Parallax({ children, offset = 50 }: ParallaxProps) {
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const element = ref.current as HTMLElement;
      const rect = element.getBoundingClientRect();
      const scrollY = window.scrollY;
      element.style.transform = `translateY(${scrollY * 0.5}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [offset]);

  return <div ref={ref}>{children}</div>;
}

// Stagger container for child animations
interface StaggerContainerProps {
  children: ReactNode;
  delay?: number;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  delay = 0,
  staggerDelay = 0.1,
}: StaggerContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// Premium gradient text
interface GradientTextProps {
  children: ReactNode;
  from?: string;
  to?: string;
  className?: string;
}

export function GradientText({
  children,
  from = '#3B82F6',
  to = '#06B6D4',
  className = '',
}: GradientTextProps) {
  return (
    <span
      className={`bg-gradient-to-r inline-block text-transparent bg-clip-text ${className}`}
      style={{
        backgroundImage: `linear-gradient(90deg, ${from}, ${to})`,
      }}
    >
      {children}
    </span>
  );
}

// Premium button loader
interface ButtonLoaderProps {
  isLoading: boolean;
  children: ReactNode;
}

export function ButtonLoader({ isLoading, children }: ButtonLoaderProps) {
  return (
    <>
      {isLoading ? (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="inline-block"
        >
          <div className="w-4 h-4 border-2 border-current border-r-transparent rounded-full" />
        </motion.div>
      ) : (
        children
      )}
    </>
  );
}

// Glassmorphism blur effect hook
export function useGlassEffect(intensity: 'light' | 'medium' | 'heavy' = 'medium') {
  const blurs = {
    light: 'backdrop-blur-sm',
    medium: 'backdrop-blur-md',
    heavy: 'backdrop-blur-xl',
  };

  return blurs[intensity];
}

// Smooth number counter animation
interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  format?: (value: number) => string;
}

export function Counter({
  from,
  to,
  duration = 2,
  format = (val) => Math.floor(val).toString(),
}: CounterProps) {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    let start = Date.now();
    const animate = () => {
      const progress = Math.min((Date.now() - start) / (duration * 1000), 1);
      const current = from + (to - from) * progress;
      node.textContent = format(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [from, to, duration, format]);

  return <span ref={nodeRef}>{from}</span>;
}

export default {
  ScrollAnimWrapper,
  Parallax,
  StaggerContainer,
  GradientText,
  ButtonLoader,
  useGlassEffect,
  Counter,
};
