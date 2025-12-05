/**
 * TrueTrace Design System - Component Tokens
 * Reusable component patterns, variants, and theme configuration
 */

import { designTokens } from './design-tokens';

export const componentTokens = {
  // ===========================
  // BUTTON VARIANTS
  // ===========================
  button: {
    filled: {
      base: {
        background: designTokens.gradients.primary,
        color: designTokens.text.primary,
        border: 'none',
        fontWeight: designTokens.typography.weights.semibold,
        padding: '0.625rem 1.5rem',
        borderRadius: designTokens.radius.md,
        transition: `all ${designTokens.animation.duration.normal}`,
      },
      hover: {
        boxShadow: designTokens.glow.primary,
        transform: 'translateY(-1px)',
      },
      active: {
        transform: 'translateY(0)',
        boxShadow: designTokens.glow.primary,
      },
      disabled: {
        opacity: 0.5,
        cursor: 'not-allowed',
      },
    },
    outline: {
      base: {
        background: 'transparent',
        color: designTokens.text.primary,
        border: `1px solid ${designTokens.border.soft}`,
        fontWeight: designTokens.typography.weights.medium,
        padding: '0.625rem 1.5rem',
        borderRadius: designTokens.radius.md,
        transition: `all ${designTokens.animation.duration.normal}`,
      },
      hover: {
        background: designTokens.gradients.subtle,
        borderColor: designTokens.border.medium,
      },
    },
    ghost: {
      base: {
        background: 'transparent',
        color: designTokens.text.primary,
        border: 'none',
        fontWeight: designTokens.typography.weights.medium,
        padding: '0.625rem 1.5rem',
        borderRadius: designTokens.radius.md,
        transition: `all ${designTokens.animation.duration.normal}`,
      },
      hover: {
        background: designTokens.background.hover,
      },
    },
    sizes: {
      sm: {
        padding: '0.5rem 1rem',
        fontSize: designTokens.typography.sizes['body-sm'],
      },
      md: {
        padding: '0.625rem 1.5rem',
        fontSize: designTokens.typography.sizes['body-md'],
      },
      lg: {
        padding: '0.75rem 2rem',
        fontSize: designTokens.typography.sizes['body-lg'],
      },
    },
  },

  // ===========================
  // CARD VARIANTS
  // ===========================
  card: {
    glass: {
      base: {
        background: designTokens.gradients.glass,
        backdropFilter: 'blur(16px)',
        border: `1px solid ${designTokens.border.soft}`,
        borderRadius: designTokens.radius.lg,
        padding: designTokens.spacing.lg,
        boxShadow: designTokens.shadows.glass,
      },
      hover: {
        transform: 'translateY(-2px)',
        boxShadow: `${designTokens.glow.primary}, ${designTokens.shadows.xl}`,
        borderColor: designTokens.border.strong,
      },
    },
    elevated: {
      base: {
        background: designTokens.gradients.card,
        backdropFilter: 'blur(20px)',
        border: `1px solid ${designTokens.border.medium}`,
        borderRadius: designTokens.radius.lg,
        padding: designTokens.spacing.lg,
        boxShadow: designTokens.shadows.lg,
      },
    },
    flat: {
      base: {
        background: designTokens.background.surface,
        border: `1px solid ${designTokens.border.soft}`,
        borderRadius: designTokens.radius.lg,
        padding: designTokens.spacing.lg,
      },
    },
  },

  // ===========================
  // NAVIGATION ITEMS
  // ===========================
  navigation: {
    item: {
      base: {
        padding: '0.75rem 1rem',
        borderRadius: designTokens.radius.md,
        color: designTokens.text.secondary,
        fontWeight: designTokens.typography.weights.medium,
        transition: `all ${designTokens.animation.duration.fast}`,
        position: 'relative',
      },
      hover: {
        background: designTokens.background.hover,
        color: designTokens.text.primary,
      },
      active: {
        background: designTokens.background.hover,
        color: designTokens.text.primary,
        borderLeft: `3px solid ${designTokens.primary[400]}`,
        paddingLeft: 'calc(1rem - 3px)',
        '&::before': {
          content: '""',
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '3px',
          background: designTokens.gradients.primary,
          borderRadius: '0 999px 999px 0',
          boxShadow: designTokens.glow.cyan,
        },
      },
    },
  },

  // ===========================
  // PANEL CONTAINERS
  // ===========================
  panel: {
    default: {
      base: {
        background: designTokens.background.surface,
        borderRadius: designTokens.radius.lg,
        padding: designTokens.spacing.lg,
        border: `1px solid ${designTokens.border.soft}`,
      },
    },
    glass: {
      base: {
        background: designTokens.gradients.glass,
        backdropFilter: 'blur(16px)',
        borderRadius: designTokens.radius.lg,
        padding: designTokens.spacing.lg,
        border: `1px solid ${designTokens.border.soft}`,
      },
    },
  },

  // ===========================
  // KPI / STAT CARDS
  // ===========================
  kpi: {
    card: {
      base: {
        background: designTokens.gradients.card,
        backdropFilter: 'blur(16px)',
        border: `1px solid ${designTokens.border.soft}`,
        borderRadius: designTokens.radius.lg,
        padding: designTokens.spacing.lg,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: designTokens.gradients.primary,
        },
      },
    },
    value: {
      base: {
        fontFamily: designTokens.typography.fonts.mono,
        fontSize: '2rem',
        fontWeight: designTokens.typography.weights.bold,
        background: designTokens.gradients.primary,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
    },
    label: {
      base: {
        fontSize: designTokens.typography.sizes['body-sm'],
        color: designTokens.text.secondary,
        fontWeight: designTokens.typography.weights.medium,
        textTransform: 'uppercase',
        letterSpacing: designTokens.typography.letterSpacing.wide,
      },
    },
  },

  // ===========================
  // BADGE VARIANTS
  // ===========================
  badge: {
    primary: {
      base: {
        background: designTokens.primary.glow,
        color: designTokens.primary[200],
        fontSize: designTokens.typography.sizes.caption,
        fontWeight: designTokens.typography.weights.semibold,
        padding: '0.25rem 0.75rem',
        borderRadius: designTokens.radius.sm,
        border: `1px solid ${designTokens.primary[300]}`,
      },
    },
    success: {
      base: {
        background: 'rgba(34, 197, 94, 0.15)',
        color: designTokens.semantic.success,
        fontSize: designTokens.typography.sizes.caption,
        fontWeight: designTokens.typography.weights.semibold,
        padding: '0.25rem 0.75rem',
        borderRadius: designTokens.radius.sm,
        border: `1px solid ${designTokens.semantic.success}`,
      },
    },
    warning: {
      base: {
        background: 'rgba(245, 158, 11, 0.15)',
        color: designTokens.semantic.warning,
        fontSize: designTokens.typography.sizes.caption,
        fontWeight: designTokens.typography.weights.semibold,
        padding: '0.25rem 0.75rem',
        borderRadius: designTokens.radius.sm,
        border: `1px solid ${designTokens.semantic.warning}`,
      },
    },
    danger: {
      base: {
        background: 'rgba(239, 68, 68, 0.15)',
        color: designTokens.semantic.danger,
        fontSize: designTokens.typography.sizes.caption,
        fontWeight: designTokens.typography.weights.semibold,
        padding: '0.25rem 0.75rem',
        borderRadius: designTokens.radius.sm,
        border: `1px solid ${designTokens.semantic.danger}`,
      },
    },
    info: {
      base: {
        background: 'rgba(14, 165, 233, 0.15)',
        color: designTokens.semantic.info,
        fontSize: designTokens.typography.sizes.caption,
        fontWeight: designTokens.typography.weights.semibold,
        padding: '0.25rem 0.75rem',
        borderRadius: designTokens.radius.sm,
        border: `1px solid ${designTokens.semantic.info}`,
      },
    },
  },

  // ===========================
  // INPUT FIELDS
  // ===========================
  input: {
    base: {
      base: {
        background: designTokens.background.glass,
        border: `1px solid ${designTokens.border.soft}`,
        borderRadius: designTokens.radius.md,
        padding: '0.625rem 1rem',
        color: designTokens.text.primary,
        fontSize: designTokens.typography.sizes['body-md'],
        transition: `all ${designTokens.animation.duration.normal}`,
      },
      focus: {
        outline: 'none',
        borderColor: designTokens.primary[400],
        boxShadow: `0 0 0 3px ${designTokens.primary.glow}`,
      },
      error: {
        borderColor: designTokens.semantic.danger,
        boxShadow: `0 0 0 3px rgba(239, 68, 68, 0.15)`,
      },
    },
  },

  // ===========================
  // TABLE COMPONENTS
  // ===========================
  table: {
    container: {
      base: {
        background: designTokens.background.surface,
        border: `1px solid ${designTokens.border.soft}`,
        borderRadius: designTokens.radius.lg,
        overflow: 'hidden',
      },
    },
    header: {
      base: {
        background: designTokens.background.glass,
        borderBottom: `1px solid ${designTokens.border.soft}`,
        padding: '1rem',
        fontWeight: designTokens.typography.weights.semibold,
        fontSize: designTokens.typography.sizes['body-sm'],
        color: designTokens.text.secondary,
        textTransform: 'uppercase',
        letterSpacing: designTokens.typography.letterSpacing.wide,
      },
    },
    row: {
      base: {
        borderBottom: `1px solid ${designTokens.border.soft}`,
        transition: `all ${designTokens.animation.duration.fast}`,
      },
      hover: {
        background: designTokens.background.hover,
      },
    },
    cell: {
      base: {
        padding: '1rem',
        color: designTokens.text.primary,
      },
    },
  },

  // ===========================
  // CHART COMPONENTS
  // ===========================
  chart: {
    container: {
      base: {
        background: designTokens.gradients.glass,
        backdropFilter: 'blur(16px)',
        border: `1px solid ${designTokens.border.soft}`,
        borderRadius: designTokens.radius.lg,
        padding: designTokens.spacing.lg,
      },
    },
    colors: {
      primary: [
        designTokens.primary[400],
        designTokens.primary[300],
        designTokens.primary[200],
        designTokens.primary[100],
      ],
      semantic: [
        designTokens.semantic.success,
        designTokens.semantic.info,
        designTokens.semantic.warning,
        designTokens.semantic.danger,
      ],
      gradient: [
        designTokens.secondary[100],
        designTokens.secondary[200],
        designTokens.primary[400],
        designTokens.primary[200],
      ],
    },
  },

  // ===========================
  // MODAL / DIALOG
  // ===========================
  modal: {
    backdrop: {
      base: {
        background: 'rgba(11, 15, 23, 0.8)',
        backdropFilter: 'blur(8px)',
      },
    },
    container: {
      base: {
        background: designTokens.background.surface,
        border: `1px solid ${designTokens.border.medium}`,
        borderRadius: designTokens.radius.xl,
        boxShadow: designTokens.shadows.xl,
        maxWidth: '600px',
        padding: designTokens.spacing.xl,
      },
    },
  },

  // ===========================
  // TOAST / NOTIFICATION
  // ===========================
  toast: {
    success: {
      base: {
        background: designTokens.gradients.glass,
        border: `1px solid ${designTokens.semantic.success}`,
        borderRadius: designTokens.radius.md,
        padding: '1rem',
        boxShadow: designTokens.glow.success,
      },
    },
    error: {
      base: {
        background: designTokens.gradients.glass,
        border: `1px solid ${designTokens.semantic.danger}`,
        borderRadius: designTokens.radius.md,
        padding: '1rem',
        boxShadow: designTokens.glow.danger,
      },
    },
    info: {
      base: {
        background: designTokens.gradients.glass,
        border: `1px solid ${designTokens.primary[300]}`,
        borderRadius: designTokens.radius.md,
        padding: '1rem',
        boxShadow: designTokens.glow.primary,
      },
    },
  },

  // ===========================
  // LOADING / SKELETON
  // ===========================
  skeleton: {
    base: {
      base: {
        background: designTokens.background.glass,
        borderRadius: designTokens.radius.md,
        animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },

  // ===========================
  // DROPDOWN / SELECT
  // ===========================
  dropdown: {
    trigger: {
      base: {
        background: designTokens.background.glass,
        border: `1px solid ${designTokens.border.soft}`,
        borderRadius: designTokens.radius.md,
        padding: '0.625rem 1rem',
        color: designTokens.text.primary,
        transition: `all ${designTokens.animation.duration.normal}`,
      },
      hover: {
        background: designTokens.background.hover,
        borderColor: designTokens.border.medium,
      },
    },
    menu: {
      base: {
        background: designTokens.background.surface,
        border: `1px solid ${designTokens.border.medium}`,
        borderRadius: designTokens.radius.md,
        boxShadow: designTokens.shadows.xl,
        padding: '0.5rem',
        marginTop: '0.5rem',
      },
    },
    item: {
      base: {
        padding: '0.625rem 1rem',
        borderRadius: designTokens.radius.sm,
        color: designTokens.text.primary,
        transition: `all ${designTokens.animation.duration.fast}`,
      },
      hover: {
        background: designTokens.background.hover,
      },
    },
  },
} as const;

// Type exports
export type ButtonVariant = keyof typeof componentTokens.button;
export type CardVariant = keyof typeof componentTokens.card;
export type BadgeVariant = keyof typeof componentTokens.badge;

// Helper function to apply component styles
export const getComponentStyles = (
  component: keyof typeof componentTokens,
  variant?: string,
  state: 'base' | 'hover' | 'active' | 'focus' | 'disabled' = 'base'
): Record<string, any> => {
  const componentConfig = componentTokens[component];
  if (!componentConfig) return {};

  if (variant && typeof componentConfig === 'object' && variant in componentConfig) {
    const variantConfig = (componentConfig as any)[variant];
    if (typeof variantConfig === 'object' && state in variantConfig) {
      return variantConfig[state];
    }
    if (typeof variantConfig === 'object' && 'base' in variantConfig) {
      return variantConfig.base;
    }
    return {};
  }

  if (typeof componentConfig === 'object' && 'base' in componentConfig) {
    const baseConfig = (componentConfig as any).base;
    if (typeof baseConfig === 'object' && state in baseConfig) {
      return baseConfig[state];
    }
    return baseConfig;
  }

  return {};
};
