# Environment Variables Configuration

## 📧 EmailJS Setup (Optional but Recommended)

### Step 1: Create EmailJS Account
1. Visit https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

### Step 2: Add Email Service
1. Go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the connection steps
5. Copy your **Service ID**

### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

4. Save and copy your **Template ID**

### Step 4: Get Public Key
1. Go to "Account" > "General"
2. Find your **Public Key**

### Step 5: Create Environment File

Create a `.env.local` file in the root directory:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### Step 6: Update Contact Component

In `components/sections/Contact.tsx`, replace the handleSubmit function:

```typescript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const result = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );

    console.log('Email sent successfully:', result);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
  } catch (error) {
    console.error('Email sending failed:', error);
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus('idle'), 3000);
  }
};
```

## 🔒 Security Notes

- Never commit `.env.local` to Git (it's already in `.gitignore`)
- Keep your EmailJS keys private
- For production deployment, add environment variables in your hosting platform

## 🌐 Deployment Environment Variables

### Vercel
1. Go to Project Settings > Environment Variables
2. Add your EmailJS variables:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

### Netlify
1. Go to Site Settings > Build & Deploy > Environment
2. Add the same variables

### Other Platforms
Check your hosting provider's documentation for adding environment variables.

## 📊 Optional: Analytics Setup

### Google Analytics

1. Create a GA4 property at https://analytics.google.com/
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add to `.env.local`:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

4. Create `lib/analytics.ts`:

```typescript
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};
```

5. Add to `app/layout.tsx` in the `<head>`:

```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_TRACKING_ID}');
  `}
</Script>
```

## 🎨 Optional: Custom Domain

When you have a custom domain:

1. Add to `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

2. Use in metadata:
```typescript
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  // ... other metadata
};
```

## 📝 Example .env.local File

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc1234
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz5678
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here

# Google Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Site Configuration (Optional)
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_NAME=Your Name Portfolio
```

## ✅ Testing

After configuration:

1. Start the dev server: `npm run dev`
2. Navigate to the Contact section
3. Fill out and submit the form
4. Check your email inbox
5. Verify the email was received

## 🚨 Troubleshooting

### Email not sending?
- Check browser console for errors
- Verify all environment variables are set correctly
- Ensure EmailJS service is active
- Check EmailJS dashboard for failed sends
- Verify email template is correctly configured

### Environment variables not working?
- Restart the dev server after adding `.env.local`
- Ensure variables start with `NEXT_PUBLIC_`
- Check for typos in variable names

### Still having issues?
- Check EmailJS documentation: https://www.emailjs.com/docs/
- Review Next.js environment variables: https://nextjs.org/docs/basic-features/environment-variables

---

**Remember:** Environment variables with `NEXT_PUBLIC_` prefix are exposed to the browser. Never use this prefix for sensitive API keys that should stay on the server.
