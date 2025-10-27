# Harsh's Portfolio - Quick Start Guide

## 🎯 Quick Installation

### Option 1: Automated Installation (Recommended)
```powershell
.\install.ps1
```

### Option 2: Manual Installation
```bash
# Clean cache
npm cache clean --force

# Install with legacy peer deps (handles React version compatibility)
npm install --legacy-peer-deps

# Start development server
npm run dev
```

## 🔧 Troubleshooting

### If npm install fails:

1. **Check Node.js version:**
   ```bash
   node --version  # Should be 18.x or higher
   ```

2. **Try alternative installation:**
   ```bash
   npm install --force
   ```

3. **Or use yarn:**
   ```bash
   yarn install
   ```

### Common Issues:

**Issue: "Cannot find module"**
- Solution: Delete `node_modules` and `package-lock.json`, then run `npm install --legacy-peer-deps`

**Issue: Port 3000 already in use**
- Solution: Use a different port:
  ```bash
  npm run dev -- -p 3001
  ```

**Issue: TypeScript errors**
- Solution: These are expected before dependencies are installed. They will disappear after `npm install`

## 📝 Customization Checklist

Before deploying, update these files:

- [ ] `components/sections/Home.tsx` - Your name and intro
- [ ] `components/sections/Skills.tsx` - Your skills
- [ ] `components/sections/Projects.tsx` - Your projects
- [ ] `components/sections/Experience.tsx` - Your work history
- [ ] `components/sections/Achievements.tsx` - Your certifications
- [ ] `components/sections/Contact.tsx` - Your contact info
- [ ] `components/Footer.tsx` - Social media links
- [ ] `app/layout.tsx` - Meta tags and title

## 🎨 Optional Enhancements

### Add Real Profile Image:
1. Place your image in `public/images/profile.jpg`
2. Update `components/sections/Home.tsx`:
   ```tsx
   <Image 
     src="/images/profile.jpg"
     alt="Your Name"
     width={320}
     height={320}
   />
   ```

### Setup EmailJS:
1. Create account at https://www.emailjs.com/
2. Get your credentials
3. Update `components/sections/Contact.tsx`

### Add Google Analytics:
1. Get GA tracking ID
2. Add to `app/layout.tsx`

## 🚀 Deployment

### Deploy to Vercel:
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify:
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=.next
```

## 📱 Development Tips

- Hot reload is enabled - changes appear instantly
- Press `Ctrl+C` to stop the dev server
- Use browser DevTools for debugging
- Check console for any warnings/errors

## 🎬 Features Implemented

✅ Dark theme with gradients
✅ 3D particle background
✅ Smooth page transitions
✅ No-scroll routing
✅ Responsive design
✅ Interactive animations
✅ Contact form
✅ Project showcase
✅ Skills categorization
✅ Experience timeline
✅ Achievement badges
✅ Social media links

Enjoy your new portfolio! 🎉
