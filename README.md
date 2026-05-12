# BirthdayGram 🎂

A special birthday surprise app designed with Instagram's UI/UX in mind. This interactive experience combines the familiar feel of Instagram with personalized birthday content including messages, photos, videos, and wishes.

## Features

- **Instagram-style Interface**: Clean, mobile-first design mimicking Instagram's layout
- **Stories**: Interactive story circles featuring birthday messages and video wishes
- **Feed**: Scrollable posts with messages, photos, and memories
- **Reels**: Dedicated video section for birthday wishes
- **Profile**: Complete birthday experience with all sections
- **Music Toggle**: Background music control
- **Responsive Design**: Works on mobile and desktop

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

## Project Structure

```
src/
├── components/
│   ├── TopBar.tsx          # Instagram-style top navigation
│   ├── Stories.tsx         # Story circles with birthday content
│   ├── Feed.tsx            # Main feed with posts
│   ├── BottomNav.tsx       # Bottom navigation bar
│   ├── MessagesSection.tsx # Chat-style messages
│   ├── GallerySection.tsx  # Photo gallery
│   ├── VideoWishesSection.tsx # Video wishes
│   └── ...
├── types/
│   └── index.ts            # TypeScript interfaces
└── App.tsx                 # Main app component
```

## Customization

- **Messages**: Edit `/public/messages.json` to add personalized messages
- **Gallery**: Add photos to `/public/gallery/`
- **Videos**: Add video wishes to `/public/videos/`
- **Audio**: Add background music to `/public/audio/`

## Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
