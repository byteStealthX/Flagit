# TrueTrace Design System

> **AI Misinformation Intelligence Platform**  
> Dark-Neon Intelligence UI — Futuristic, Trustworthy, Premium

---

## 📋 Overview

The TrueTrace Design System is a comprehensive set of design tokens, components, and utilities built for creating a cohesive, futuristic cyber-intelligence interface. The system emphasizes **glass morphism**, **neon accents**, **smooth animations**, and **clean geometry**.

### Core Principles
- **Futuristic**: Cutting-edge visual language
- **Trustworthy**: Professional and reliable appearance
- **Cyber-Intelligence**: Technical and data-focused aesthetics
- **Premium**: High-quality, polished experiences

### Visual Style
- Glass layers with blur effects
- Neon gradient accents
- Clean geometric shapes
- Smooth depth and shadows
- Cybernetic grid patterns

---

## 🎨 Design Tokens

### Color Palette

#### Background Colors
```typescript
bg.main = "#0B0F17"        // Main application background
bg.surface = "#0F141E"     // Surface/panel background
bg.glass = "rgba(255,255,255,0.04)"   // Glass effect
bg.hover = "rgba(255,255,255,0.06)"   // Hover states
bg.elevated = "rgba(255,255,255,0.02)" // Elevated surfaces
```

**Usage in Tailwind:**
```tsx
<div className="bg-bg-main">
<div className="bg-bg-surface">
<div className="bg-bg-glass backdrop-blur-lg">
```

#### Primary Colors
```typescript
primary.100 = "#2DD4BF"    // Teal
primary.200 = "#22D3EE"    // Cyan
primary.300 = "#0EA5E9"    // Sky Blue
primary.400 = "#3B82F6"    // Blue (Main)
primary.glow = "rgba(59,130,246,0.35)"  // Glow effect
```

**Usage:**
```tsx
<button className="bg-primary-400 text-white">
<div className="border-primary-200">
<h1 className="text-primary-100">
```

#### Secondary Colors
```typescript
secondary.100 = "#6366F1"  // Indigo
secondary.200 = "#A855F7"  // Purple
```

#### Semantic Colors
```typescript
semantic.success = "#22C55E"   // Green
semantic.info = "#0EA5E9"      // Blue
semantic.warning = "#F59E0B"   // Amber
semantic.danger = "#EF4444"    // Red
semantic.critical = "#DC2626"  // Dark Red
```

**Usage:**
```tsx
<span className="text-semantic-success">Verified</span>
<div className="border-semantic-danger">Alert</div>
```

#### Text Colors
```typescript
text.primary = "#F1F5F9"      // Main text
text.secondary = "#A5B4C7"    // Secondary text
text.muted = "#64748B"        // Muted/helper text
text.inverse = "#0B0F17"      // Inverse (on bright backgrounds)
```

**Usage:**
```tsx
<h1 className="text-text-primary">
<p className="text-text-secondary">
<span className="text-text-muted text-sm">
```

---

### Gradient System

```typescript
// Primary Gradient (Main CTAs, highlights)
gradient.primary = "linear-gradient(90deg, #3B82F6, #06B6D4, #2DD4BF)"

// Hero Gradient (Large headers, hero sections)
gradient.hero = "linear-gradient(120deg, #3B82F6 0%, #22D3EE 40%, #A855F7 100%)"

// Subtle Gradient (Backgrounds, cards)
gradient.subtle = "linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))"

// Accent Gradient (Highlights, borders)
gradient.accent = "linear-gradient(135deg, #6366F1, #A855F7)"

// Glass Gradient (Glass panels)
gradient.glass = "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))"
```

**Usage in Tailwind:**
```tsx
<div className="bg-gradient-primary">
<div className="bg-gradient-hero">
<div className="bg-gradient-glass">
```

**Usage with Custom CSS:**
```tsx
<h1 className="gradient-text-primary">TrueTrace</h1>
<h2 className="gradient-text-hero">Intelligence Feed</h2>
```

---

### Typography

#### Font Families
```css
--font-main: Inter, system-ui, -apple-system, sans-serif
--font-mono: JetBrains Mono, Consolas, Monaco, monospace
```

**Usage:**
```tsx
<div className="font-sans">Regular text</div>
<code className="font-mono">KPI: 94.2%</code>
```

