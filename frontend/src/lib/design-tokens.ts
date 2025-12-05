/**
 * TrueTrace Design System - Design Tokens
 * AI Misinformation Intelligence Platform
 * 
 * Brand Identity: Futuristic, trustworthy, cyber-intelligence, premium
 * Style: Dark-Neon Intelligence UI
 * Core aesthetics: Glass layers, neon accents, clean geometry, smooth depth
 */

export const designTokens = {
  // ===========================
  // BACKGROUND COLORS
  // ===========================
  background: {
    main: '#0B0F17',
    surface: '#0F141E',
    glass: 'rgba(255, 255, 255, 0.04)',
    hover: 'rgba(255, 255, 255, 0.06)',
    elevated: 'rgba(255, 255, 255, 0.02)',
  },

  // ===========================
  // PRIMARY COLORS
  // ===========================
  primary: {
    100: '#2DD4BF', // Teal
    200: '#22D3EE', // Cyan
    300: '#0EA5E9', // Sky
    400: '#3B82F6', // Blue
    glow: 'rgba(59, 130, 246, 0.35)',
  },

  // ===========================
  // SECONDARY COLORS
  // ===========================
  secondary: {
    100: '#6366F1', // Indigo
    200: '#A855F7', // Purple
  },

  // ===========================
  // SEMANTIC COLORS
  // ===========================
  semantic: {
    success: '#22C55E',
    info: '#0EA5E9',
    warning: '#F59E0B',
    danger: '#EF4444',
    critical: '#DC2626',
  },

  // ===========================
  // TEXT COLORS
  // ===========================
  text: {
    primary: '#F1F5F9',
    secondary: '#A5B4C7',
    muted: '#64748B',
    inverse: '#0B0F17',
  },

  // ===========================
  // BORDER & DIVIDER COLORS
  // ===========================
  border: {
    soft: 'rgba(255, 255, 255, 0.08)',
    medium: 'rgba(255, 255, 255, 0.12)',
    strong: 'rgba(255, 255, 255, 0.16)',
  },

  // ===========================
  // GRADIENT SYSTEM
  // ===========================
  gradients: {
    primary: 'linear-gradient(90deg, #3B82F6, #06B6D4, #2DD4BF)',
    hero: 'linear-gradient(120deg, #3B82F6 0%, #22D3EE 40%, #A855F7 100%)',
    subtle: 'linear-gradient(90deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02))',
    accent: 'linear-gradient(135deg, #6366F1, #A855F7)',
    card: 'linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01))',
    glass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))',
  },

  // ===========================
  // GLOW & SHADOW EFFECTS
  // ===========================
  glow: {
    primary: '0 0 24px rgba(59, 130, 246, 0.45)',
    cyan: '0 0 20px rgba(34, 211, 238, 0.5)',
    purple: '0 0 20px rgba(168, 85, 247, 0.4)',
    success: '0 0 16px rgba(34, 197, 94, 0.4)',
    danger: '0 0 16px rgba(239, 68, 68, 0.4)',
  },

  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.3)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -4px rgba(0, 0, 0, 0.4)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.6), 0 8px 10px -6px rgba(0, 0, 0, 0.5)',
    glass: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
  },

  // ===========================
  // TYPOGRAPHY TOKENS
  // ===========================
  typography: {
    fonts: {
      main: 'Inter, system-ui, -apple-system, sans-serif',
      mono: 'JetBrains Mono, Consolas, Monaco, monospace',
    },
    
    sizes: {
      h1: '3.5rem',      // 56px
      h2: '2.5rem',      // 40px
      h3: '1.875rem',    // 30px
      h4: '1.5rem',      // 24px
      h5: '1.25rem',     // 20px
      h6: '1.125rem',    // 18px
      'body-lg': '1.125rem',  // 18px
      'body-md': '1rem',      // 16px
      'body-sm': '0.875rem',  // 14px
      caption: '0.75rem',     // 12px
      tiny: '0.625rem',       // 10px
    },

    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },

    lineHeights: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
      loose: 2,
    },

    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
    },
  },

  // ===========================
  // SPACING SCALE
  // ===========================
  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '0.75rem',   // 12px
    lg: '1.25rem',   // 20px
    xl: '2rem',      // 32px
    '2xl': '3rem',   // 48px
    '3xl': '4rem',   // 64px
    '4xl': '5rem',   // 80px
    '5xl': '6rem',   // 96px
  },

  // ===========================
  // BORDER RADIUS
  // ===========================
  radius: {
    none: '0',
    sm: '0.375rem',   // 6px
    md: '0.75rem',    // 12px
    lg: '1rem',       // 16px
    xl: '1.375rem',   // 22px
    '2xl': '1.5rem',  // 24px
    full: '9999px',
  },

  // ===========================
  // Z-INDEX SCALE
  // ===========================
  zIndex: {
    base: 0,
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
    notification: 1080,
  },

  // ===========================
  // ANIMATION TOKENS
  // ===========================
  animation: {
    duration: {
      fast: '150ms',
      normal: '250ms',
      slow: '350ms',
      slower: '500ms',
    },
    easing: {
      default: 'cubic-bezier(0.4, 0, 0.2, 1)',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },

  // ===========================
  // BREAKPOINTS
  // ===========================
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
} as const;

// Type exports for TypeScript
export type DesignTokens = typeof designTokens;
export type BackgroundColor = keyof typeof designTokens.background;
export type PrimaryColor = keyof typeof designTokens.primary;
export type SemanticColor = keyof typeof designTokens.semantic;
export type TextColor = keyof typeof designTokens.text;
export type Gradient = keyof typeof designTokens.gradients;
export type Spacing = keyof typeof designTokens.spacing;
export type Radius = keyof typeof designTokens.radius;
