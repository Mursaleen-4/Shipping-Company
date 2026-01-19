# Frontend Deployment Guide for Server97

## Backend Configuration

Your backend is deployed on Render: `https://shipping-comp.onrender.com`

## Frontend Configuration Updated

The frontend has been configured to connect to your Render backend:

- ✅ `client/public/config.json` - Updated API_BASE
- ✅ `client/src/lib/api.ts` - Configured for production

## Build Instructions

### 1. Navigate to the client directory

```bash
cd "d:\Shipping App\client"
```

### 2. Install dependencies (if not already done)

```bash
npm install
```

### 3. Build the frontend for production

```bash
npm run build
```

This will create a `dist` folder with all optimized static files.

## Deployment to Server97

### Option A: Manual Upload via FTP/SFTP

1. Connect to server97 using your FTP/SFTP client
2. Navigate to your web root directory (e.g., `/public_html`, `/var/www/html`, or your specific domain folder)
3. Upload all contents from the `client/dist` folder to the web root
4. Ensure `.htaccess` file is present for proper routing (see below)

### Option B: Using cPanel File Manager

1. Log in to cPanel on server97
2. Open File Manager
3. Navigate to your public_html (or designated folder)
4. Upload the entire `dist` folder contents
5. Set proper permissions (644 for files, 755 for directories)

### Option C: Using SSH/Command Line

If you have SSH access to server97:

```bash
# From your local machine, compress the dist folder
cd "d:\Shipping App\client"
tar -czf frontend-dist.tar.gz dist/

# Upload to server97 (replace with your details)
scp frontend-dist.tar.gz user@server97.com:/path/to/webroot/

# SSH into server97
ssh user@server97.com

# Extract the files
cd /path/to/webroot/
tar -xzf frontend-dist.tar.gz
mv dist/* .
rm -rf dist frontend-dist.tar.gz
```

## Required Configuration on Server97

### .htaccess File (for Apache)

Create a `.htaccess` file in your web root with the following content:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Don't rewrite files or directories
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d

  # Rewrite everything else to index.html for client-side routing
  RewriteRule ^ index.html [L]
</IfModule>

# Enable CORS if needed
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "*"
</IfModule>

# Enable compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Set caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/javascript "access plus 1 month"
</IfModule>
```

### For Nginx (if server97 uses Nginx)

Add this to your Nginx configuration:

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/webroot;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Enable compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## Environment Variables

No additional environment variables are needed on the frontend since the backend URL is hardcoded in the production build.

## CORS Configuration on Render Backend

Make sure your Render backend allows requests from your server97 domain. In your backend code, ensure CORS is configured:

```typescript
// In your server/src/index.ts or similar
app.use(
  cors({
    origin: [
      "http://your-server97-domain.com",
      "https://your-server97-domain.com",
      "http://localhost:5173", // for development
    ],
    credentials: true,
  })
);
```

## Testing After Deployment

1. Visit your server97 URL in a browser
2. Open browser DevTools (F12) → Network tab
3. Check that API calls are going to `https://shipping-comp.onrender.com`
4. Verify all features work correctly
5. Test authentication, data fetching, and uploads

## Troubleshooting

### Issue: Blank page or 404 errors on refresh

**Solution**: Ensure `.htaccess` (Apache) or Nginx config is properly set up for SPA routing

### Issue: API calls failing

**Solution**: Check browser console for CORS errors. Update backend CORS settings if needed

### Issue: Images/assets not loading

**Solution**: Verify that all files from `dist` folder were uploaded and paths are correct

### Issue: Slow initial load

**Solution**: Enable compression and caching in your web server configuration

## Quick Rebuild & Redeploy

Whenever you make changes:

```bash
cd "d:\Shipping App\client"
npm run build
# Then upload the new dist folder contents to server97
```

## Notes

- The frontend will connect to your Render backend at `https://shipping-comp.onrender.com`
- All API calls in production will use this URL
- Static files (images, videos) should be served from server97 or Cloudinary if configured
- Keep the Render backend running for the frontend to function properly
