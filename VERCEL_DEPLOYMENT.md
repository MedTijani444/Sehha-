# Deploy Sehha+ Medical Platform to Vercel (FREE)

## 🚀 Simple 3-Step Deployment

### Step 1: Prepare Your Code
```bash
# Download all project files from Replit
# Save them to your computer in a folder called "sehha-medical"
```

### Step 2: Upload to GitHub
1. Create new repository at [github.com](https://github.com/new)
2. Name it `sehha-medical-platform`
3. Upload all your project files
4. Commit changes

### Step 3: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com/new)
2. Sign up with GitHub (free)
3. Click "Import" next to your repository
4. Click "Deploy" (Vercel auto-detects everything)

## ⚙️ Required Environment Variables

Add these in Vercel Dashboard → Settings → Environment Variables:

```
SUPABASE_DATABASE_URL=your_supabase_connection_string
GROQ_API_KEY=your_groq_api_key
OPENAI_API_KEY=your_openai_key (optional)
NODE_ENV=production
```

## 🌐 Your Live Website

After deployment: `https://sehha-medical-platform.vercel.app`

## ✅ What Works on Vercel

- AI Medical Consultations (French language)
- Doctor Search for Morocco
- Health Passport with QR codes
- Anonymous Mental Health Chat
- PDF Medical Reports
- Real-time Database
- Automatic HTTPS
- Global CDN

## 💰 Cost: 100% FREE

- No credit card required
- Unlimited deployments
- Custom domains included
- Serverless functions included

## 🔧 Alternative: Direct Upload

If you prefer not using GitHub:
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project folder
3. Follow the prompts

Your medical platform will be live in under 5 minutes!