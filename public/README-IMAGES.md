# Images Required for SEO and Social Media

To make your logo visible in Google search results and social media shares, you need to add these images to the `/public` folder:

## Required Images:

### 1. Open Graph Image (for Google & Social Media)
- **Filename:** `og-image.jpg`
- **Location:** `/public/og-image.jpg`
- **Size:** 1200 x 630 pixels
- **Format:** JPEG or PNG
- **Content:** Should include your B&C Conciergerie logo and branding

### 2. Favicon (Browser Tab Icon)
- **Filename:** `favicon.ico`
- **Location:** `/public/favicon.ico`
- **Size:** 32 x 32 pixels
- **Format:** ICO

### 3. App Icon
- **Filename:** `icon.png`
- **Location:** `/public/icon.png`
- **Size:** 32 x 32 pixels
- **Format:** PNG

### 4. Apple Touch Icon
- **Filename:** `apple-touch-icon.png`
- **Location:** `/public/apple-touch-icon.png`
- **Size:** 180 x 180 pixels
- **Format:** PNG

## How to Create These Images:

1. Use a design tool like Canva, Figma, or Photoshop
2. For the OG image (1200x630):
   - Add your logo prominently
   - Include "B&C Conciergerie" text
   - Use your brand colors (#708238 olive green, #F5EEDF beige)
   - Add a tagline like "Conciergerie Côte d'Azur"

3. For the favicon and icons:
   - Use your logo simplified to work at small sizes
   - Ensure good contrast

## After Adding Images:

1. Place all images in the `/public` folder
2. Deploy to production
3. Test with:
   - Google Search Console
   - Facebook Debugger: https://developers.facebook.com/tools/debug/
   - Twitter Card Validator: https://cards-dev.twitter.com/validator
   - LinkedIn Post Inspector

The metadata is already configured in `app/layout.jsx` to use these images!
