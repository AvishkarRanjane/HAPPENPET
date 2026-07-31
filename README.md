# HappenPet 🐾

> **Joyful Essentials for Happy Pets**

![HappenPet](https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80)

**Live Link**: [https://happenpet-app.vercel.app](https://happenpet-app.vercel.app)

HappenPet is a premium pet supply store offering cozy beds, interactive toys, wholesome treats, and playful essentials designed to bring out the best in your furry friends. 

## Features
- 🛒 **Global Cart Management**: Seamless cart state synchronized across all pages via `localStorage`.
- 🎨 **Playful UI/UX**: Soft coral, mustard yellow, cream, and deep teal color palette.
- 📱 **Responsive Design**: Rounded elements, pill-shaped buttons, and soft card corners for a modern look.
- ✨ **Micro-Animations**: Gentle bounce on "Add to Cart" interactions.
- 🚀 **Performant Architecture**: Modular CSS and JavaScript separated logically into `src/components` and `assets/`.

## Tech Stack
- **HTML5** & **CSS3**
- **Vanilla JavaScript** (ES6)
- **Local Storage API** (for state persistence)

## Setup
1. Clone the repository: `git clone <repo-url>`
2. Navigate to the project directory.
3. You can run the app with any static server:
   ```bash
   npx serve public
   ```
4. Open `http://localhost:3000` to view the shop!

## Project Structure
- `public/` - HTML Pages (Index, Cart, About, Login)
- `src/components/` - JavaScript logic (`cart.js`, `ui.js`)
- `assets/css/` - Consolidated styles (`style.css`)
- `docs/` - Documentation & Logs

## License
MIT License
