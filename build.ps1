Write-Host "Starting Production Build Process..." -ForegroundColor Cyan

# 1. Build Client
Write-Host "Building Frontend..." -ForegroundColor Yellow
cd client
npm install --no-audit
npm run build
if ($LASTEXITCODE -ne 0) { Write-Error "Frontend build failed!"; exit $LASTEXITCODE }
cd ..

# 2. Build Server
Write-Host "Building Backend..." -ForegroundColor Yellow
cd server
npm install --no-audit
npm run build
if ($LASTEXITCODE -ne 0) { Write-Error "Backend build failed!"; exit $LASTEXITCODE }

# 3. Create Public Folder and Copy Frontend
Write-Host "Copying Frontend to Server Public folder..." -ForegroundColor Yellow
if (Test-Path "public") { Remove-Item -Recurse -Force "public" }
New-Item -ItemType Directory -Path "public"
Copy-Item -Path "..\client\dist\*" -Destination "public" -Recurse
cd ..

Write-Host "Build Complete! Ready for deployment." -ForegroundColor Green
Write-Host "Upload the server folder to cPanel." -ForegroundColor Cyan
