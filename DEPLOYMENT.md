# Deployment Guide - Thiruchendur Murugan Restaurant

## Quick Start - Deploy in 5 Minutes

### Option 1: Netlify (⭐ RECOMMENDED - Easiest)

#### Step 1: Create Netlify Account
1. Go to https://netlify.com
2. Click "Sign up" → Choose GitHub, GitLab, or email signup
3. Verify email

#### Step 2: Deploy Your Website
**Method A: From GitHub (Recommended)**
1. Push code to GitHub: https://github.com/new
2. On Netlify: Click "New site from Git"
3. Connect GitHub → Select your repository
4. Build settings:
   - Build command: (leave empty)
   - Publish directory: `.` (current folder)
5. Click "Deploy site"
6. ✅ **HTTPS enabled automatically!**

**Method B: Drag & Drop (Fastest)**
1. Download folder as ZIP
2. Go to https://netlify.com/drop
3. Drag & drop the folder
4. ✅ Website live in seconds!

#### Step 3: Configure Environment Variables
1. Go to Site settings → Environment
2. Add variable: `REACT_APP_UPI_ID` = `your-upi-id@bank`
3. Redeploy (or code will use default from config.js)

#### Step 4: Verify Security
- Check site URL → Should start with `https://` ✓
- Browser shows 🔒 lock icon ✓
- HSTS headers active ✓

---

### Option 2: Vercel (Alternative - Also Easy)

#### Step 1: Create Vercel Account
1. Go to https://vercel.com
2. Click "Sign up"
3. Choose GitHub for easier deployment

#### Step 2: Deploy
1. Click "New Project"
2. Import GitHub repository
3. Framework preset: Select "Other" (static site)
4. Click "Deploy"
5. ✅ **HTTPS enabled automatically!**

#### Step 3: Add Environment Variables
1. Settings → Environment Variables
2. Add: `REACT_APP_UPI_ID` = `your-upi-id@bank`
3. Redeploy

---

### Option 3: GitHub Pages (Free, Simple)

#### Step 1: Push to GitHub
1. Create repository: https://github.com/new
2. Repository name: `thiruchendur-murugan-website`
3. Push your code

#### Step 2: Enable GitHub Pages
1. Go to Repository → Settings
2. Find "Pages" section (left sidebar)
3. Source: `main` branch
4. Custom domain: (optional)
   - Add your domain if you have one
   - Point DNS to GitHub
5. Click "Save"
6. ✅ **HTTPS enabled automatically!**

#### Step 3: Access Your Site
- URL: `https://yourusername.github.io/thiruchendur-murugan-website`

---

## ✅ Security Verification After Deployment

### Check HTTPS
```
✓ URL starts with https://
✓ Browser shows 🔒 lock icon
✓ Mixed content warnings: NONE
```

### Verify Security Headers
Use online tool: https://securityheaders.com
1. Enter your deployed URL
2. Check for:
   - ✓ Strict-Transport-Security (HSTS)
   - ✓ X-Frame-Options
   - ✓ Content-Security-Policy
   - ✓ X-Content-Type-Options

### Test Functionality
- [ ] Click through all menu categories
- [ ] Add items to bill
- [ ] Change quantities
- [ ] Print bill (verify QR code and UPI ID from config)
- [ ] Reset/Cancel bill
- [ ] View in mobile browser

---

## Configuration Management

### For Local Development
1. Edit `config.js` with your actual UPI ID
2. Test locally: `python -m http.server 8000`
3. Visit: `http://localhost:8000`

### For Production Deployment

#### Netlify:
1. Site settings → Environment
2. Create variable: `REACT_APP_UPI_ID`
3. Value: `your-actual-upi-id@bank`
4. Redeploy

#### Vercel:
1. Project settings → Environment Variables
2. Name: `REACT_APP_UPI_ID`
3. Value: `your-actual-upi-id@bank`
4. Click "Add"
5. Redeploy

