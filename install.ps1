# Installation Script for Portfolio

Write-Host "🚀 Setting up your portfolio website..." -ForegroundColor Cyan

# Clean previous installation
Write-Host "`n📦 Cleaning previous installation..." -ForegroundColor Yellow
if (Test-Path "node_modules") {
    Remove-Item -Path "node_modules" -Recurse -Force -ErrorAction SilentlyContinue
}
if (Test-Path "package-lock.json") {
    Remove-Item -Path "package-lock.json" -Force -ErrorAction SilentlyContinue
}

# Install dependencies
Write-Host "`n📥 Installing dependencies..." -ForegroundColor Yellow
npm install --legacy-peer-deps

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✅ Installation successful!" -ForegroundColor Green
    Write-Host "`n🎉 You can now run the development server with:" -ForegroundColor Cyan
    Write-Host "   npm run dev" -ForegroundColor White
    Write-Host "`n🌐 The site will be available at:" -ForegroundColor Cyan
    Write-Host "   http://localhost:3000" -ForegroundColor White
} else {
    Write-Host "`n❌ Installation failed. Please check the errors above." -ForegroundColor Red
    Write-Host "`nTry running manually:" -ForegroundColor Yellow
    Write-Host "   npm cache clean --force" -ForegroundColor White
    Write-Host "   npm install --legacy-peer-deps" -ForegroundColor White
}
