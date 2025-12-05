import { useEffect, useRef, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholderSrc?: string;
  width?: number;
  height?: number;
  onLoad?: () => void;
}

export function LazyImage({
  src,
  alt,
  className = '',
  placeholderSrc,
  width,
  height,
  onLoad,
}: LazyImageProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && imgRef.current) {
          const img = new Image();
          img.onload = () => {
            if (imgRef.current) {
              imgRef.current.src = src;
              imgRef.current.classList.add('loaded');
              onLoad?.();
            }
          };
          img.src = src;
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '50px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [src, onLoad]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {placeholderSrc && (
        <img
          src={placeholderSrc}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover blur-md"
          width={width}
          height={height}
        />
      )}
      <img
        ref={imgRef}
        src={placeholderSrc || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3C/svg%3E'}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          placeholderSrc ? 'opacity-0' : ''
        }`}
        width={width}
        height={height}
      />
    </div>
  );
}

interface LazyComponentProps {
  children: ReactNode;
  fallback?: ReactNode;
  threshold?: number;
}

export function LazyComponent({
  children,
  fallback,
  threshold = 0.1,
}: LazyComponentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={ref}>
      {isVisible ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.div>
      ) : (
        fallback
      )}
    </div>
  );
}

// Add React import
import React from 'react';

export default { LazyImage, LazyComponent };
