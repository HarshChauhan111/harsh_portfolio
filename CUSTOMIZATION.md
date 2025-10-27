# 🎨 Portfolio Customization Guide

## Step-by-Step Personalization

### 1. Update Personal Information

#### Home Section (`components/sections/Home.tsx`)

Find and replace:
```typescript
// Line ~40
<h1 className="...">Harsh</h1>
// Change "Harsh" to your name

// Line ~50
<h2 className="...">Mobile Application Developer</h2>
// Change to your title

// Line ~58
<p className="...">
  Crafting beautiful, performant, and user-friendly mobile applications...
</p>
// Update with your personal tagline
```

#### Profile Image
```typescript
// Option 1: Use a placeholder color with initial
<div className="...">H</div>
// Change "H" to your initial

// Option 2: Add your actual image
// 1. Add image to public/images/profile.jpg
// 2. Replace the div with:
<Image 
  src="/images/profile.jpg" 
  alt="Your Name"
  width={320}
  height={320}
  className="rounded-full object-cover"
/>
```

### 2. Update Skills (`components/sections/Skills.tsx`)

Modify the `skillCategories` array starting at line 7:

```typescript
const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Your Language', icon: Icon, level: 95 },
      // Add or remove skills as needed
    ]
  },
  // Add more categories
];
```

**Available Icons:**
- Import from `react-icons/si` for tech brands
- Import from `react-icons/fa` for general icons

### 3. Add Your Projects (`components/sections/Projects.tsx`)

Update the `projects` array starting at line 7:

```typescript
const projects = [
  {
    title: 'Your Project Name',
    description: 'Brief description of your project',
    tech: ['Tech1', 'Tech2', 'Tech3'],
    icons: [IconComponent1, IconComponent2],
    github: 'https://github.com/username/repo',
    live: 'https://your-app-link.com', // or null
    color: 'from-blue-500 to-cyan-500'
  },
  // Add more projects
];
```

**Color Gradients Available:**
- `from-purple-500 to-pink-500`
- `from-blue-500 to-cyan-500`
- `from-green-500 to-emerald-500`
- `from-orange-500 to-red-500`
- `from-indigo-500 to-purple-500`

### 4. Update Work Experience (`components/sections/Experience.tsx`)

Modify the `experiences` array starting at line 6:

```typescript
const experiences = [
  {
    company: 'Your Company',
    role: 'Your Position',
    duration: 'Start - End',
    location: 'City, Country or Remote',
    responsibilities: [
      'Achievement or responsibility 1',
      'Achievement or responsibility 2',
      // Add 3-5 bullet points
    ],
    color: 'from-purple-500 to-pink-500'
  },
  // Add more experiences
];
```

### 5. Add Certifications (`components/sections/Achievements.tsx`)

Update the `achievements` array starting at line 6:

```typescript
const achievements = [
  {
    icon: FaTrophy, // or FaCertificate, FaStar, FaAward
    title: 'Certification or Award Name',
    issuer: 'Issuing Organization',
    date: 'Year',
    description: 'Brief description of the achievement',
    color: 'from-yellow-500 to-orange-500'
  },
  // Add more achievements
];
```

### 6. Update Contact Information (`components/sections/Contact.tsx`)

Modify `contactInfo` array starting at line 8:

```typescript
const contactInfo = [
  {
    icon: FaPhone,
    label: 'Phone',
    value: '+1 (555) 123-4567', // Your phone
    link: 'tel:+15551234567'
  },
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'your@email.com', // Your email
    link: 'mailto:your@email.com'
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/yourprofile', // Your LinkedIn
    link: 'https://linkedin.com/in/yourprofile'
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/yourusername', // Your GitHub
    link: 'https://github.com/yourusername'
  },
];
```

### 7. Update Footer (`components/Footer.tsx`)

Modify `socialLinks` array starting at line 7:

```typescript
const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/yourusername', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
  { icon: FaTwitter, href: 'https://twitter.com/yourhandle', label: 'Twitter' },
  { icon: FaEnvelope, href: 'mailto:your@email.com', label: 'Email' },
];
```

Update the description (line ~35):
```typescript
<p className="...">
  Your brief professional description here
</p>
```

### 8. Update Meta Tags (`app/layout.tsx`)

Modify metadata starting at line 9:

```typescript
export const metadata: Metadata = {
  title: "Your Name - Mobile Application Developer",
  description: "Your professional description and expertise",
  keywords: ["Your", "Keywords", "Here"],
};
```

### 9. Setup EmailJS Integration

1. **Create EmailJS Account:**
   - Go to https://www.emailjs.com/
   - Sign up for free
   - Create a service (Gmail, Outlook, etc.)
   - Create an email template

2. **Get Credentials:**
   - Service ID
   - Template ID
   - Public Key

3. **Update Contact Form** (`components/sections/Contact.tsx`):

Find the `handleSubmit` function around line 51 and replace:

```typescript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',      // Replace with your service ID
      'YOUR_TEMPLATE_ID',     // Replace with your template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      'YOUR_PUBLIC_KEY'       // Replace with your public key
    );
    
    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
  } catch (error) {
    console.error('Email error:', error);
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus('idle'), 3000);
  }
};
```

### 10. Customize Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: {
    // Change these values for different primary colors
    500: '#0ea5e9',
    600: '#0284c7',
    // etc.
  },
}
```

Or modify gradient backgrounds:
```typescript
backgroundImage: {
  'gradient-primary': 'linear-gradient(135deg, #YOUR_COLOR1 0%, #YOUR_COLOR2 100%)',
}
```

### 11. Add Custom Animations

In `tailwind.config.ts`, add custom animations:

```typescript
animation: {
  'your-animation': 'yourAnimation 2s ease-in-out infinite',
},
keyframes: {
  yourAnimation: {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-20px)' },
  },
}
```

## 🎯 Quick Reference

### File Locations
- Personal Info: `components/sections/`
- Styles: `app/globals.css` and `tailwind.config.ts`
- Configuration: `app/layout.tsx`
- Images: `public/` folder

### Icon Libraries
```typescript
// Tech icons
import { SiFlutter, SiReact, ... } from 'react-icons/si';

// General icons  
import { FaStar, FaCode, ... } from 'react-icons/fa';
```

Browse icons at: https://react-icons.github.io/react-icons/

### Color Classes
- Text: `text-purple-400`, `text-blue-500`
- Background: `bg-gradient-primary`
- Effects: `shadow-glow`, `glow-text`

## 💡 Pro Tips

1. **Keep it Simple**: Don't overcrowd sections
2. **Be Specific**: Use concrete achievements and metrics
3. **Update Regularly**: Add new projects and skills
4. **Test Mobile**: Check responsiveness on phone
5. **Optimize Images**: Use WebP format, compress images
6. **SEO**: Update meta tags and descriptions

Need help? Check the README.md or create an issue!