#### GitHub Pages:
1. Create `.env` file (won't be deployed)
2. Edit `config.js` and commit
3. GitHub secrets: Settings → Secrets → New repository secret
4. Use in Actions workflow (optional)

---

## 🔒 Security Checklist

### HSTS (HTTP Strict-Transport-Security)
- ✅ Enabled via `_headers` file
- ✅ Max-age: 1 year (31536000 seconds)
- ✅ Applies to all subdomains
- ✅ Preload enabled for browser preload list

### Content Security Policy (CSP)
- ✅ Strict default policy
- ✅ Blocks XSS attacks
- ✅ Prevents clickjacking
- ✅ Allows only same-origin resources

### UPI ID Protection
- ✅ Moved to config.js
- ✅ Can be overridden via environment variables
- ✅ Not hardcoded in HTML
- ✅ Loaded dynamically at runtime

### Other Headers
- ✅ X-Content-Type-Options: nosniff
- ✅ X-Frame-Options: SAMEORIGIN
- ✅ Permissions-Policy: geolocation=(), microphone=(), camera=()

---

## 📊 Monitoring Access Logs

### Netlify Access Logs
1. Site settings → Functions & analytics
2. View recent deployments
3. Check build logs for errors
4. Monitor bandwidth usage

### Vercel Access Logs
1. Project settings → Analytics
2. Check requests and performance
3. View deployment history
4. Monitor edge function logs

### GitHub Pages Access Logs
1. Repository → Insights
2. Check traffic
3. View deployment history
4. Monitor Actions workflow

---

## 🚨 Troubleshooting

### HTTPS Not Working
- [ ] Wait 24 hours for DNS propagation
- [ ] Clear browser cache (Ctrl+Shift+Del)
- [ ] Try incognito/private window
- [ ] Check hosting platform status

### UPI ID Not Displaying
- [ ] Verify `config.js` is loaded (check browser console)
- [ ] Check environment variable is set correctly
- [ ] Clear browser cache
- [ ] Check for JavaScript errors (F12 → Console)

### Mixed Content Warning
- [ ] All image URLs must use HTTPS
- [ ] Update image paths in config if needed
- [ ] Check external resources are HTTPS

### Security Headers Not Showing
- [ ] Verify `_headers` file exists in root
- [ ] Check Netlify deployment includes file
- [ ] Wait for new deployment to propagate
- [ ] Use https://securityheaders.com to verify

---

## 📈 Performance Tips

### Optimize Images
1. Compress images before uploading
2. Use WebP format where possible
3. Keep QR code size minimal

### Enable Caching
- Netlify/Vercel enable automatic caching
- Set appropriate Cache-Control headers
- Static assets cached for 1 hour by default

### Monitor Performance
- Netlify Analytics
- Vercel Analytics
- Chrome DevTools Lighthouse

---

## 🔄 Regular Maintenance

### Weekly
- [ ] Monitor access logs for errors
- [ ] Check bill generation functionality
- [ ] Verify HTTPS still active

### Monthly
- [ ] Review security headers
- [ ] Test all functionality
- [ ] Check uptime monitoring

### Quarterly
- [ ] Update dependencies (if added)
- [ ] Security audit
- [ ] Review CSP policy
- [ ] Update menu as needed

---

## Support

**Having Issues?**
1. Check browser console (F12 → Console tab)
2. Review deployment logs
3. Verify files uploaded correctly
4. Try different browser
5. Clear all caches

**Still Need Help?**
- Netlify Support: https://support.netlify.com
- Vercel Support: https://vercel.com/support
- GitHub Pages: https://docs.github.com/en/pages
- Security Issues: Review SECURITY.md

---

**Deployment Date**: ________
**Hosting Platform**: ________
**Domain**: ________
**HTTPS Status**: ✓ ________
**CSP Status**: ✓ ________
**UPI ID Configured**: ✓ ________
