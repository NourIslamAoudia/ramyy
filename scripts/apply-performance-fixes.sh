#!/bin/bash
# Performance Optimization Quick-Apply Script
# B&C Conciergerie - Apply remaining critical performance fixes

echo "=================================================="
echo "🚀 B&C CONCIERGERIE PERFORMANCE OPTIMIZATION"
echo "=================================================="
echo ""

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

PROJECT_ROOT="/home/ramy/Documents/bcconceirgerei.com"
cd "$PROJECT_ROOT" || exit

# Phase 1: Install required packages
echo -e "${BLUE}📦 Phase 1: Installing optimization packages...${NC}"
echo ""

read -p "Install recommended NPM packages? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "Installing @next/bundle-analyzer..."
    npm install --save-dev @next/bundle-analyzer
    
    echo "Installing @vercel/analytics and @vercel/speed-insights..."
    npm install @vercel/analytics @vercel/speed-insights
    
    echo "Installing sharp (image optimization)..."
    npm install sharp
    
    echo -e "${GREEN}✅ Packages installed${NC}"
else
    echo -e "${YELLOW}⏭️  Skipped package installation${NC}"
fi
echo ""

# Phase 2: Create environment file
echo -e "${BLUE}📝 Phase 2: Creating environment configuration...${NC}"
echo ""

if [ ! -f ".env.local" ]; then
    cat > .env.local << 'EOF'
# Google Analytics 4 Measurement ID
# Replace with your actual GA4 ID from https://analytics.google.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Enable analytics only in production
NEXT_PUBLIC_ENABLE_ANALYTICS=true

# Vercel Analytics (if using Vercel)
# NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your-vercel-id
EOF
    echo -e "${GREEN}✅ Created .env.local${NC}"
    echo -e "${YELLOW}⚠️  IMPORTANT: Update NEXT_PUBLIC_GA_ID in .env.local with your real Google Analytics ID${NC}"
else
    echo -e "${YELLOW}⏭️  .env.local already exists${NC}"
fi
echo ""

# Phase 3: Create video poster (if video exists)
echo -e "${BLUE}🎬 Phase 3: Checking for hero video optimization...${NC}"
echo ""

if command -v ffmpeg &> /dev/null; then
    if [ -f "public/assets/video-hero.mp4" ]; then
        echo "Creating video poster image..."
        ffmpeg -i public/assets/video-hero.mp4 -ss 00:00:01 -vframes 1 public/assets/video-poster.jpg -y 2>/dev/null
        echo -e "${GREEN}✅ Video poster created${NC}"
    else
        echo -e "${YELLOW}⚠️  video-hero.mp4 not found in public/assets/${NC}"
        echo "   Poster will need to be added manually or video re-uploaded"
    fi
else
    echo -e "${YELLOW}⚠️  ffmpeg not installed, skipping video poster generation${NC}"
    echo "   Install: sudo apt install ffmpeg"
fi
echo ""

# Phase 4: Build and test
echo -e "${BLUE}🏗️  Phase 4: Building application...${NC}"
echo ""

read -p "Run production build now? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "Building Next.js application..."
    npm run build
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ Build successful${NC}"
        echo ""
        echo "Next steps:"
        echo "1. Run: npm run start"
        echo "2. Open: http://localhost:3000"
        echo "3. Test in Chrome DevTools Lighthouse"
    else
        echo -e "${YELLOW}⚠️  Build had errors - check output above${NC}"
    fi
else
    echo -e "${YELLOW}⏭️  Skipped build${NC}"
fi
echo ""

# Phase 5: Summary and next steps
echo "=================================================="
echo -e "${GREEN}✅ OPTIMIZATION SETUP COMPLETE${NC}"
echo "=================================================="
echo ""
echo "What was done:"
echo "✓ Moved Google Analytics to afterInteractive"
echo "✓ Optimized critical CSS"
echo "✓ Fixed hero video LCP"
echo "✓ Enabled swcMinify"
echo "✓ Configured image caching (1 year)"
echo "✓ Added security headers"
echo ""
echo "NEXT STEPS (Critical - Do These Now):"
echo ""
echo "1. 🔴 UPDATE .env.local with real Google Analytics ID"
echo "   File: .env.local"
echo "   Line: NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX"
echo ""
echo "2. 🟡 Add 'priority' to hero images"
echo "   Files: app/services/page.jsx (line ~25)"
echo "          app/offres/page.jsx (line ~15)"
echo "          app/a-propos/page.jsx (line ~40)"
echo "   Add: priority={true}"
echo ""
echo "3. 🟡 Optimize Framer Motion (see docs/PERFORMANCE_OPTIMIZATION.md)"
echo "   Create: components/LazyIconicCarousel.jsx"
echo "   Update: app/page.jsx to use lazy component"
echo ""
echo "4. 🟢 Run Lighthouse audit"
echo "   Command: npm run start"
echo "   Then: lighthouse http://localhost:3000 --view"
echo ""
echo "📚 DOCUMENTATION:"
echo "   - Complete guide: docs/PERFORMANCE_OPTIMIZATION.md"
echo "   - SEO checklist: docs/SEO_CHECKLIST.md"
echo "   - Image alt text: docs/SEO_IMAGE_ALT_TEXT.md"
echo ""
echo "🎯 TARGET: Lighthouse Performance Score 95+"
echo ""
