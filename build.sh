#!/bin/bash

# Exit on any error
set -e

echo "🚀 Starting Production Build Process..."

# 1. Build Client
echo "📦 Building Frontend..."
cd client
npm install --no-audit
npm run build
cd ..

# 2. Build Server
echo "📦 Building Backend..."
cd server
npm install --no-audit
npm run build
cd ..

echo "✅ Build Complete! Ready for deployment."
echo "👉 Start with: pm2 start ecosystem.config.js"
