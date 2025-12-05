/**
 * TrueTrace Motion System - Framer Motion Presets
 * Reusable animation variants for React components with Framer Motion
 */

import { Variants, Transition } from 'framer-motion';
import { motionTokens } from './motion-tokens';

// ===========================
// PAGE TRANSITIONS
// ===========================

export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.36,
      ease: [0.4, 0.0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2,
      ease: [0.4, 0.0, 1, 1],
    },
  },
};

// ===========================
// STAGGER CONTAINERS
// ===========================

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.36,
      ease: [0.4, 0.0, 0.2, 1],
    },
  },
};

export const staggerItemFast: Variants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.28,
      ease: [0.4, 0.0, 0.2, 1],
    },
  },
};

// ===========================
// CARD ANIMATIONS
// ===========================

export const cardHover: Variants = {
  rest: {
    y: 0,
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
  },
  hover: {
    y: -4,
    boxShadow: '0 0 24px rgba(59, 130, 246, 0.45), 0 12px 40px 0 rgba(0, 0, 0, 0.5)',
    transition: {
      duration: 0.2,
      ease: [0.4, 0.0, 0.2, 1],
    },
  },
};

export const cardScale: Variants = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.36,
      ease: [0.4, 0.0, 0.2, 1],
    },
  },
};

// ===========================
// BUTTON ANIMATIONS
// ===========================

export const buttonGlow: Variants = {
  rest: {
    boxShadow: '0 0 0 rgba(59, 130, 246, 0)',
    y: 0,
  },
  hover: {
    boxShadow: '0 0 24px rgba(59, 130, 246, 0.45)',
    y: -1,
    transition: {
      duration: 0.2,
    },
  },
  tap: {
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
};

export const buttonScale: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.02 },
  tap: { scale: 0.98 },
};

// ===========================
// MODAL & DRAWER
// ===========================

export const modalBackdrop: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const modalContainer: Variants = {
  initial: {
    opacity: 0,
    scale: 0.96,
    y: 20,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.28,
      ease: [0.4, 0.0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: 20,
    transition: {
      duration: 0.2,
      ease: [0.4, 0.0, 1, 1],
    },
  },
};

export const drawerSlide: Variants = {
  initial: { x: '100%' },
  animate: {
    x: 0,
    transition: {
      duration: 0.36,
      ease: [0.0, 0.0, 0.2, 1],
    },
  },
  exit: {
    x: '100%',
    transition: {
      duration: 0.28,
      ease: [0.4, 0.0, 1, 1],
    },
  },
};

export const drawerSlideLeft: Variants = {
  initial: { x: '-100%' },
  animate: {
    x: 0,
    transition: {
      duration: 0.36,
      ease: [0.0, 0.0, 0.2, 1],
    },
  },
  exit: {
    x: '-100%',
    transition: {
      duration: 0.28,
      ease: [0.4, 0.0, 1, 1],
    },
  },
};

// ===========================
// DROPDOWN & MENU
// ===========================

export const dropdownSpring: Variants = {
  initial: {
    opacity: 0,
    scale: 0.96,
    y: -8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: [0.0, 0.0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: -8,
    transition: {
      duration: 0.15,
    },
  },
};

export const dropdownItem: Variants = {
  rest: {
    backgroundColor: 'transparent',
    x: 0,
  },
  hover: {
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    x: 4,
    transition: {
      duration: 0.12,
    },
  },
};

// ===========================
// NOTIFICATION & TOAST
// ===========================

export const notificationSlide: Variants = {
  initial: {
    x: 400,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.28,
      ease: [0.0, 0.0, 0.2, 1],
    },
  },
  exit: {
    x: 400,
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: [0.4, 0.0, 1, 1],
    },
  },
};

export const toastSlideDown: Variants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.28,
      ease: [0.0, 0.0, 0.2, 1],
    },
  },
  exit: {
    y: -100,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

// ===========================
// VERIFICATION TOOLS
// ===========================

export const textareaExpand: Variants = {
  rest: { scale: 1 },
  focus: {
    scale: 1.01,
    transition: { duration: 0.2 },
  },
};

export const resultPanel: Variants = {
  initial: {
    opacity: 0,
    y: -20,
    scale: 0.98,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.36,
      ease: [0.68, -0.55, 0.265, 1.2], // Soft bounce
    },
  },
};

export const confidenceBar: Variants = {
  initial: {
    scaleX: 0,
  },
  animate: {
    scaleX: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0.0, 0.2, 1],
    },
  },
};

