import { useEffect } from 'react';
import Lenis from 'lenis';

let lenisInstance: Lenis | null = null;

export function useLenis() {
  useEffect(() => {
    // Initialize Lenis only once
    if (!lenisInstance) {
      lenisInstance = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      });
    }

    function raf(time: number) {
      lenisInstance?.lenis?.raf(time);
      requestAnimationFrame(raf);
    }

    const animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return lenisInstance?.lenis;
}

export function scrollToSection(elementId: string) {
  const element = document.getElementById(elementId);
  if (element && lenisInstance?.lenis) {
    lenisInstance.lenis.scrollTo(element, {
      duration: 1.2,
    });
  }
}
