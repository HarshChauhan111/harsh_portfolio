# 🚀 Quick Installation Commands

## Windows PowerShell

### Option 1: Run Installation Script (Recommended)
```powershell
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
.\install.ps1
```

### Option 2: Manual Installation
```powershell
# Clean previous installation (if any)
Remove-Item -Path "node_modules" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "package-lock.json" -Force -ErrorAction SilentlyContinue

# Clean npm cache
npm cache clean --force

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev
```

### Option 3: If npm is having issues
```powershell
# Try with yarn instead
npm install -g yarn
yarn install
yarn dev
```

## macOS/Linux

### Terminal Commands
```bash
# Clean installation
rm -rf node_modules package-lock.json

# Clean cache
npm cache clean --force

# Install
npm install --legacy-peer-deps

# Run
npm run dev
```

## Troubleshooting Commands

### If port 3000 is in use
```bash
npm run dev -- -p 3001
```

### Check Node.js version
```bash
node --version
# Should be 18.x or higher
```

### Update Node.js (if needed)
Download from: https://nodejs.org/

### If you get permission errors (macOS/Linux)
```bash
sudo chown -R $(whoami) ~/.npm
```

### Force clean everything and reinstall
```bash
rm -rf node_modules package-lock.json .next
npm cache clean --force
npm install --legacy-peer-deps
```

## After Successful Installation

### Start development server
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

### Start production server
```bash
npm start
```

### Run linting
```bash
npm run lint
```

## Environment Setup (Optional)

### Create .env.local file
```bash
# Copy the example file
cp .env.example .env.local

# Edit with your favorite editor
notepad .env.local  # Windows
nano .env.local     # macOS/Linux
```

### Add your EmailJS credentials
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## Deployment Commands

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel
```

### Deploy to Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Build
npm run build

# Deploy
netlify deploy --prod
```

## Git Commands (Optional)

### Initialize repository
```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

### Push to GitHub
```bash
# Create repo on GitHub first, then:
git remote add origin https://github.com/yourusername/portfolio.git
git branch -M main
git push -u origin main
```

## Common Issues & Fixes

### Issue: "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

### Issue: "Port already in use"
```bash
# Kill the process on port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Kill the process on port 3000 (macOS/Linux)
lsof -ti:3000 | xargs kill -9
```

### Issue: TypeScript errors
```bash
# These will resolve after npm install
# If persisting, try:
rm -rf .next
npm run dev
```

### Issue: Slow npm install
```bash
# Try yarn instead
npm install -g yarn
yarn install
```

## Success Indicators

After running `npm run dev`, you should see:
```
> harsh-portfolio@0.1.0 dev
> next dev

  ▲ Next.js 15.1.0
  - Local:        http://localhost:3000
  - Environments: .env.local

 ✓ Starting...
 ✓ Ready in 2.5s
```

Then open: http://localhost:3000

## Need More Help?

- Read: `README.md` - Full documentation
- Read: `QUICK_START.md` - Getting started guide
- Read: `CUSTOMIZATION.md` - How to customize
- Read: `ENV_SETUP.md` - Environment variables
- Read: `PROJECT_SUMMARY.md` - Complete overview

---

🎉 Happy coding!
