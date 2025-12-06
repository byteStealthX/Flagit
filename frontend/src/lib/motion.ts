// Motion Animation Constants for FlagIt
// Reusable Framer Motion configurations for consistent animations

import { Transition, Variants } from 'framer-motion';

/**
 * Global interactive element animations
 */
export const interactiveElement = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.97 },
    transition: { duration: 0.18 } as Transition,
};

/**
 * Card animations - fade-slide pattern
 */
export const cardVariants: Variants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
};

export const cardTransition: Transition = {
    duration: 0.28,
    ease: 'easeOut',
};

/**
 * Modal/Dialog animations
 */
export const modalVariants: Variants = {
    initial: { opacity: 0, scale: 0.92 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.92 },
};

export const modalTransition: Transition = {
    duration: 0.25,
    ease: 'easeInOut',
};

/**
 * Toast notification animations
 */
export const toastVariants: Variants = {
    initial: { x: 60, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 60, opacity: 0 },
};

export const toastTransition: Transition = {
    duration: 0.25,
    ease: 'easeOut',
};

/**
 * Status badge color transition
 */
export const badgeTransition: Transition = {
    duration: 0.4,
    ease: 'easeInOut',
};

/**
 * Verified badge glow pulse
 */
export const verifiedGlowPulse = {
    animate: {
        boxShadow: [
            '0px 0px 0px rgba(34,197,94,0)',
            '0px 0px 18px rgba(34,197,94,0.35)',
            '0px 0px 0px rgba(34,197,94,0)',
        ],
    },
    transition: {
        repeat: Infinity,
        repeatType: 'mirror' as const,
        duration: 1.2,
    },
};

/**
 * Stagger children animation
 */
export const staggerContainer: Variants = {
    animate: {
        transition: {
            staggerChildren: 0.05,
        },
    },
};

/**
 * Stagger child item
 */
export const staggerItem: Variants = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
};

/**
 * Accordion expand/collapse
 */
export const accordionVariants: Variants = {
    collapsed: { opacity: 0, height: 0 },
    expanded: { opacity: 1, height: 'auto' },
};

export const accordionTransition: Transition = {
    duration: 0.3,
    ease: 'easeInOut',
};

/**
 * Button loading state
 */
export const buttonLoadingVariants: Variants = {
    idle: { opacity: 1 },
    loading: { opacity: 0.5 },
    disabled: { opacity: 0.5 },
};

/**
 * Realtime update flash
 */
export const updateFlashVariants = {
    flash: {
        backgroundColor: ['#fffbd1', '#ffffff'],
    },
};

export const updateFlashTransition: Transition = {
    duration: 0.8,
    ease: 'easeOut',
};

/**
 * Drop bounce animation
 */
export const dropBounce = {
    animate: { scale: [1, 1.04, 1] },
    transition: { duration: 0.35 } as Transition,
};

/**
 * Badge unlock celebration
 */
export const badgeUnlockVariants: Variants = {
    initial: { rotate: -15, opacity: 0, scale: 0.4 },
    animate: { rotate: 0, opacity: 1, scale: 1 },
};

export const badgeUnlockTransition: Transition = {
    type: 'spring',
    duration: 0.8,
    bounce: 0.4,
};

/**
 * Progress bar fill
 */
export const progressBarVariants: Variants = {
    initial: { width: 0 },
    animate: (percent: number) => ({ width: `${percent}%` }),
};

export const progressBarTransition: Transition = {
    duration: 1.1,
    ease: 'easeOut',
};

/**
 * Spinner rotation
 */
export const spinnerVariants = {
    animate: {
        rotate: 360,
    },
    transition: {
        duration: 1,
        repeat: Infinity,
        ease: 'linear',
    } as Transition,
};

/**
 * Row hover elevation
 */
export const rowHoverVariants = {
    whileHover: {
        backgroundColor: '#f9fafb',
        scale: 1.01,
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    },
    transition: { duration: 0.2 } as Transition,
};
