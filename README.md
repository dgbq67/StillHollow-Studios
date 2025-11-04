# KPR VERSE Clone

A 1:1 replica of kprverse.com featuring custom cursor effects, parallax scrolling, terminal-style animations, and cyberpunk aesthetic.

## Features Implemented

### ✅ Core Features
- **Custom Cursor System**: Interactive cursor with hover states, click animations, and mobile responsiveness
- **Parallax Scrolling**: Multi-layer parallax effects with smooth performance optimization
- **Terminal Text Component**: Typewriter effect with blinking cursor animation
- **Loading Screen**: Terminal-style loading with progress indicators
- **Responsive Navigation**: Desktop navigation with mobile hamburger menu

### ✅ Visual Effects
- **Hero Section**: Full-screen hero with parallax background and terminal animations
- **Story Section**: Interactive narrative section with chapter-based content
- **Terminal Aesthetic**: Cyberpunk/terminal design throughout
- **Smooth Animations**: CSS transitions and keyframe animations
- **Grid Overlays**: Background grid patterns with parallax movement

### ✅ Technical Implementation
- **Next.js 14**: Modern React framework with App Router
- **TypeScript**: Type-safe development
- **Responsive Design**: Mobile-first approach with breakpoints
- **Performance Optimized**: RequestAnimationFrame, intersection observers
- **Accessibility**: ARIA labels, keyboard navigation, reduced motion support

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles import
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Homepage
│   ├── error.tsx         # Error page
│   └── not-found.tsx     # 404 page
├── components/
│   ├── layout/           # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   ├── LoadingScreen.tsx
│   │   └── Layout.tsx
│   ├── ui/               # UI components
│   │   ├── CustomCursor.tsx
│   │   ├── TerminalText.tsx
│   │   └── ParallaxLayer.tsx
│   └── sections/         # Page sections
│       ├── Hero.tsx
│       └── Story.tsx
├── styles/               # CSS styles
│   ├── globals.css
│   ├── components/
│   └── sections/
├── hooks/                # React hooks
│   ├── useCursor.ts
│   └── useParallax.ts
└── utils/                # Utility functions
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd StillHollow-Studios
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Key Components

### CustomCursor
- Real-time mouse tracking with smooth following motion
- Multiple cursor states (default, hover, click, text)
- Pulse animation on click
- Automatically hidden on touch devices

### TerminalText
- Typewriter effect with character-by-character display
- Blinking cursor animation
- Variable typing speeds for realistic effect
- Staggered animations for multiple text lines

### ParallaxLayer
- Multi-layer parallax with different scroll speeds
- Performance optimized with requestAnimationFrame
- Intersection Observer for viewport detection
- Responsive to scroll position with easing functions

### Navigation
- Desktop horizontal navigation with hover effects
- Mobile hamburger menu with slide-in animation
- Smooth scroll behavior
- Active state indicators

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance Features

- **Scroll Throttling**: Optimized scroll event handling
- **Intersection Observer**: Efficient viewport detection
- **RequestAnimationFrame**: Smooth 60fps animations
- **CSS Transforms**: GPU-accelerated animations
- **Will-change Property**: Optimized rendering hints

## Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Reduced motion preferences
- Screen reader compatibility

## Deployment

The application is configured for deployment on Vercel but can be deployed to any platform that supports Next.js.

### Environment Variables
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Original Website

This is a clone of [kprverse.com](https://kprverse.com) - a 3D/NFT portfolio website featuring the Keepers narrative and cyberpunk aesthetic.

## License

This project is for educational and demonstration purposes.