/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        colors: {
            // Backgrounds
            bg900: '#020617',
            bg800: '#071428',
            panel: 'rgba(255,255,255,0.03)',
            glassBorder: 'rgba(255,255,255,0.06)',

            // Text
            textPrimary: '#E6F0FB',
            textSecondary: '#B6C6D6',
            muted: '#8FA0B5',

            // Accents
            accentCyan: '#00D1C1',
            accentCyan400: '#00B8FF',
            accentBlue: '#4E82FF',

            // Status
            success: '#2DD4BF',
            warning: '#F59E0B',
            danger: '#FF5A66',

            // Utilities
            white: '#ffffff',
            black: '#000000',
            transparent: 'transparent',
            current: 'currentColor',
        },
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['Roboto Mono', 'Courier New', 'monospace'],
            },
            fontSize: {
                'h1': ['56px', { lineHeight: '1.15', fontWeight: '800' }],
                'h2': ['40px', { lineHeight: '1.15', fontWeight: '700' }],
                'h3': ['28px', { lineHeight: '1.15', fontWeight: '700' }],
                'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
                'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
                'small': ['14px', { lineHeight: '1.6', fontWeight: '400' }],
            },
            spacing: {
                '1': '0.25rem',
                '2': '0.5rem',
                '3': '0.75rem',
                '4': '1rem',
                '6': '1.5rem',
                '8': '2rem',
                '12': '3rem',
                '16': '4rem',
                '24': '6rem',
                '32': '8rem',
            },
            borderRadius: {
                'sm': '6px',
                'md': '12px',
                'lg': '24px',
                'xl': '20px',
                '2xl': '24px',
                '3xl': '32px',
                'pill': '9999px',
            },
            boxShadow: {
                'neon-lg': '0 10px 40px rgba(0,0,0,0.6), 0 0 40px rgba(0,210,193,0.12)',
                'glow-inner': 'inset 0 8px 30px rgba(0,0,0,0.6)',
                'button-hover': '0 8px 40px rgba(0,210,193,0.12)',
                'card': '0 10px 40px rgba(2,6,23,0.6), 0 0 24px rgba(0,210,193,0.18) inset',
                'glow': '0 0 24px rgba(0,210,193,0.18)',
            },
            backdropBlur: {
                'xs': '2px',
                'sm': '4px',
                'md': '8px',
                'lg': '12px',
                'xl': '16px',
                '2xl': '24px',
            },
            transitionTimingFunction: {
                'fast': 'cubic-bezier(0.2, 0.9, 0.35, 1)',
                'medium': 'cubic-bezier(0.22, 1, 0.36, 1)',
                'slow': 'cubic-bezier(0.22, 0.65, 0.3, 1)',
            },
            transitionDuration: {
                'instant': '80ms',
                'short': '160ms',
                'medium': '300ms',
                'long': '520ms',
            },
            maxWidth: {
                'container': '1280px',
            },
            height: {
                'navbar': '88px',
            },
            width: {
                'sidebar': '280px',
                'sidebar-collapsed': '80px',
            },
            zIndex: {
                'base': '0',
                'dropdown': '100',
                'sticky': '200',
                'fixed': '300',
                'modal-backdrop': '400',
                'modal': '500',
                'toast': '600',
            },
            keyframes: {
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                'slide-up': {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                'slide-down': {
                    '0%': { transform: 'translateY(-20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                'slide-in-right': {
                    '0%': { transform: 'translateX(100%)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                'scale-in': {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                'glow-pulse': {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(0,210,193,0.2)' },
                    '50%': { boxShadow: '0 0 40px rgba(0,210,193,0.4)' },
                },
                'gradient-shift': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                'marquee': {
                    'from': { transform: 'translateX(0)' },
                    'to': { transform: 'translateX(calc(-100% - var(--gap)))' }
                },
            },
            animation: {
                'fade-in': 'fade-in 0.3s ease-medium',
                'slide-up': 'slide-up 0.3s ease-medium',
                'slide-down': 'slide-down 0.3s ease-medium',
                'slide-in-right': 'slide-in-right 0.3s ease-medium',
                'scale-in': 'scale-in 0.3s ease-medium',
                'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
                'gradient-shift': 'gradient-shift 10s linear infinite',
                'marquee': 'marquee var(--duration) linear infinite',
            },
        },
    },
    plugins: [],
};
