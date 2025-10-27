# 📸 Image Setup Instructions

## Profile Image for Home Page

Your portfolio now uses an image instead of the letter "H". Here's how to add your profile picture:

### Step 1: Prepare Your Image

1. **Choose a professional photo**
   - Headshot or professional portrait
   - Clear, well-lit image
   - Square aspect ratio works best (1:1)

2. **Optimize the image**
   - Recommended size: 800x800px or larger
   - Format: JPG, PNG, or WebP
   - Keep file size under 500KB for best performance

### Step 2: Add Your Image to the Project

#### Option A: Place in public folder (Recommended)

1. Save your image as `profile.jpg` (or `profile.png`)
2. Place it directly in the `public` folder:
   ```
   harsh_portfolio/
   └── public/
       └── profile.jpg  ← Your image here
   ```

#### Option B: Use a different name

If you want to use a different filename:

1. Place your image in `public/` folder (e.g., `public/harsh-photo.jpg`)
2. Update `components/sections/Home.tsx` line ~107:
   ```tsx
   <Image 
     src="/harsh-photo.jpg"  // Change this to your filename
     alt="Harsh - Mobile Application Developer"
     ...
   />
   ```

### Step 3: Verify

After adding your image, the Home section will display your actual photo instead of the placeholder.

## Resume/CV File

Your portfolio includes a "Download Resume" button. Add your resume:

### Step 1: Prepare Resume

1. **Create/Export your resume as PDF**
   - Professional format
   - Include all relevant experience
   - Keep it 1-2 pages

2. **Name the file**: `resume.pdf`

### Step 2: Add to Project

1. Place `resume.pdf` in the `public` folder:
   ```
   harsh_portfolio/
   └── public/
       ├── profile.jpg    ← Your photo
       └── resume.pdf     ← Your resume
   ```

### Step 3: Test Download

Click the "Download Resume" button in the Home section to verify it works.

## Troubleshooting

### Image not showing?
- ✅ Ensure filename matches exactly (case-sensitive)
- ✅ Image is in `public/` folder, not `public/images/`
- ✅ Try refreshing the browser (Ctrl+F5)
- ✅ Check browser console for errors

### Resume not downloading?
- ✅ File is named exactly `resume.pdf`
- ✅ File is in `public/` folder
- ✅ Try clearing browser cache

### Using external URL?

If you want to host images/resume elsewhere:

**For Image:**
```tsx
<Image 
  src="https://your-url.com/image.jpg"
  alt="Your Name"
  width={320}
  height={320}
  className="w-full h-full object-cover"
/>
```

**For Resume:**
```tsx
<motion.a
  href="https://your-url.com/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  ...
```

## Quick Setup Checklist

- [ ] Add `public/profile.jpg` (your photo)
- [ ] Add `public/resume.pdf` (your CV)
- [ ] Test the website to verify both work
- [ ] Optimize images for web

---

**Note:** Until you add your actual image, you might see a broken image icon or error. This is expected - just add your `profile.jpg` to fix it!
