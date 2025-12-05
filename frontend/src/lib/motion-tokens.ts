/**
 * TrueTrace Motion System - Motion Tokens
 * Timing, easing, and animation configurations for premium micro-interactions
 */

export const motionTokens = {
  // ===========================
  // TIMING SYSTEM
  // ===========================
  timing: {
    fast: 120,         // Quick feedback (hover, highlights)
    normal: 200,       // Standard interactions (clicks, toggles)
    smooth: 280,       // Smooth transitions (cards, modals)
    deliberate: 360,   // Intentional animations (page loads, reveals)
  },

  // Duration in ms format
  duration: {
    fast: '120ms',
    normal: '200ms',
    smooth: '280ms',
    deliberate: '360ms',
  },

  // ===========================
  // EASING FUNCTIONS
  // ===========================
  ease: {
    // Standard - balanced entrance and exit
    standard: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    
    // Accelerate - starts slow, ends fast
    accelerate: 'cubic-bezier(0.4, 0.0, 1, 1)',
    
    // Decelerate - starts fast, slows down
    decelerate: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
    
    // Spring-like bounce
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    
    // Sharp snap
    sharp: 'cubic-bezier(0.4, 0.0, 0.6, 1)',
    
    // Smooth glide
    glide: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },

  // ===========================
  // PAGE LOAD ANIMATIONS
  // ===========================
  pageLoad: {
    fadeUp: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.36, ease: [0.4, 0.0, 0.2, 1] },
    },
    fadeUpSmall: {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.28, ease: [0.4, 0.0, 0.2, 1] },
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.36, ease: [0.4, 0.0, 0.2, 1] },
    },
    stagger: {
      container: {
        animate: {
          transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
          },
        },
      },
      item: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
      },
    },
  },

  // ===========================
  // HOVER EFFECTS
  // ===========================
  hover: {
    button: {
      glow: {
        rest: { boxShadow: '0 0 0 rgba(59, 130, 246, 0)' },
        hover: { 
          boxShadow: '0 0 24px rgba(59, 130, 246, 0.45)',
          y: -1,
        },
        transition: { duration: 0.2 },
      },
      gradientShift: {
        rest: { backgroundPosition: '0% 50%' },
        hover: { backgroundPosition: '100% 50%' },
        transition: { duration: 0.28 },
      },
    },
    card: {
      elevate: {
        rest: { y: 0, boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)' },
        hover: { 
          y: -4,
          boxShadow: '0 0 24px rgba(59, 130, 246, 0.45), 0 12px 40px 0 rgba(0, 0, 0, 0.5)',
        },
        transition: { duration: 0.2, ease: [0.4, 0.0, 0.2, 1] },
      },
      glowRim: {
        rest: { 
          borderColor: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(12px)',
        },
        hover: { 
          borderColor: 'rgba(34, 211, 238, 0.4)',
          backdropFilter: 'blur(16px)',
        },
        transition: { duration: 0.2 },
      },
    },
    sidebar: {
      active: {
        rest: { x: 0 },
        hover: { x: 2 },
        transition: { duration: 0.12 },
      },
      neonBar: {
        rest: { scaleX: 1, opacity: 0.8 },
        hover: { scaleX: 1.5, opacity: 1 },
        transition: { duration: 0.2 },
      },
    },
  },

  // ===========================
  // INTERACTION FEEDBACK
  // ===========================
  interaction: {
    searchInput: {
      focus: {
        initial: { boxShadow: '0 0 0 rgba(59, 130, 246, 0)' },
        animate: { boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.35)' },
        transition: { duration: 0.2 },
      },
      placeholder: {
        initial: { opacity: 1 },
        animate: { opacity: 0.5 },
        transition: { duration: 0.12 },
      },
    },
    tabUnderline: {
      initial: { scaleX: 0, transformOrigin: 'left' },
      animate: { scaleX: 1 },
      transition: { duration: 0.28, ease: [0.4, 0.0, 0.2, 1] },
    },
    dropdown: {
      spring: {
        initial: { opacity: 0, scale: 0.96, y: -8 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.96, y: -8 },
        transition: { 
          duration: 0.2,
          ease: [0.0, 0.0, 0.2, 1],
        },
      },
      item: {
        rest: { backgroundColor: 'transparent', x: 0 },
        hover: { backgroundColor: 'rgba(255, 255, 255, 0.06)', x: 4 },
        transition: { duration: 0.12 },
      },
    },
    table: {
      rowHover: {
        rest: { backgroundColor: 'transparent' },
        hover: { backgroundColor: 'rgba(255, 255, 255, 0.06)' },
        transition: { duration: 0.12 },
      },
      sortIcon: {
        rest: { rotate: 0 },
        active: { rotate: 180 },
        transition: { duration: 0.28, ease: [0.4, 0.0, 0.2, 1] },
      },
    },
  },

  // ===========================
  // VERIFICATION TOOLS
  // ===========================
  verification: {
    textareaExpand: {
      rest: { scale: 1 },
      focus: { scale: 1.01 },
      transition: { duration: 0.2 },
    },
    resultPanel: {
      initial: { opacity: 0, y: -20, scale: 0.98 },
      animate: { opacity: 1, y: 0, scale: 1 },
      transition: { 
        duration: 0.36,
        ease: [0.68, -0.55, 0.265, 1.2], // Soft bounce
      },
    },
    confidenceBar: {
      initial: { scaleX: 0, transformOrigin: 'left' },
      animate: { scaleX: 1 },
      transition: { duration: 0.6, ease: [0.4, 0.0, 0.2, 1] },
    },
    fileUpload: {
      dragOver: {
        rest: { 
          borderColor: 'rgba(255, 255, 255, 0.08)',
          boxShadow: '0 0 0 rgba(59, 130, 246, 0)',
        },
        active: { 
          borderColor: 'rgba(59, 130, 246, 0.6)',
          boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
        },
        transition: { duration: 0.2 },
      },
      thumbnail: {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.28, ease: [0.4, 0.0, 0.2, 1] },
      },
    },
    riskPulse: {
      animate: {
        boxShadow: [
          '0 0 12px rgba(239, 68, 68, 0.4)',
          '0 0 24px rgba(239, 68, 68, 0.6)',
          '0 0 12px rgba(239, 68, 68, 0.4)',
        ],
      },
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  },

  // ===========================
  // MAP INTERACTIONS
  // ===========================
  map: {
    regionHover: {
      rest: { opacity: 0 },
      hover: { opacity: 1 },
      transition: { duration: 0.2 },
    },
    markerBounce: {
      initial: { y: -10, opacity: 0 },
      animate: { 
        y: [0, -8, 0],
        opacity: 1,
      },
      transition: {
        y: { duration: 0.6, ease: [0.68, -0.55, 0.265, 1.2] },
        opacity: { duration: 0.28 },
      },
    },
    zoomSmooth: {
      transition: { duration: 0.36, ease: [0.4, 0.0, 0.2, 1] },
    },
  },

  // ===========================
  // MODALS & DRAWERS
  // ===========================
  modal: {
    backdrop: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.2 },
    },
    container: {
      initial: { opacity: 0, scale: 0.96, y: 20 },
      animate: { opacity: 1, scale: 1, y: 0 },
      exit: { opacity: 0, scale: 0.96, y: 20 },
      transition: { duration: 0.28, ease: [0.4, 0.0, 0.2, 1] },
    },
    drawer: {
      initial: { x: '100%' },
      animate: { x: 0 },
      exit: { x: '100%' },
      transition: { duration: 0.36, ease: [0.0, 0.0, 0.2, 1] },
    },
  },

  // ===========================
  // NOTIFICATIONS
  // ===========================
  notification: {
    slideIn: {
      initial: { x: 400, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: 400, opacity: 0 },
      transition: { duration: 0.28, ease: [0.0, 0.0, 0.2, 1] },
    },
    fadeOut: {
      animate: { opacity: 0 },
      transition: { duration: 0.2, delay: 5 },
    },
  },

  // ===========================
  // CHART ANIMATIONS
  // ===========================
  chart: {
    lineGrow: {
      initial: { pathLength: 0, opacity: 0 },
      animate: { pathLength: 1, opacity: 1 },
      transition: { duration: 0.8, ease: [0.4, 0.0, 0.2, 1] },
    },
    barGrow: {
      initial: { scaleY: 0, transformOrigin: 'bottom' },
      animate: { scaleY: 1 },
      transition: { duration: 0.6, ease: [0.4, 0.0, 0.2, 1] },
    },
  },
} as const;

// ===========================
// HELPER FUNCTIONS
// ===========================

export const getTransition = (
  duration: keyof typeof motionTokens.timing = 'normal',
  easing: keyof typeof motionTokens.ease = 'standard'
) => {
  return {
    duration: motionTokens.timing[duration] / 1000,
    ease: motionTokens.ease[easing],
  };
};

export const getStaggerConfig = (
  staggerDelay: number = 0.08,
  delayChildren: number = 0.1
) => {
  return {
    staggerChildren: staggerDelay,
    delayChildren: delayChildren,
  };
};

// Type exports
export type MotionTokens = typeof motionTokens;
export type TimingKey = keyof typeof motionTokens.timing;
export type EasingKey = keyof typeof motionTokens.ease;