#### Font Sizes
| Token | Size | Usage |
|-------|------|-------|
| `h1` | 56px | Page titles |
| `h2` | 40px | Section headers |
| `h3` | 30px | Subsection headers |
| `h4` | 24px | Card titles |
| `body-lg` | 18px | Large body text |
| `body-md` | 16px | Default body text |
| `body-sm` | 14px | Small text |
| `caption` | 12px | Captions, labels |

**Usage:**
```tsx
<h1 className="text-[56px] font-bold">Dashboard</h1>
<h2 className="text-[40px] font-semibold">Analytics</h2>
<p className="text-base">Body text</p>
<span className="text-sm text-text-muted">Helper text</span>
```

#### Font Weights
```typescript
light = 300
regular = 400
medium = 500
semibold = 600
bold = 700
extrabold = 800
```

---

### Spacing Scale

```typescript
xs = 4px     // Tight spacing
sm = 8px     // Small gaps
md = 12px    // Default gaps
lg = 20px    // Card padding
xl = 32px    // Section spacing
2xl = 48px   // Large section spacing
3xl = 64px   // Hero spacing
```

**Usage:**
```tsx
<div className="p-lg">           {/* 20px padding */}
<div className="gap-md">         {/* 12px gap */}
<div className="space-y-xl">     {/* 32px vertical spacing */}
```

---

### Border Radius

```typescript
sm = 6px     // Small elements (badges, tags)
md = 12px    // Buttons, inputs
lg = 16px    // Cards, panels
xl = 22px    // Modals, large containers
2xl = 24px   // Feature cards
full = 9999px // Pills, rounded buttons
```

**Usage:**
```tsx
<button className="rounded-md">
<div className="rounded-lg">
<div className="rounded-xl">
```

---

### Shadows & Glows

#### Standard Shadows
```css
shadow-sm   // Subtle depth
shadow-md   // Default card shadow
shadow-lg   // Elevated panels
shadow-xl   // Modals, overlays
shadow-glass // Glass morphism
```

#### Glow Effects
```css
shadow-glow-primary  // Blue glow
shadow-glow-cyan     // Cyan glow
shadow-glow-purple   // Purple glow
shadow-glow-success  // Green glow
shadow-glow-danger   // Red glow
```

**Usage:**
```tsx
<div className="shadow-glass">
<button className="hover:shadow-glow-primary">
<div className="shadow-xl">
```

---

## 🧩 Component Tokens

### Buttons

#### Filled Button (Primary CTA)
```tsx
<button className="btn-primary">
  Analyze Now
</button>
```

**Custom Implementation:**
```tsx
<button className="bg-gradient-primary text-white font-semibold px-6 py-2.5 rounded-md hover:shadow-glow-primary hover:-translate-y-0.5 transition-all">
  Get Started
</button>
```

#### Outline Button
```tsx
<button className="btn-outline">
  Learn More
</button>
```

**Custom:**
```tsx
<button className="border border-border-soft hover:bg-gradient-subtle rounded-md px-6 py-2.5 transition-all">
  Secondary Action
</button>
```

#### Ghost Button
```tsx
<button className="btn-ghost">
  Cancel
</button>
```

---

### Cards

#### Glass Card
```tsx
<div className="glass-card rounded-lg p-lg">
  <h3 className="text-xl font-semibold mb-4">Card Title</h3>
  <p className="text-text-secondary">Card content...</p>
</div>
```

**Custom:**
```tsx
<div className="bg-gradient-glass backdrop-blur-lg border border-border-soft rounded-lg p-lg shadow-glass">
  {/* Content */}
</div>
```

#### Card with Hover Effect
```tsx
<div className="card-glass card-hover rounded-lg p-lg">
  {/* Lifts on hover with glow */}
</div>
```

---

### KPI / Stat Cards

```tsx
<div className="kpi-card">
  <p className="text-text-muted text-sm uppercase tracking-wide mb-2">
    Total Flags
  </p>
  <div className="kpi-value">
    24,567
  </div>
  <p className="text-semantic-success text-sm mt-2">
    ↑ 12.5% from last week
  </p>
</div>
```

**Custom:**
```tsx
<div className="bg-gradient-card backdrop-blur-lg border border-border-soft rounded-lg p-lg relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-gradient-primary">
  <p className="text-text-secondary text-xs uppercase tracking-wider">Active Cases</p>
  <p className="font-mono text-4xl font-bold gradient-text-primary mt-2">1,234</p>
</div>
```

