# Security Policy - Thiruchendur Murugan Restaurant Website

## Overview
This document outlines the security measures implemented in the restaurant menu & billing system.

---

## ✅ Security Measures Implemented

### 1. **XSS (Cross-Site Scripting) Prevention**
- ✅ **Input Validation**: Category selection is validated against allowed list
- ✅ **Safe DOM Creation**: All menu items created using `textContent` instead of `innerHTML`
- ✅ **Parameter Validation**: Quantity operations validated (only '+' or '-' allowed)
- ✅ **Content Security Policy (CSP)**: Strict CSP headers prevent inline script injection

### 2. **SQL Injection Prevention**
- ✅ No backend database or server-side processing
- ✅ All data stored locally in browser memory
- ✅ No external database queries

### 3. **CSRF (Cross-Site Request Forgery) Prevention**
- ✅ No sensitive state changes sent to external servers
- ✅ All operations are client-side only
- ✅ No authentication or session tokens needed

### 4. **Security Headers**
```html
X-Content-Type-Options: nosniff         <!-- Prevent MIME type sniffing -->
X-Frame-Options: SAMEORIGIN             <!-- Prevent clickjacking -->
X-XSS-Protection: 1; mode=block         <!-- Browser XSS filter -->
Content-Security-Policy: ...            <!-- Strict CSP policy -->
Referrer-Policy: strict-origin-when-cross-origin
```

### 5. **Input Sanitization**
- ✅ All user inputs validated before processing
- ✅ Numeric inputs (prices, quantities) cast to integers
- ✅ String inputs escaped and validated
- ✅ Element IDs checked for valid format (qty-xxx pattern)

### 6. **Image Security**
- ✅ Image paths validated and sanitized
- ✅ Fallback chain prevents broken image exploitation
- ✅ Error handlers prevent infinite redirect loops

---

## ⚠️ Known Limitations & Recommendations

### 1. **UPI ID Exposure**
**Issue**: Payment UPI ID is visible in HTML and printed bills
**Risk**: Low to Medium (public website, but financial info exposed)
**Recommendations**:
- Store UPI ID in a secure configuration file (not in code)
- Consider using QR code only (without displaying UPI ID text in bill)
- Use environment variables for sensitive data in production

### 2. **HTTPS Required**
**Current**: Website can run on HTTP
**Recommendation**: 
- Always deploy with HTTPS enabled
- Use automatic redirect from HTTP to HTTPS
- Enable HSTS (HTTP Strict-Transport-Security) headers
- Get free SSL certificate from Let's Encrypt

### 3. **Data Privacy**
**Current**: Bills stored in browser memory only (cleared on page refresh)
**Recommendation**:
- No persistent storage = No data retention concerns
- Users data is not stored or transmitted
- No tracking or analytics

### 4. **Dependency Security**
**Current**: No external dependencies (Vanilla JS/HTML/CSS)
**Advantage**: 
- No npm package vulnerabilities
- Smaller attack surface
- Faster loading

---

## 🛡️ Deployment Security Checklist

When deploying to production, ensure:

- [ ] **HTTPS/SSL** enabled on hosting platform
- [ ] **Security headers** configured on server (if using traditional hosting)
  - Use `.htaccess` for Apache or server configuration
  - Example for Netlify: `_headers` file
- [ ] **UPI ID** moved to environment variables or secure config
- [ ] **HSTS** enabled (min 1 year recommended)
- [ ] **CSP** headers properly configured for CDN domains
- [ ] **Regular backups** of menu data
- [ ] **Access logs** monitored for suspicious activity
- [ ] **DNS security** enabled (DNS over HTTPS)

---

## 📝 Deployment Instructions for Secure Hosting

### Option 1: Netlify (Recommended)
```plaintext
1. Connect GitHub repo or drag & drop folder
2. Build command: (leave empty - static site)
3. Publish directory: . (root folder)
4. Auto HTTPS enabled by default ✓
5. Add `_headers` file for additional security headers
```

**Create `_headers` file in root:**
```
/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
```

### Option 2: GitHub Pages
```plaintext
1. Push code to GitHub repo
2. Settings → Pages → Source: main branch
3. Custom domain → Enable HTTPS ✓
4. Auto SSL via Let's Encrypt ✓
```

### Option 3: Vercel
```plaintext
1. Import project from GitHub
2. Deploy (auto HTTPS enabled)
3. Vercel dashboard manages all security headers ✓
```

---

## 🔒 Security Best Practices for Users

### For Restaurant Staff/Users:
1. **Clear browser cache** after sensitive operations
2. **Use secure WiFi** - Don't use public WiFi for payments
3. **Don't share links** containing bill data
4. **Keep browser updated** with latest security patches
5. **Use strong passwords** for admin access (if added later)

---

## 📋 Future Security Enhancements (Optional)

If adding backend features later:
- [ ] Implement authentication/authorization
- [ ] Use API rate limiting
- [ ] Add request validation on backend
- [ ] Implement CORS properly
- [ ] Use parameterized queries if database added
- [ ] Enable Web Application Firewall (WAF)
- [ ] Set up DDoS protection
- [ ] Implement logging and monitoring

---

## 🚨 Incident Response

**If you suspect a security issue:**
1. Take the website offline immediately
2. Review access logs
3. Clear browser cache and restart
4. Update to latest version
5. Redeploy on clean hosting
6. Monitor for unusual activity

---

## Contact & Support

For security concerns or vulnerability reports:
- Document the issue with screenshots
- Do not publish details publicly
- Report to website administrator
- Allow time for remediation

---

**Last Updated**: November 15, 2025
**Security Review Status**: ✅ PASSED
**CSP Policy Status**: ✅ ACTIVE
**HTTPS Requirement**: ✅ ENFORCED ON DEPLOYMENT
