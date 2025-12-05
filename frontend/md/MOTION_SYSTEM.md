# TrueTrace Motion System

Complete micro-interactions and animation system for premium, intelligent UI.

---

## 🎯 Motion Principles

**Animations must feel:**
- **Smooth** – No janky or stuttering transitions
- **Intelligent** – Purposeful, data-focused
- **Premium** – Polished, high-quality feel
- **Lightweight** – No performance overhead
- **Consistent** – Unified timing across platform

**Perfect for:**
- Dark-neon data dashboards
- Intelligence feeds
- Real-time analytics
- Map visualizations
- Verification workflows

---

## ⏱️ Timing System

### Duration Tokens
```typescript
fast: 120ms       // Micro-interactions (hover, focus)
normal: 200ms     // Standard transitions (modals, dropdowns)
smooth: 280ms     // Smooth animations (page transitions)
deliberate: 360ms // Intentional movements (drawer slides)
slow: 480ms       // Loading states, complex animations
```

### Easing Functions
```typescript
standard:   cubic-bezier(0.4, 0, 0.2, 1)  // Default easing
accelerate: cubic-bezier(0.4, 0, 1, 1)    // Exit animations
decelerate: cubic-bezier(0, 0, 0.2, 1)    // Enter animations
smooth:     cubic-bezier(0.4, 0, 0.6, 1)  // Gentle movements
```

### Spring Configurations
```typescript
snappy:  { stiffness: 300, damping: 30 }
bouncy:  { stiffness: 200, damping: 20 }
gentle:  { stiffness: 100, damping: 15 }
precise: { stiffness: 400, damping: 40 }
```

---

## 🎨 Usage

### Tailwind Classes
```tsx
// Duration
className="transition-fast duration-fast"
className="transition-smooth duration-smooth"

// Easing
className="ease-standard"
className="ease-accelerate" // Exits
className="ease-decelerate" // Enters

// Combined
className="transition-all duration-normal ease-standard"
```

### Framer Motion Variants

#### Page Transitions
```tsx
import { pageVariants } from '@/lib/motion-presets';

<motion.div
  variants={pageVariants}
  initial="initial"
  animate="animate"
  exit="exit"
>
  {children}
</motion.div>
```

#### Card Hover
```tsx
import { cardHoverVariants } from '@/lib/motion-presets';

<motion.div
  variants={cardHoverVariants}
  whileHover="hover"
  whileTap="tap"
  className="glass-card"
>
  {content}
</motion.div>
```

#### Button Tap
```tsx
import { buttonTapVariants } from '@/lib/motion-presets';

<motion.button
  variants={buttonTapVariants}
  whileHover="hover"
  whileTap="tap"
>
  Click Me
</motion.button>
```

#### Modal/Dialog
```tsx
import { modalVariants } from '@/lib/motion-presets';

<motion.div
  variants={modalVariants}
  initial="hidden"
  animate="visible"
  exit="exit"
>
  <DialogContent />
</motion.div>
```

#### List Stagger
```tsx
import { listStaggerVariants } from '@/lib/motion-presets';

<motion.ul variants={listStaggerVariants.container} initial="hidden" animate="visible">
  {items.map(item => (
    <motion.li key={item.id} variants={listStaggerVariants.item}>
      {item.content}
    </motion.li>
  ))}
</motion.ul>
```

---

## 🧩 CSS Animations

### Global Animations
```css
/* Fade In Up */
.animate-fade-in-up {
  animation: fadeInUp 0.4s ease-out forwards;
}

/* Glow Pulse */
.animate-glow-pulse {
  animation: glowPulse 2s ease-in-out infinite;
}

/* Shimmer */
.animate-shimmer {
  animation: shimmer 2s ease-in-out infinite;
}

/* Scanline (cyber effect) */
.animate-scanline {
  animation: scanline 3s linear infinite;
}
```

