# 📁 Project Structure Visualization

```
harsh_portfolio/
│
├── 📄 Configuration Files
│   ├── package.json              ← Dependencies and scripts
│   ├── tsconfig.json             ← TypeScript configuration
│   ├── tailwind.config.ts        ← Tailwind CSS + custom theme
│   ├── postcss.config.mjs        ← PostCSS configuration
│   ├── next.config.ts            ← Next.js configuration
│   ├── .eslintrc.json            ← ESLint rules
│   └── .gitignore                ← Git ignore patterns
│
├── 📚 Documentation Files
│   ├── README.md                 ← Main documentation
│   ├── QUICK_START.md            ← Quick installation guide
│   ├── CUSTOMIZATION.md          ← Personalization guide
│   ├── ENV_SETUP.md              ← Environment variables
│   ├── COMMANDS.md               ← Command reference
│   ├── PROJECT_SUMMARY.md        ← Complete overview
│   ├── STRUCTURE.md              ← This file
│   └── .env.example              ← Environment template
│
├── 🔧 Scripts
│   └── install.ps1               ← Automated installation
│
├── 📱 app/ (Next.js App Router)
│   ├── layout.tsx                ← Root layout with Header/Footer
│   │                               - Metadata configuration
│   │                               - Global providers
│   │                               - Persistent layout
│   │
│   ├── page.tsx                  ← Main page
│   │                               - Section routing logic
│   │                               - Page transitions
│   │                               - Active section state
│   │
│   └── globals.css               ← Global styles
│                                   - Tailwind directives
│                                   - Custom animations
│                                   - Utility classes
│                                   - Glow effects
│
├── 🧩 components/
│   │
│   ├── 🎯 Core Components
│   │   ├── Header.tsx            ← Navigation header
│   │   │                           - Desktop/mobile nav
│   │   │                           - Section navigation
│   │   │                           - Animated menu
│   │   │
│   │   ├── Footer.tsx            ← Page footer
│   │   │                           - Quick links
│   │   │                           - Social icons
│   │   │                           - Copyright
│   │   │
│   │   ├── LoadingScreen.tsx     ← Loading animation
│   │   │                           - Spinner animation
│   │   │                           - Logo display
│   │   │                           - Auto-hide
│   │   │
│   │   ├── BackToTop.tsx         ← Scroll to top button
│   │   │                           - Floating button
│   │   │                           - Smooth scroll
│   │   │
│   │   └── ThreeBackground.tsx   ← 3D background
│   │                               - Particle system
│   │                               - Three.js canvas
│   │                               - Responsive
│   │
│   └── 📄 sections/
│       │
│       ├── Home.tsx              ← Hero section
│       │                           - Name & title
│       │                           - Profile image
│       │                           - CTA buttons
│       │                           - Tagline
│       │
│       ├── Skills.tsx            ← Skills showcase
│       │                           - 6 categories
│       │                           - Progress bars
│       │                           - Tech icons
│       │                           - Animated cards
│       │
│       ├── Projects.tsx          ← Project portfolio
│       │                           - 6 sample projects
│       │                           - Tech stack badges
│       │                           - GitHub links
│       │                           - Live demo links
│       │                           - Hover effects
│       │
│       ├── Experience.tsx        ← Work timeline
│       │                           - 3 experiences
│       │                           - Timeline design
│       │                           - Responsibilities
│       │                           - Company info
│       │
│       ├── Achievements.tsx      ← Certifications
│       │                           - 6 achievements
│       │                           - Rotating icons
│       │                           - Issue dates
│       │                           - Descriptions
│       │
│       └── Contact.tsx           ← Contact form
│                                   - Form validation
│                                   - EmailJS ready
│                                   - Contact info
│                                   - Social links
│
├── 🎨 public/ (Static Assets)
│   └── (Place your images here)
│       - favicon.ico
│       - images/
│       - icons/
│
└── 📦 node_modules/ (After installation)
    └── (Dependencies installed here)
```

## 🔄 Data Flow

```
User Interaction
      ↓
Navigation Click (Header/Footer)
      ↓
Custom Event Dispatched
      ↓
app/page.tsx Receives Event
      ↓
Active Section State Updates
      ↓
Framer Motion Transition
      ↓
New Section Component Renders
```

## 🎨 Styling Architecture

```
Tailwind CSS (tailwind.config.ts)
      ↓
Custom Theme Extensions
      ├── Colors (primary, dark)
      ├── Gradients (gradient-primary, etc.)
      ├── Animations (float, glow, etc.)
      └── Shadows (shadow-glow, etc.)
      ↓
Global CSS (app/globals.css)
      ├── Tailwind Directives
      ├── Custom Classes (.glow-text, .glass-effect)
      └── Utility Classes
      ↓
Component Classes
      └── Applied via className prop
```

## 🔗 Component Relationships

