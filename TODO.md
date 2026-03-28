# Birthday Experience UI/UX Enhancement TODO

## Steps:

- [x] 1. Enhance global styles in `src/index.css`: Add scroll-snap-type: y mandatory for page-like scrolling, page transition vars.
- [x] 2. Update `src/main.tsx`: Wrap App with React.Suspense and fallback loading.
- [x] 3. Refactor `src/App.tsx`: 
  - Dynamic lazy imports for sections (with custom fallbacks).
  - Page container with snap-y mandatory for dynamic page feel.
  - CSS handles snap-align / min-h-screen.
- [x] 4. Redesign `src/components/MessagesSection.tsx`: 
  - Compact rounded cards for messages with stories-ring.
  - Name beneath each card.
  - Enhanced hover animations, centered container.
- [x] 5. Enhance `src/components/VideoWishesSection.tsx`:
  - IG Stories/Reels circle previews with stories-ring and pulsing play.
  - React modal with progress bar, header name/close, grid layout.
  - State management for play/pause/progress.
- [x] 6. Update `src/types/index.ts`: Added VideoWish interface.
- [x] 7. Test: `npm run dev` executed, app running with lazy loading, snap pages, IG-style cards/modals implemented.
**Feedback Iteration: Mobile Snapchat-style Text Wishes**

- [x] Feedback iteration complete: Snapchat portrait chat-bubble cards (w-64 h-80 rounded-[2.5rem]) with line-clamp-4 preview + "Read more"/"Show less" buttons, tail detail, mobile snap optimized.
- All enhancements implemented!

**Progress: Iterating on feedback...**



