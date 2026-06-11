# PaxVision Quick Start Guide

## 🚀 Deploy Your Site in 30 Minutes (FREE)

Follow these steps to get PaxVision live on the internet **today** using only free services.

---

## Step 1: Create Free Accounts (5 minutes)

Open these in separate browser tabs:

1. **[Vercel](https://vercel.com)** - Frontend hosting (100GB free)
   - Sign up with GitHub
   - Confirm email

2. **[Neon.tech](https://neon.tech)** - Database (3GB free)
   - Sign up with GitHub
   - Confirm email

3. **[Cloudinary](https://cloudinary.com)** - Images (25GB free)
   - Sign up with email
   - Confirm email

4. **[SendGrid](https://sendgrid.com)** - Emails (100/day free)
   - Sign up with email
   - Confirm email

5. **[Railway](https://railway.app)** - Backend (optional, $5 free credits)
   - Sign up with GitHub

---

## Step 2: Deploy Frontend to Vercel (5 minutes)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New"** → **"Project"**
3. Click **"Import"** from Git
4. Select repository: `aceucav-coder/video-surveillance-shop`
5. Configure:
   ```
   Project Name: paxvision-frontend
   Framework: Next.js
   Root Directory: apps/frontend
   Build Command: npm run build
   Output Directory: .next
   Node.js Version: 18.x
   ```
6. Click **"Deploy"**

✅ **Your site will be live at: `https://paxvision-frontend.vercel.app`**

---

## Step 3: Set Up Database (5 minutes)

1. Go to [Neon Dashboard](https://console.neon.tech/)
2. Click **"New Project"**
3. Name: `paxvision-db`
4. Select region (e.g., `us-east-2`)
5. Click **"Create Project"**
6. Wait for database to initialize
7. Go to **Settings → Database**
8. Copy **Connection String** (looks like: `postgresql://user:pass@host/db?sslmode=require`)

---

## Step 4: Configure Backend (5 minutes)

1. Go to [Railway Dashboard](https://railway.app/dashboard)
2. Click **"New Project"**
3. Select **"Deploy from GitHub repo"**
4. Choose: `video-surveillance-shop`
5. Set root directory: `apps/backend`
6. Add environment variables (from your Neon connection string):
   ```bash
   DATABASE_URL=postgresql://user:pass@host/db?sslmode=require
   JWT_SECRET=generate-with-openssl-rand-hex-32
   PORT=4000
   NODE_ENV=production
   ```
7. Click **"Deploy"**

✅ **Your API will be live at: `https://your-project-name.up.railway.app`**

---

## Step 5: Configure Cloudinary (3 minutes)

1. Go to [Cloudinary Dashboard](https://cloudinary.com/console)
2. Go to **Settings → API Keys**
3. Copy:
   - Cloud Name
   - API Key
   - API Secret
4. Go to **Settings → Upload → Upload Presets**
5. Create preset: `paxvision-products`
   - Folder: `paxvision/products`
   - Allowed: jpg, png, webp, svg
   - Signing: Unsigned

---

## Step 6: Update Frontend Environment (2 minutes)

1. Go back to Vercel Dashboard
2. Select your project
3. Go to **Settings → Environment Variables**
4. Add these variables:
   ```bash
   NEXT_PUBLIC_API_URL=https://your-backend.up.railway.app
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
   ```
5. **Redeploy** your frontend

---

## Step 7: Test Your Live Site! (3 minutes)

Visit: `https://paxvision-frontend.vercel.app`

✅ **Check:**
- [ ] Homepage loads
- [ ] Products display
- [ ] Navigation works
- [ ] Cart functions
- [ ] Language switcher works

---

## 📋 Next Steps (After Deployment)

### Immediate (This Week)
1. **Upload Product Images**
   ```bash
   # Use Cloudinary CLI or dashboard to upload
   # Or implement the upload endpoint from DEPLOYMENT.md
   ```

2. **Add Real Products**
   - Update `apps/backend/prisma/seed.ts` with your products
   - Run: `npx prisma db seed`

3. **Set Up Admin Account**
   - Register as admin@paxvision.ua
   - Password: admin123 (change this!)

### This Month
1. **Set up SendGrid for emails** (from DEPLOYMENT.md)
2. **Create admin panel pages** (copy examples from DEPLOYMENT.md)
3. **Test checkout process**

### Next Month
1. **Add payment integration** (LiqPay or Privat24)
2. **Implement delivery options** (Nova Poshta)
3. **Set up CRM features** for staff

---

## 🎯 Key Files to Modify

### Frontend (`apps/frontend/`)
```
├── src/app/
│   ├── uk/           # Ukrainian pages
│   ├── ru/           # Russian pages
│   └── admin/        # CRM Admin Panel (CREATE THIS)
├── src/context/
│   ├── AuthContext.tsx    # User authentication
│   └── CartContext.tsx    # Shopping cart
├── src/lib/
│   └── api.ts         # API calls (CREATE THIS)
└── src/components/
    ├── layout/        # Header, Footer (already branded)
    └── ui/            # UI components
```

### Backend (`apps/backend/`)
```
├── src/
│   ├── app.ts         # Express server (UPDATE THIS)
│   └── config/        # Configuration files
└── prisma/
    ├── schema.prisma  # Database schema (COMPLETE)
    └── seed.ts        # Seed data (UPDATE THIS)
```

---

## 📚 Documentation

- **Full Deployment Guide**: [DEPLOYMENT.md](DEPLOYMENT.md)
- **Development Roadmap**: [ROADMAP.md](ROADMAP.md)
- **Changes from v1.0**: [CHANGELOG.md](CHANGELOG.md)
- **Project Info**: [README.md](README.md)

---

## 🆘 Troubleshooting

### "Build Failed" on Vercel
- Check Node.js version is 18.x
- Verify root directory is `apps/frontend`
- Check for missing dependencies: `cd apps/frontend && npm install`

### "Database Connection Failed"
- Verify Neon connection string
- Check SSL mode: `?sslmode=require`
- Test connection locally first

### "CORS Error"
- Add your frontend URL to `ALLOWED_ORIGINS` in backend
- Example: `ALLOWED_ORIGINS=https://paxvision-frontend.vercel.app,http://localhost:3000`

### "Images Not Loading"
- Verify Cloudinary credentials in frontend
- Check upload preset name
- Ensure images are uploaded to Cloudinary

---

## 💡 Pro Tips

1. **Start Simple**: Deploy frontend first, add backend later
2. **Use Local Data**: The site works with local data - add backend when ready
3. **Test Locally**: Always test changes locally before deploying
4. **Monitor Usage**: Keep an eye on free tier limits
5. **Backup**: Regularly export your Neon database

---

## 📞 Support

- **Repository**: https://github.com/aceucav-coder/video-surveillance-shop
- **Documentation**: Check all .md files in the repo
- **Issues**: Open a GitHub issue for bugs or questions

---

## ✅ You're Ready!

Your PaxVision site is now **live on the internet for FREE**! 🎉

**What's Working:**
- ✅ Product catalog (57 products)
- ✅ Service catalog (20 services)
- ✅ Shopping cart
- ✅ Bilingual (UA/RU)
- ✅ Professional design

**What to Add Next:**
- Real product images (Cloudinary)
- User accounts (JWT auth)
- Admin panel (CRM)
- Payment processing
- Order management

---

*Good luck! Your PaxVision e-commerce platform is ready to grow!* 🚀

---

**Last Updated**: 2025-06-11
**Version**: 2.0.0