---

### Navigation Items

#### Active Navigation Item
```tsx
<a href="/dashboard" className="nav-item-active">
  <span className="nav-text">Dashboard</span>
</a>
```

**Features:**
- Left neon accent line
- Gradient text color
- Subtle glass background
- Glow effect on the accent line

**Custom:**
```tsx
<a className="relative flex items-center px-4 py-3 rounded-md bg-bg-hover accent-line-left">
  <span className="gradient-text-primary font-medium">Dashboard</span>
</a>
```

---

### Badges

```tsx
<span className="badge-primary">Active</span>
<span className="badge-success">Verified</span>
<span className="badge-warning">Pending</span>
<span className="badge-danger">Flagged</span>
```

**Custom:**
```tsx
<span className="px-3 py-1 text-xs font-semibold rounded-sm border border-primary-300 bg-primary-glow text-primary-200">
  Live
</span>
```

---

### Panels

```tsx
<div className="panel-glass">
  <h3 className="text-lg font-semibold mb-4">Panel Title</h3>
  {/* Content */}
</div>
```

---

### Input Fields

```tsx
<input 
  type="text"
  placeholder="Search intelligence..."
  className="bg-bg-glass border border-border-soft rounded-md px-4 py-2.5 text-text-primary focus:outline-none focus:border-primary-400 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.35)] transition-all"
/>
```

---

## ✨ Special Effects

### Glass Panel
```tsx
<div className="glass-panel rounded-lg p-6">
  {/* Blurred glass background with soft border */}
</div>
```

### Gradient Text
```tsx
<h1 className="gradient-text-primary text-5xl font-bold">
  TrueTrace Intelligence
</h1>

<h2 className="gradient-text-hero text-4xl font-bold">
  Hero Heading
</h2>
```

### Neon Accent Line (Left)
```tsx
<div className="accent-line-left p-4">
  {/* Content with left neon line */}
</div>
```

### Cyber Grid Background
```tsx
<div className="cyber-grid min-h-screen">
  {/* Grid pattern overlay */}
</div>
```

### Glow on Hover
```tsx
<div className="glow-on-hover rounded-lg p-6 cursor-pointer">
  {/* Glows when hovered */}
</div>
```

### Pulse Glow Animation
```tsx
<div className="pulse-glow rounded-full w-4 h-4 bg-primary-400">
  {/* Pulsing indicator */}
</div>
```

### Shimmer Effect
```tsx
<div className="shimmer bg-bg-surface rounded-lg h-32">
  {/* Loading shimmer animation */}
</div>
```

### Data Flow Animation
```tsx
<div className="data-flow h-1 bg-bg-surface rounded-full">
  {/* Data streaming effect */}
</div>
```

---

## 📦 Component Examples

### Dashboard Card with Stats
```tsx
<div className="glass-card rounded-lg p-6">
  <div className="flex items-center justify-between mb-4">
    <h3 className="text-lg font-semibold text-text-primary">Threat Level</h3>
    <span className="badge-danger">High</span>
  </div>
  
  <div className="flex items-baseline gap-2 mb-2">
    <span className="font-mono text-4xl font-bold gradient-text-primary">87%</span>
    <span className="text-semantic-success text-sm">↑ 5%</span>
  </div>
  
  <p className="text-text-muted text-sm">Compared to last 24 hours</p>
  
  <div className="mt-4 h-2 bg-bg-surface rounded-full overflow-hidden">
    <div className="h-full bg-gradient-primary w-[87%]"></div>
  </div>
</div>
```

### Table Component
```tsx
<div className="bg-bg-surface border border-border-soft rounded-lg overflow-hidden">
  <table className="w-full">
    <thead className="bg-bg-glass border-b border-border-soft">
      <tr>
        <th className="px-6 py-4 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">
          Source
        </th>
        <th className="px-6 py-4 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">
          Status
        </th>
        <th className="px-6 py-4 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">
          Confidence
        </th>
      </tr>
    </thead>
    <tbody className="divide-y divide-border-soft">
      <tr className="hover:bg-bg-hover transition-colors">
        <td className="px-6 py-4 text-text-primary">Twitter</td>
        <td className="px-6 py-4"><span className="badge-success">Active</span></td>
        <td className="px-6 py-4"><span className="font-mono text-primary-200">94.2%</span></td>
      </tr>
    </tbody>
  </table>
</div>
```

