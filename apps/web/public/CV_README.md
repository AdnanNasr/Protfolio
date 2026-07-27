# CV File Setup

## Location
The CV file is stored at: `apps/web/public/adnan-nasr-cv.pdf`

## How to Update
To replace the CV with your actual resume:

1. **Locate the file**: `apps/web/public/adnan-nasr-cv.pdf`
2. **Replace it**: Simply overwrite this file with your new CV PDF
3. **No code changes needed**: The download button in the navbar automatically serves the file from this location

## File Details
- **Filename**: `adnan-nasr-cv.pdf` (do not rename)
- **Format**: PDF
- **Location**: Must stay in `apps/web/public/` folder
- **Button reference**: The navbar button at `src/components/portfolio/Navbar.jsx` links to `/adnan-nasr-cv.pdf`

## Quick Update Steps
```bash
# Navigate to the public folder
cd apps/web/public/

# Replace the file (example using cp)
cp /path/to/your/cv.pdf adnan-nasr-cv.pdf
```

That's it! The button will immediately serve your new CV on next page load.