export const fileUploadDrag: Variants = {
  rest: {
    borderColor: 'rgba(255, 255, 255, 0.08)',
    boxShadow: '0 0 0 rgba(59, 130, 246, 0)',
  },
  dragOver: {
    borderColor: 'rgba(59, 130, 246, 0.6)',
    boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
    transition: { duration: 0.2 },
  },
};

export const thumbnailFadeIn: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.28,
      ease: [0.4, 0.0, 0.2, 1],
    },
  },
};

// ===========================
// MAP ANIMATIONS
// ===========================

export const mapRegionHover: Variants = {
  rest: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
};

export const mapMarkerBounce: Variants = {
  initial: {
    y: -10,
    opacity: 0,
  },
  animate: {
    y: [0, -8, 0],
    opacity: 1,
    transition: {
      y: {
        duration: 0.6,
        ease: [0.68, -0.55, 0.265, 1.2],
      },
      opacity: {
        duration: 0.28,
      },
    },
  },
};

// ===========================
// TAB ANIMATIONS
// ===========================

export const tabUnderline: Variants = {
  initial: {
    scaleX: 0,
  },
  animate: {
    scaleX: 1,
    transition: {
      duration: 0.28,
      ease: [0.4, 0.0, 0.2, 1],
    },
  },
};

export const tabContent: Variants = {
  initial: {
    opacity: 0,
    x: -20,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.28,
      ease: [0.4, 0.0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    x: 20,
    transition: {
      duration: 0.2,
    },
  },
};

// ===========================
// CHART ANIMATIONS
// ===========================

export const chartLineGrow: Variants = {
  initial: {
    pathLength: 0,
    opacity: 0,
  },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.4, 0.0, 0.2, 1],
    },
  },
};

export const chartBarGrow: Variants = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0.0, 0.2, 1],
    },
  },
};

// ===========================
// LIST ANIMATIONS
// ===========================

export const listContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const listItem: Variants = {
  initial: {
    opacity: 0,
    x: -20,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.28,
      ease: [0.4, 0.0, 0.2, 1],
    },
  },
};

export const listItemHover: Variants = {
  rest: {
    backgroundColor: 'transparent',
  },
  hover: {
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    transition: { duration: 0.12 },
  },
};

// ===========================
// LOADING STATES
// ===========================

export const skeletonPulse: Variants = {
  animate: {
    opacity: [1, 0.4, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const spinnerRotate: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

export const dotBounce: Variants = {
  animate: {
    scale: [0, 1, 0],
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 1.4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// ===========================
// SPECIAL EFFECTS
// ===========================

export const glowPulse: Variants = {
  animate: {
    boxShadow: [
      '0 0 12px rgba(59, 130, 246, 0.35)',
      '0 0 24px rgba(59, 130, 246, 0.45)',
      '0 0 12px rgba(59, 130, 246, 0.35)',
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const riskPulseCritical: Variants = {
  animate: {
    boxShadow: [
      '0 0 12px rgba(239, 68, 68, 0.4)',
      '0 0 24px rgba(239, 68, 68, 0.6)',
      '0 0 12px rgba(239, 68, 68, 0.4)',
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const shimmer: Variants = {
  animate: {
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

// ===========================
// SPRING TRANSITIONS
// ===========================

export const springTransition: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
};

export const softSpring: Transition = {
  type: 'spring',
  stiffness: 100,
  damping: 20,
};

export const bouncySpring: Transition = {
  type: 'spring',
  stiffness: 400,
  damping: 25,
};

// ===========================
// UTILITY FUNCTIONS
// ===========================

export const createStaggerContainer = (
  staggerDelay: number = 0.08,
  delayChildren: number = 0.1
): Variants => ({
  animate: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: delayChildren,
    },
  },
});

export const createFadeInUp = (
  distance: number = 20,
  duration: number = 0.36
): Variants => ({
  initial: {
    opacity: 0,
    y: distance,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      ease: [0.4, 0.0, 0.2, 1],
    },
  },
});

export const createSlideIn = (
  direction: 'left' | 'right' | 'up' | 'down' = 'right',
  distance: number = 100
): Variants => {
  const axis = direction === 'left' || direction === 'right' ? 'x' : 'y';
  const value = direction === 'left' || direction === 'up' ? -distance : distance;

  return {
    initial: {
      opacity: 0,
      [axis]: value,
    },
    animate: {
      opacity: 1,
      [axis]: 0,
      transition: {
        duration: 0.36,
        ease: [0.0, 0.0, 0.2, 1],
      },
    },
    exit: {
      opacity: 0,
      [axis]: value,
      transition: {
        duration: 0.2,
      },
    },
  };
};
