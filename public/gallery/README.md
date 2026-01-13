# Office Gallery Images

Add your 6 office/workplace photos here to showcase in the Gallery section.

## File Structure

```
public/
  └── gallery/
      ├── office-1.jpg
      ├── office-2.jpg
      ├── office-3.jpg
      ├── office-4.jpg
      ├── office-5.jpg
      └── office-6.jpg
```

## Features

✨ **Thumbnail Grid Layout**
- Displays 6 images in a clean grid
- 2 columns on mobile
- 3 columns on tablets
- 6 columns on desktop (nice train-like row)

✨ **Interactive Features**
- Hover effects with smooth zoom
- Click any thumbnail to view full-size
- Lightbox modal for detailed viewing
- Overlay with image titles
- Smooth animations

✨ **Professional Look**
- Cyan and purple gradient accents
- Clean borders on hover
- Professional layout
- Responsive design

## Image Specifications

**Recommended:**
- **Format**: JPG or PNG
- **Resolution**: 1200x1200px or higher (square aspect ratio works best)
- **File size**: Under 500KB each
- **Orientation**: Square or landscape preferred
- **Content**: Office moments, team photos, workplace events, professional gatherings

## Tips

1. Use high-quality, well-lit photos
2. Square format works best for the grid
3. Mix different types of moments (team photos, events, workspaces)
4. Ensure all images are professional and appropriate

## Customization

You can edit the image titles in `src/components/Gallery.jsx`:

```javascript
const galleryImages = [
  {
    src: '/gallery/office-1.jpg',
    alt: 'Office moment 1',
    title: 'Your Custom Title', // Change this
  },
  // ... more images
]
```

Once you add your images, they'll automatically appear in the beautiful gallery grid! 📸
