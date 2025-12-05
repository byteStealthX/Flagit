# 🚀 TrueTrace Nexus - Enterprise Intelligence Platform

> **Advanced Intelligence Verification & Analysis Platform with Premium React Components**

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green?logo=node.js)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18%2B-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5%2B-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3%2B-06B6D4?logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Build%20Tool-Vite-646CFF?logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Premium Libraries](#premium-libraries)
- [Project Structure](#project-structure)
- [Quick Start](#quick-start)
- [Development](#development)
- [Production Build](#production-build)
- [Documentation](#documentation)
- [API Integration](#api-integration)
- [Components Guide](#components-guide)
- [Contributing](#contributing)

---

## 🎯 Overview

**TrueTrace Nexus** is an enterprise-grade intelligence verification and analysis platform built with cutting-edge React technologies. It provides sophisticated tools for intelligence processing, verification, and analytics with a premium user experience powered by:

- 🎨 **Lenis Smooth Scrolling** - 60FPS buttery-smooth scrolling throughout the app
- ⚡ **Lazy Loading** - Intelligent viewport-based component and image rendering
- 📊 **Premium UI Components** - Radix UI-based headless components
- 🎬 **Advanced Animations** - Framer Motion-powered scroll and interaction animations
- 📈 **Neon Charts** - Recharts-based visualizations with dark-neon aesthetic
- 🔗 **API Integration** - Axios + React Query for robust data fetching

---

## ✨ Features

### Core Features
- ✅ **Intelligence Feed** - Real-time verification claims with lazy loading
- ✅ **Advanced Analytics** - Multi-type charts and data visualization
- ✅ **Verification Tools** - Complete verification workflow
- ✅ **Report Management** - Generate and manage intelligence reports
- ✅ **Dataset Management** - Organize and analyze datasets
- ✅ **Activity Logs** - Track all platform activities
- ✅ **User Management** - Role-based access control
- ✅ **Settings Panel** - Comprehensive application configuration

### Premium Features
- ✅ **Smooth Scrolling (Lenis)** - GPU-accelerated smooth scroll throughout
- ✅ **Lazy Loading** - Blur-up image loading with intersection observer
- ✅ **Premium Animations** - Scroll-triggered animations, counters, gradients
- ✅ **Glass Morphism** - Modern glass-effect UI components
- ✅ **Neon Styling** - Dark-neon aesthetic with custom color schemes
- ✅ **Responsive Design** - Mobile-first, fully responsive interface
- ✅ **Dark Mode** - Native dark mode support throughout
- ✅ **Type Safety** - 100% TypeScript coverage

---

## 🛠️ Tech Stack

### Frontend Framework
- **React 18+** - UI library with hooks
- **TypeScript 5+** - Type-safe JavaScript
- **Vite** - Next-generation build tool
- **Tailwind CSS 3+** - Utility-first CSS framework

### Component Libraries
- **Radix UI** - Headless, accessible components
  - `@radix-ui/react-dialog` - Modal/dialog primitives
  - `@radix-ui/react-dropdown-menu` - Dropdown menu primitives
  - `@radix-ui/react-tabs` - Tab interface primitives
- **Shadcn UI** - High-quality pre-built components
- **Lucide React** - Beautiful icon library

### Premium Libraries
- **Lenis** v1.0+ - Smooth scroll library
- **Framer Motion** - Animation library
- **React Lazyload** - Lazy loading components
- **Recharts** - Chart library with custom styling

### Data & API
- **@tanstack/react-query** v5+ - Server state management
- **Axios** v1.6+ - HTTP client
- **Mock Server** - Development API mocking

### Styling & Animation
- **Tailwind CSS** - Utility styling
- **PostCSS** - CSS processing
- **Motion System** - Custom animation presets
- **Design Tokens** - Centralized design system

---

## 📦 Premium Libraries Integration

### Lenis - Smooth Scrolling
```tsx
import { useLenis } from '@/hooks/useLenis';

export function MyPage() {
  useLenis(); // Enable smooth scrolling
  return <div>{/* content */}</div>;
}
```

### React Query - Data Fetching
```tsx
import { useVerifyText } from '@/hooks/useVerify';

export function VerificationPage() {
  const { data, isLoading } = useVerifyText('claim text');
  return <div>{isLoading ? 'Loading...' : data}</div>;
}
```

### Lazy Loading
```tsx
import { LazyComponent } from '@/hooks/useLazyLoad';

export function Page() {
  return (
    <LazyComponent fallback={<Skeleton />}>
      <HeavyComponent />
    </LazyComponent>
  );
}
```

### Premium Components
```tsx
import { Sheet, Tabs, Combobox } from '@/components/ui/PremiumComponents';

<Tabs tabs={[{ label: 'Tab 1', content: <div /> }]} />
<Sheet isOpen={open} onClose={handleClose} title="Details" />
<Combobox options={options} onChange={handleChange} />
```

### Charts with Neon Styling
```tsx
import { NeonLineChart, NeonBarChart } from '@/components/ui/Charts';

<NeonLineChart data={data} name="Metrics" />
<NeonBarChart data={data} name="Volume" />
```

---

## 📁 Project Structure

```
truetrace-nexus/
├── src/
│   ├── api/                      # API layer
│   │   ├── client.ts            # Axios configuration
│   │   ├── verify.ts            # Verification endpoints
│   │   ├── reports.ts           # Reports endpoints
│   │   ├── analytics.ts         # Analytics endpoints
│   │   └── datasets.ts          # Datasets endpoints
│   │
│   ├── hooks/                   # React hooks
│   │   ├── useLenis.ts          # Smooth scrolling hook
│   │   ├── useLazyLoad.tsx      # Lazy loading component
│   │   ├── useVerify.ts         # Verification queries
│   │   ├── useReports.ts        # Reports queries
│   │   ├── useAnalytics.ts      # Analytics queries
│   │   ├── use-mobile.tsx       # Mobile detection
│   │   └── use-toast.ts         # Toast notifications
│   │
│   ├── components/
│   │   ├── layout/              # Layout components
│   │   │   ├── MainLayout.tsx   # App shell with Lenis
│   │   │   ├── AppSidebar.tsx   # Navigation sidebar
│   │   │   └── AppTopbar.tsx    # Top navigation bar
│   │   │
│   │   ├── ui/                  # UI components
│   │   │   ├── PremiumComponents.tsx  # Sheet, Tabs, Combobox
│   │   │   ├── Charts.tsx            # Neon-styled charts
│   │   │   ├── UIComponents.tsx      # Base UI components
│   │   │   ├── Overlays.tsx          # Modal, Drawer, Toast
│   │   │   ├── DataTable.tsx         # Sortable data table
│   │   │   └── [40+ other components]
│   │   │
│   │   └── NavLink.tsx          # Navigation link component
│   │
│   ├── pages/
│   │   ├── Index.tsx            # Home page
│   │   ├── Landing.tsx          # Landing page
│   │   ├── NotFound.tsx         # 404 page
│   │   │
│   │   ├── app/                 # App pages
│   │   │   ├── Dashboard.tsx    # Main dashboard
│   │   │   ├── Analytics.tsx    # Analytics with charts
│   │   │   ├── IntelligenceFeed.tsx  # Feed with claims
│   │   │   ├── VerificationTools.tsx
│   │   │   ├── Reports.tsx
│   │   │   ├── Datasets.tsx
│   │   │   ├── Sources.tsx
│   │   │   ├── Users.tsx
│   │   │   ├── Automations.tsx
│   │   │   ├── ActivityLogs.tsx
│   │   │   └── Settings.tsx
│   │   │
│   │   └── auth/                # Auth pages
│   │       ├── Login.tsx
│   │       ├── Register.tsx
│   │       ├── ForgotPassword.tsx
│   │       └── VerifyEmail.tsx
│   │
│   ├── lib/                     # Utilities and helpers
│   │   ├── utils.ts             # General utilities
│   │   ├── design-system.ts     # Design tokens
│   │   ├── design-tokens.ts     # Color/spacing tokens
│   │   ├── motion-presets.ts    # Animation presets
│   │   └── PremiumUtils.tsx     # Animation utilities
│   │
│   ├── styles/                  # Global styles
│   │   ├── animations.css       # Animation definitions
│   │   └── design-system.css    # Design system CSS
│   │
│   ├── App.tsx                  # Root component
│   ├── main.tsx                 # Entry point
│   ├── index.css                # Global styles
│   └── vite-env.d.ts            # Vite types
│
├── public/                      # Static assets
│   └── robots.txt
│
├── docs/                        # Documentation
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript config
├── vite.config.ts               # Vite configuration
├── package.json                 # Dependencies
└── README.md                    # This file
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** 9+ or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/byteStealthX/truetrace-nexus.git
cd truetrace-nexus

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

---

## 💻 Development

### Available Scripts

```bash
# Start dev server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npx tsc --noEmit

# Lint code
npm run lint
```

### Development Server Features
- ⚡ Instant HMR (Hot Module Replacement)
- 🔧 Source maps for debugging
- 📊 Build analysis
- 🎯 TypeScript strict mode

---

## 📦 Production Build

```bash
# Create optimized production build
npm run build

# Output files in dist/
# - dist/index.html (0.95 kB)
# - dist/assets/index.css (108.89 kB → 18.10 kB gzipped)
# - dist/assets/index.js (1,147 MB → 328.94 kB gzipped)

# Preview production build locally
npm run preview
```

### Build Statistics
- **Build Time**: 13.21 seconds
- **Modules**: 2,963 transformed
- **TypeScript Errors**: 0
- **Output Size**: Optimized with tree-shaking

---

## 📚 Documentation

### Main Guides
- **[QUICK_START_PREMIUM.md](./md/QUICK_START_PREMIUM.md)** - Quick reference guide
- **[PREMIUM_LIBRARIES.md](./md/PREMIUM_LIBRARIES.md)** - Comprehensive library documentation
- **[IMPLEMENTATION_SUMMARY.md](./md/IMPLEMENTATION_SUMMARY.md)** - What was implemented
- **[VISUAL_GUIDE.md](./md/VISUAL_GUIDE.md)** - Visual showcase of features
- **[COMPLETION_CHECKLIST.md](./md/COMPLETION_CHECKLIST.md)** - Verification checklist

### System Documentation
- **[DESIGN_SYSTEM.md](./md/DESIGN_SYSTEM.md)** - Design tokens and system
- **[MOTION_SYSTEM.md](./md/MOTION_SYSTEM.md)** - Animation presets

---

## 🔌 API Integration

### Base Configuration

```typescript
// src/api/client.ts
import axios from 'axios';

const client = axios.create({
  baseURL: process.env.VITE_API_URL || 'https://api.truetrace.dev',
  timeout: 10000,
});

// Auth interceptor
client.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
```

### Available Hooks

```typescript
// Verification
const { data, isLoading, error } = useVerifyText(text);
const { mutate: verify } = useVerifyUrl(url);

// Reports
const { data: reports } = useGetReports();
const { mutate: createReport } = useCreateReport();

// Analytics
const { data: metrics } = useGetAnalyticsMetrics(dateRange);
```

### Environment Variables

```bash
# .env.local
VITE_API_URL=https://api.truetrace.dev
VITE_API_KEY=your_api_key_here
VITE_ENV=development
```

---

## 🎨 Components Guide

### Premium Components

#### Sheet Component
```tsx
import { Sheet } from '@/components/ui/PremiumComponents';

<Sheet
  isOpen={open}
  onClose={handleClose}
  title="Claim Details"
  description="Detailed claim information"
>
  <div>{/* Content */}</div>
</Sheet>
```

#### Tabs Component
```tsx
import { Tabs } from '@/components/ui/PremiumComponents';

<Tabs
  tabs={[
    { label: 'Overview', content: <Overview /> },
    { label: 'Details', content: <Details /> },
  ]}
/>
```

#### Charts
```tsx
import { NeonLineChart, NeonBarChart } from '@/components/ui/Charts';

<NeonLineChart
  data={data}
  name="Verification Trends"
  xKey="date"
  yKey="count"
/>

<NeonBarChart
  data={data}
  name="Claims by Category"
  xKey="category"
  yKey="volume"
/>
```

### Base UI Components

- **GlassCard** - Card with glass morphism
- **KPICard** - Key performance indicator card
- **Button** - Variants: primary, secondary, outline, ghost
- **Input** - Text input with validation
- **Badge** - Status badges with colors
- **Select** - Dropdown select
- **Table** - Sortable data table
- **Modal** - Dialog modal
- **Drawer** - Slide-out drawer
- **Toast** - Toast notifications
- **Skeleton** - Loading skeleton
- **Avatar** - User avatar
- **Breadcrumb** - Navigation breadcrumb

---

## 🔄 Workflow

### Feature Development

1. **Create Feature Branch**
   ```bash
   git checkout -b feature/feature-name
   ```

2. **Make Changes**
   - Update components/pages
   - Follow TypeScript best practices
   - Use existing design tokens

3. **Run Tests & Build**
   ```bash
   npm run build
   npx tsc --noEmit
   ```

4. **Commit Changes**
   ```bash
   git add .
   git commit -m "feat: description of changes"
   ```

5. **Push & Create PR**
   ```bash
   git push origin feature/feature-name
   ```

---

## 🤝 Contributing

### Code Style
- Follow TypeScript strict mode
- Use functional components with hooks
- Use Tailwind CSS for styling
- Follow component naming conventions
- Add JSDoc comments for complex functions

### Commit Messages
```
feat: add new feature
fix: fix bug
docs: update documentation
style: formatting changes
refactor: code restructuring
chore: build, deps, config
```

### Pull Request Process
1. Update documentation
2. Ensure all tests pass
3. Update CHANGELOG if needed
4. Request review from team
5. Merge when approved

---

## 📈 Performance

### Optimization Techniques
- ✅ Code splitting with Vite
- ✅ Lazy loading components
- ✅ Image optimization with blur-up
- ✅ React Query caching
- ✅ Lenis smooth scrolling (GPU-accelerated)
- ✅ CSS minification & tree-shaking
- ✅ Production bundle: 328 KB gzipped

### Lighthouse Score Targets
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

---

## 🐛 Troubleshooting

### Common Issues

**Port already in use**
```bash
npm run dev -- --port 3000
```

**Module not found**
```bash
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors**
```bash
npx tsc --noEmit
# Fix type errors shown
```

**Build size warning**
- Normal for this app size
- Can be optimized with dynamic imports if needed

---

## 📞 Support & Resources

### Documentation
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)

### Libraries
- [Lenis Documentation](https://lenis.studiofreight.com/)
- [Radix UI Components](https://www.radix-ui.com/)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [React Query Docs](https://tanstack.com/query/latest)
- [Recharts Examples](https://recharts.org/examples)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Authors & Contributors

**TrueTrace Development Team**

### Key Contributors
- Frontend Architecture
- Premium Component Library
- API Integration Layer
- Documentation

---

## 🎯 Roadmap

### Q1 2025
- [ ] Complete remaining page updates
- [ ] Mobile responsive optimization
- [ ] Performance benchmarking

### Q2 2025
- [ ] Advanced filtering & search
- [ ] Real-time notifications
- [ ] Export functionality (PDF, CSV)

### Q3 2025
- [ ] Mobile app (React Native)
- [ ] AI-powered insights
- [ ] Collaboration features

---

## 📊 Project Status

| Component | Status | Version |
|-----------|--------|---------|
| React | ✅ Production | 18+ |
| TypeScript | ✅ Production | 5+ |
| Vite | ✅ Production | Latest |
| Tailwind CSS | ✅ Production | 3+ |
| Lenis | ✅ Integrated | 1.0+ |
| React Query | ✅ Integrated | 5.0+ |
| Recharts | ✅ Integrated | 2.10+ |
| Build | ✅ Successful | 13.2s |

---

## 🚀 Let's Build Something Amazing!

For questions or feedback, feel free to open an issue or reach out to the development team.

**Happy Coding!** 💻✨
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/f7f896d8-4615-4651-8a03-3a92ababf18c) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