### Component Animations
```css
/* Card Float */
.card-float {
  animation: cardFloat 3s ease-in-out infinite;
}

/* Badge Pulse */
.badge-pulse {
  animation: badgePulse 2s ease-in-out infinite;
}

/* Status Indicator Blink */
.status-blink {
  animation: statusBlink 1.5s ease-in-out infinite;
}

/* Loading Spinner */
.spinner-rotate {
  animation: spinnerRotate 1s linear infinite;
}
```

### Hover Effects
```css
/* Hover Lift */
.hover-lift:hover {
  transform: translateY(-2px);
  transition: transform 200ms cubic-bezier(0, 0, 0.2, 1);
}

/* Hover Glow */
.hover-glow:hover {
  box-shadow: 0 0 24px rgba(59, 130, 246, 0.45);
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* Hover Scale */
.hover-scale:hover {
  transform: scale(1.02);
  transition: transform 200ms cubic-bezier(0, 0, 0.2, 1);
}
```

---

## 🚀 Page-Specific Animations

### Dashboard
```tsx
// Staggered KPI cards
<motion.div 
  variants={listStaggerVariants.container}
  initial="hidden"
  animate="visible"
>
  {kpis.map(kpi => (
    <motion.div 
      key={kpi.id} 
      variants={listStaggerVariants.item}
      className="glass-card"
    >
      <KPICard {...kpi} />
    </motion.div>
  ))}
</motion.div>

// Real-time updates
<motion.div
  key={updateId}
  initial={{ scale: 0.95, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.28 }}
>
  {liveData}
</motion.div>
```

### Intelligence Feed
```tsx
// Feed item entrance
<motion.div
  variants={listStaggerVariants.item}
  className="animate-fade-in-up"
>
  <FeedItem />
</motion.div>

// Verification result
<motion.div
  variants={verificationResultVariants}
  initial="hidden"
  animate={isVerified ? "success" : "failure"}
>
  {result}
</motion.div>
```

### Analytics Charts
```tsx
// Chart fade-in
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.36, ease: [0, 0, 0.2, 1] }}
>
  <Chart data={analyticsData} />
</motion.div>

// Tooltip hover
<motion.div
  initial={{ scale: 0, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  exit={{ scale: 0, opacity: 0 }}
  transition={{ duration: 0.12 }}
>
  <Tooltip />
</motion.div>
```

### Map Intelligence
```tsx
// Map marker pulse
<motion.div
  variants={mapMarkerVariants}
  initial="initial"
  animate="pulse"
  className="map-marker"
>
  <MarkerIcon />
</motion.div>

// Cluster expand
<motion.div
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ type: "spring", stiffness: 300, damping: 30 }}
>
  <MarkerCluster />
</motion.div>
```

### Verification Tools
```tsx
// File upload states
<motion.div
  variants={fileUploadVariants}
  initial="idle"
  animate={uploadState} // "uploading" | "success" | "error"
>
  <UploadArea />
</motion.div>

// Result animation
<motion.div
  variants={verificationResultVariants}
  initial="hidden"
  animate={resultType} // "success" | "failure" | "pending"
>
  <ResultCard />
</motion.div>
```

### Tables & Lists
```tsx
// Table row stagger
<motion.tbody>
  {rows.map((row, i) => (
    <motion.tr
      key={row.id}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: i * 0.03, duration: 0.2 }}
    >
      {row.cells}
    </motion.tr>
  ))}
</motion.tbody>

// Row hover
<tr className="hover-lift hover-glow transition-all duration-normal">
  {cells}
</tr>
```

---

## 📦 Component Library

### AnimatedCard
```tsx
import { motion } from 'framer-motion';
import { cardHoverVariants } from '@/lib/motion-presets';

export const AnimatedCard = ({ children, ...props }) => (
  <motion.div
    variants={cardHoverVariants}
    whileHover="hover"
    whileTap="tap"
    className="glass-card"
    {...props}
  >
    {children}
  </motion.div>
);
```

