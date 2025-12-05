/**
 * TrueTrace Design System - Main Export
 * Centralized export for all design system tokens and utilities
 */

import { designTokens } from './design-tokens';
import { motionTokens } from './motion-tokens';

export { designTokens } from './design-tokens';
export type {
  DesignTokens,
  BackgroundColor,
  PrimaryColor,
  SemanticColor,
  TextColor,
  Gradient,
  Spacing,
  Radius,
} from './design-tokens';

export { componentTokens, getComponentStyles } from './component-tokens';
export type {
  ButtonVariant,
  CardVariant,
  BadgeVariant,
} from './component-tokens';

export { motionTokens } from './motion-tokens';
export type {
  MotionTokens,
} from './motion-tokens';

export { pageVariants } from './motion-presets';

/**
 * Quick access helpers
 */
export const colors = {
  bg: designTokens.background,
  primary: designTokens.primary,
  secondary: designTokens.secondary,
  semantic: designTokens.semantic,
  text: designTokens.text,
  border: designTokens.border,
};

export const gradients = designTokens.gradients;
export const shadows = designTokens.shadows;
export const glows = designTokens.glow;
export const spacing = designTokens.spacing;
export const radius = designTokens.radius;
export const typography = designTokens.typography;
export const animation = designTokens.animation;

/**
 * Motion system quick access
 */
export const motion = {
  duration: motionTokens.duration,
  easing: motionTokens.easing,
  spring: motionTokens.spring,
  transitions: motionTokens.componentTransitions,
};

/**
 * Common component style presets
 */
export const presets = {
  glassCard: {
    className: 'glass-card rounded-lg p-lg',
  },
  primaryButton: {
    className: 'btn-primary',
  },
  outlineButton: {
    className: 'btn-outline',
  },
  ghostButton: {
    className: 'btn-ghost',
  },
  kpiCard: {
    className: 'kpi-card',
  },
  panel: {
    className: 'panel-glass',
  },
  navItemActive: {
    className: 'nav-item-active',
  },
};
