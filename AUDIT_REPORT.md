# AUDIT REPORT

## Bugs & Issues Found
1. **Broken/Dead CSS**: Multiple style files exist (`style.css`, `style1.css`, `style2.css`, `style3.css`, `style4.css`), creating clutter and inconsistency. `index.html` uses `style1.css` while `cart.html` uses `style3.css`.
2. **Cart Logic Issues**: The cart state management is broken across pages. `index.html` only increments a `cartCount` in `localStorage` without adding actual items, while `cart.html` has its own hardcoded sample cart and doesn't read real products from `localStorage`. 
3. **Redundant Files**: Unnecessary files like `aple.html` clutter the directory.
4. **Poor Structure**: Files are all in the root directory instead of standard folder layouts.
5. **UI Inconsistencies**: The design uses harsh colors (#111, gold) and sharp edges, not matching a playful pet shop tone.

## Action Plan
- Remove dead CSS files and consolidate into a single modular CSS file in `assets/css/main.css`.
- Fix the cart logic by using a centralized `localStorage` array for `cartItems` accessible by all pages.
- Restructure project into `src/components/`, `assets/`, `public/`, and `docs/`.
- Apply the new UI/UX redesign with soft coral, mustard yellow, cream, and deep teal.
- Add micro-animations and responsive rounded styling.