### AnimatedButton
```tsx
import { motion } from 'framer-motion';
import { buttonTapVariants } from '@/lib/motion-presets';

export const AnimatedButton = ({ children, ...props }) => (
  <motion.button
    variants={buttonTapVariants}
    whileHover="hover"
    whileTap="tap"
    className="btn-filled"
    {...props}
  >
    {children}
  </motion.button>
);
```

### PageTransition
```tsx
import { motion, AnimatePresence } from 'framer-motion';
import { pageVariants } from '@/lib/motion-presets';

export const PageTransition = ({ children, location }) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={location}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  </AnimatePresence>
);
```

### StaggerList
```tsx
import { motion } from 'framer-motion';
import { listStaggerVariants } from '@/lib/motion-presets';

export const StaggerList = ({ items }) => (
  <motion.div
    variants={listStaggerVariants.container}
    initial="hidden"
    animate="visible"
  >
    {items.map(item => (
      <motion.div key={item.id} variants={listStaggerVariants.item}>
        {item.content}
      </motion.div>
    ))}
  </motion.div>
);
```

---

## ⚡ Performance Best Practices

### DO ✅
- Use `transform` and `opacity` for animations (GPU-accelerated)
- Apply `will-change` sparingly for complex animations
- Use CSS animations for simple effects
- Prefer Framer Motion for complex orchestrations
- Limit simultaneous animations to 3-5 elements
- Use `AnimatePresence` for exit animations
- Stagger list items with small delays (30-50ms)

### DON'T ❌
- Animate layout properties (width, height, top, left)
- Use excessive box-shadows in animations
- Chain too many sequential animations
- Animate on scroll without throttling
- Use heavy backdrop-blur in rapid animations
- Forget to clean up animation listeners

### Optimization Tips
```tsx
// Use layoutId for shared element transitions
<motion.div layoutId="card-1" />

// Reduce motion for accessibility
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const variants = prefersReducedMotion.matches 
  ? noMotionVariants 
  : fullMotionVariants;

// Lazy load Framer Motion
const MotionComponent = lazy(() => import('./MotionComponent'));
```

---

## 🎭 Accessibility

### Respect User Preferences
```tsx
import { useReducedMotion } from 'framer-motion';

const shouldReduceMotion = useReducedMotion();

<motion.div
  animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
  transition={{ duration: shouldReduceMotion ? 0 : 0.28 }}
>
  {content}
</motion.div>
```

### ARIA Attributes
```tsx
<motion.div
  role="status"
  aria-live="polite"
  aria-busy={isAnimating}
>
  {loadingState}
</motion.div>
```

---

## 📊 Motion Token Reference

### Component-Specific Timings
```typescript
button: { hover: 120, tap: 80, press: 200 }
card: { hover: 200, flip: 360, expand: 280 }
modal: { enter: 280, exit: 200 }
drawer: { slide: 360, close: 280 }
dropdown: { open: 200, close: 150 }
tooltip: { show: 120, hide: 80 }
notification: { enter: 280, exit: 200, dismiss: 150 }
tab: { switch: 200 }
accordion: { expand: 280, collapse: 200 }
page: { transition: 360 }
```

### Stagger Delays
```typescript
listItem: 30ms      // List item stagger
cardGrid: 50ms      // Card grid stagger
navItem: 40ms       // Navigation items
notification: 100ms // Toast stagger
tableRow: 30ms      // Table row entrance
```

---

## 🔗 Related Documentation
- [Design System](./DESIGN_SYSTEM.md)
- [Component Tokens](./src/lib/component-tokens.ts)
- [Motion Tokens](./src/lib/motion-tokens.ts)
- [Motion Presets](./src/lib/motion-presets.ts)
- [Animations CSS](./src/styles/animations.css)

---

**Built for TrueTrace** – Premium intelligence platform animations.
