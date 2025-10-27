# 🚀 Modern Portfolio Website for Mobile Application Developer

A stunning, dark-themed portfolio website featuring immersive 3D animations, smooth transitions, and a no-scroll routing design built with Next.js, Three.js, and Framer Motion.

## ✨ Features

- 🎨 **Sleek Dark Theme** with gradient tones and glowing effects
- 🌟 **3D Animations** powered by Three.js
- 🎭 **Smooth Transitions** using Framer Motion
- 📱 **Fully Responsive** design for all devices
- 🔄 **No-Scroll Routing** with seamless page transitions
- 💫 **Interactive Components** with hover effects and animations
- 📧 **Working Contact Form** ready for EmailJS integration
- ⚡ **Optimized Performance** with Next.js

## 🛠️ Tech Stack

- **Framework:** Next.js 15 with TypeScript
- **Styling:** Tailwind CSS with custom animations
- **Animations:** Framer Motion
- **3D Graphics:** Three.js with React Three Fiber
- **Icons:** React Icons
- **Form Handling:** EmailJS (ready to configure)

## 📦 Installation

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Setup Steps

1. **Clone or navigate to the project directory:**
   ```bash
   cd harsh_portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

   If you encounter issues, try:
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Project Structure

```
harsh_portfolio/
├── app/
│   ├── layout.tsx          # Root layout with Header, Footer, 3D Background
│   ├── page.tsx            # Main page with section routing
│   └── globals.css         # Global styles and animations
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer with social links
│   ├── LoadingScreen.tsx   # Animated loading screen
│   ├── BackToTop.tsx       # Back to top button
│   ├── ThreeBackground.tsx # 3D particle background
│   └── sections/
│       ├── Home.tsx        # Hero section
│       ├── Skills.tsx      # Skills with categories
│       ├── Projects.tsx    # Project showcase
│       ├── Experience.tsx  # Work timeline
│       ├── Achievements.tsx # Certifications & awards
│       └── Contact.tsx     # Contact form
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies
```

## 🎨 Customization

### Personal Information

Update the following files with your information:

1. **components/sections/Home.tsx** - Name, title, tagline
2. **components/sections/Skills.tsx** - Your skills and expertise levels
3. **components/sections/Projects.tsx** - Your projects and links
4. **components/sections/Experience.tsx** - Work experience
5. **components/sections/Achievements.tsx** - Certifications and awards
6. **components/sections/Contact.tsx** - Contact information
7. **components/Footer.tsx** - Social media links

### EmailJS Configuration

To enable the contact form:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update `components/sections/Contact.tsx` with your:
   - Service ID
   - Template ID
   - Public Key

Example:
```typescript
import emailjs from '@emailjs/browser';

emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  formData,
  'YOUR_PUBLIC_KEY'
);
```

### Color Scheme

Modify colors in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Your primary colors
  },
  dark: {
    // Your dark theme colors
  }
}
```

### Add Your Profile Image

Replace the placeholder in `components/sections/Home.tsx`:

```tsx
<Image 
  src="/path/to/your-image.jpg"
  alt="Your Name"
  width={320}
  height={320}
  className="rounded-full"
/>
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your repository
4. Deploy with one click

### Other Platforms

The site can be deployed to:
- Netlify
- AWS Amplify
- GitHub Pages (with static export)
- Any Node.js hosting

## 📱 Sections Overview

### Home
- Hero section with name, title, and CTA buttons
- 3D floating avatar/profile image
- Gradient background effects

### Skills
Categorized skills display:
- **Languages:** Dart, Kotlin, Java, JavaScript, TypeScript, Python
- **Architecture:** MVVM, Clean Architecture, Bloc
- **Networking:** REST APIs, GraphQL, WebSockets
- **Databases:** Firebase, SQLite, Hive, Room DB
- **Frameworks:** Flutter, React Native, Jetpack Compose
- **Tools:** Git, Figma, Postman, Android Studio

### Projects
- Interactive project cards with 3D effects
- Tech stack badges
- GitHub and live demo links
- Hover animations

### Experience
- Animated timeline design
- Company, role, and duration
- Key responsibilities
- Glowing indicators

### Achievements
- Certifications and awards
- Animated badges
- Hover effects
- Issue dates

### Contact
- Working contact form
- Contact information with icons
- Social media links
- Form validation

## 🎬 Animations

The portfolio features:
- Smooth page transitions
- Floating animations
- Glow effects
- Parallax scrolling
- 3D particle background
- Hover interactions
- Loading animations

## 🔧 Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Support

For issues or questions:
- Create an issue in the repository
- Contact: harsh@example.com

## 🌟 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for utility-first styling
- Framer Motion for smooth animations
- Three.js for 3D graphics

---

Made with ❤️ by Harsh

**Happy Coding! 🚀**