### Modal Dialog
```tsx
<div className="fixed inset-0 bg-[rgba(11,15,23,0.8)] backdrop-blur-sm flex items-center justify-center z-50">
  <div className="bg-bg-surface border border-border-medium rounded-xl shadow-xl max-w-md w-full p-8">
    <h2 className="text-2xl font-bold gradient-text-primary mb-4">
      Confirm Action
    </h2>
    <p className="text-text-secondary mb-6">
      Are you sure you want to proceed with this action?
    </p>
    <div className="flex gap-3 justify-end">
      <button className="btn-ghost">Cancel</button>
      <button className="btn-primary">Confirm</button>
    </div>
  </div>
</div>
```

---

## 🎯 Usage Guidelines

### Typography Hierarchy
1. **Page Titles**: `h1` (56px) + `gradient-text-hero` + `font-bold`
2. **Section Headers**: `h2` (40px) + `font-semibold`
3. **Subsections**: `h3` (30px) + `font-semibold`
4. **Card Titles**: `h4` (24px) + `font-semibold`
5. **Body Text**: `body-md` (16px) + `font-regular`
6. **Helper Text**: `caption` (12px) + `text-text-muted`

### Color Usage
- **Primary Actions**: Use `gradient-primary` or `primary-400`
- **Success States**: `semantic-success`
- **Warnings/Alerts**: `semantic-warning` or `semantic-danger`
- **Text Hierarchy**: `text-primary` → `text-secondary` → `text-muted`

### Spacing Consistency
- **Card Padding**: `p-lg` (20px)
- **Section Spacing**: `space-y-xl` (32px)
- **Button Padding**: `px-6 py-2.5`
- **Input Padding**: `px-4 py-2.5`

### Animation & Interactions
- **Hover Transitions**: `transition-all duration-250`
- **Button Lift**: `hover:-translate-y-0.5`
- **Glow Effects**: `hover:shadow-glow-primary`
- **Loading States**: Use `shimmer` or `pulse` classes

---

## 🚀 Quick Start

### 1. Import Design System
The design system is automatically imported in `src/index.css`:
```css
@import "./styles/design-system.css";
```

### 2. Use Design Tokens
```tsx
import { designTokens } from '@/lib/design-tokens';
import { componentTokens } from '@/lib/component-tokens';

// In your component
const styles = {
  backgroundColor: designTokens.background.main,
  color: designTokens.text.primary,
};
```

### 3. Use Tailwind Classes
```tsx
<div className="bg-bg-main text-text-primary">
  <button className="btn-primary">Click me</button>
  <div className="glass-card rounded-lg p-lg">
    <h3 className="gradient-text-primary">Title</h3>
  </div>
</div>
```

---

## 📚 File Structure

```
src/
├── lib/
│   ├── design-tokens.ts        # Core design tokens
│   └── component-tokens.ts     # Component-specific tokens
├── styles/
│   └── design-system.css       # CSS custom properties & utilities
├── index.css                   # Main CSS (imports design system)
└── tailwind.config.ts          # Tailwind configuration
```

---

## 🎨 Figma / Design Tool Export

### Export Colors as CSS Variables
All colors are available as CSS custom properties:
```css
var(--bg-main)
var(--primary-400)
var(--text-primary)
var(--gradient-primary)
```

### Export as JavaScript Tokens
Import and use in JavaScript/TypeScript:
```typescript
import { designTokens } from '@/lib/design-tokens';

const primaryColor = designTokens.primary[400]; // "#3B82F6"
```

---

## 🔧 Customization

To customize the design system:

1. **Update tokens**: Edit `src/lib/design-tokens.ts`
2. **Add new utilities**: Edit `src/styles/design-system.css`
3. **Extend Tailwind**: Edit `tailwind.config.ts`
4. **Create component variants**: Edit `src/lib/component-tokens.ts`

---

## 📖 Additional Resources

- **Tailwind CSS Documentation**: https://tailwindcss.com
- **Radix UI**: https://www.radix-ui.com
- **Inter Font**: https://rsms.me/inter/
- **JetBrains Mono**: https://www.jetbrains.com/lp/mono/

---

**Built for TrueTrace — AI Misinformation Intelligence Platform**  
© 2024 TrueTrace. Dark-Neon Intelligence UI Design System v1.0