```
app/layout.tsx (Root)
    │
    ├── Header
    │   └── Navigation Items
    │       └── Dispatch Navigation Events
    │
    ├── ThreeBackground
    │   └── Particle System
    │
    ├── app/page.tsx (Main)
    │   └── Active Section
    │       ├── Home
    │       ├── Skills
    │       ├── Projects
    │       ├── Experience
    │       ├── Achievements
    │       └── Contact
    │
    ├── Footer
    │   ├── Quick Links
    │   └── Social Icons
    │
    └── BackToTop
```

## 📊 State Management

```
No Global State Library (lightweight)

Local State in Components:
├── app/page.tsx
│   └── activeSection (number)
│
├── Header.tsx
│   └── isOpen (boolean) - mobile menu
│
├── LoadingScreen.tsx
│   └── isLoading (boolean)
│
├── BackToTop.tsx
│   └── isVisible (boolean)
│
└── Contact.tsx
    ├── formData (object)
    ├── isSubmitting (boolean)
    └── submitStatus (string)

Custom Events:
└── navigateToSection
    - Dispatched from Header/Footer
    - Listened by app/page.tsx
    - Triggers section changes
```

## 🎯 Key Features by File

### app/layout.tsx
- ✓ Meta tags & SEO
- ✓ Global layout structure
- ✓ Persistent header/footer
- ✓ 3D background
- ✓ Loading screen

### app/page.tsx
- ✓ No-scroll routing
- ✓ Section transitions
- ✓ Event handling
- ✓ Animation orchestration

### components/Header.tsx
- ✓ Desktop navigation
- ✓ Mobile menu
- ✓ Smooth animations
- ✓ Section navigation

### components/Footer.tsx
- ✓ Social media links
- ✓ Quick navigation
- ✓ Copyright info
- ✓ Glowing effects

### components/ThreeBackground.tsx
- ✓ 3D particles
- ✓ Responsive canvas
- ✓ Performance optimized
- ✓ Auto-resize

### sections/Home.tsx
- ✓ Hero content
- ✓ CTA buttons
- ✓ Floating animations
- ✓ Profile display

### sections/Skills.tsx
- ✓ 6 skill categories
- ✓ Progress bars
- ✓ Icon integration
- ✓ Stagger animations

### sections/Projects.tsx
- ✓ Project cards
- ✓ Tech stack display
- ✓ External links
- ✓ Hover effects

### sections/Experience.tsx
- ✓ Timeline layout
- ✓ Alternating design
- ✓ Company details
- ✓ Responsibilities

### sections/Achievements.tsx
- ✓ Badge display
- ✓ Rotating animations
- ✓ Certificate info
- ✓ Grid layout

### sections/Contact.tsx
- ✓ Form validation
- ✓ EmailJS integration
- ✓ Contact details
- ✓ Success/error states

## 🛠️ Technology Stack Breakdown

```
Frontend Framework
└── Next.js 15
    ├── App Router
    ├── Server Components
    └── Client Components

Language
└── TypeScript
    ├── Type Safety
    └── Better DX

Styling
└── Tailwind CSS
    ├── Utility Classes
    ├── Custom Theme
    └── Responsive Design

Animations
├── Framer Motion
│   ├── Page Transitions
│   ├── Component Animations
│   └── Gesture Handling
│
└── Custom CSS
    ├── Keyframe Animations
    └── Transitions

3D Graphics
└── Three.js
    ├── React Three Fiber
    ├── React Three Drei
    └── WebGL

Icons
└── React Icons
    ├── Font Awesome
    └── Simple Icons

Form Handling
└── EmailJS
    └── Email Service
```

## 📦 Dependencies Overview

### Production Dependencies
- react, react-dom
- next
- @emailjs/browser
- @react-three/fiber
- @react-three/drei
- three
- framer-motion
- react-icons
- react-intersection-observer

### Development Dependencies
- typescript
- @types/node
- @types/react
- @types/react-dom
- @types/three
- tailwindcss
- postcss
- autoprefixer
- eslint
- eslint-config-next

## 🎨 Custom Tailwind Classes

### Utility Classes
- `.glow-text` - Glowing text effect
- `.glow-box` - Glowing box shadow
- `.glass-effect` - Glass morphism
- `.gradient-border` - Gradient border
- `.gradient-border-content` - Content inside gradient border

### Background Gradients
- `bg-gradient-primary` - Purple to pink
- `bg-gradient-secondary` - Pink to red
- `bg-gradient-dark` - Dark blue gradient

### Animations
- `animate-float` - Floating motion
- `animate-glow` - Pulsing glow
- `animate-slide-up` - Slide up entrance
- `animate-slide-down` - Slide down entrance
- `animate-fade-in` - Fade in entrance

## 🔍 File Sizes (Approximate)

```
Component Files:        ~3-8 KB each
Configuration Files:    ~1-3 KB each
Documentation Files:    ~5-20 KB each
Total Project Size:     ~100 KB (without node_modules)
With Dependencies:      ~500 MB (after npm install)
```

## 🚀 Build Output

After `npm run build`:
```
.next/
├── cache/              ← Build cache
├── server/             ← Server bundle
├── static/             ← Static assets
└── ... other files
```

---

This structure provides a clear, organized, and maintainable portfolio website! 🎉
