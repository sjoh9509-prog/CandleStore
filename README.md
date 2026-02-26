# 🕯️ Lumière Candle Co. — Website

A beautiful, fully-responsive multi-page website for a small handcrafted candle business.

## Pages

| File | Description |
|------|-------------|
| `index.html` | Homepage with hero, featured products, testimonials, newsletter |
| `shop.html` | Product catalog with category filtering and cart toast |
| `about.html` | Brand story, values, and production process |
| `contact.html` | Contact form and FAQ accordion |

## File Structure

```
candle-shop/
├── index.html
├── shop.html
├── about.html
├── contact.html
├── css/
│   └── style.css        # All styles + animations
├── js/
│   ├── main.js          # Nav, scroll reveal, forms, FAQ
│   └── shop.js          # Product filtering, cart toast
└── README.md
```

## Features

- **Animated CSS candle** on the homepage hero
- **Scroll-reveal animations** on all content sections
- **Product filtering** by scent category (Warm, Fresh, Floral, Seasonal)
- **Cart feedback toast** when adding items
- **FAQ accordion** on the contact page
- **Mobile-responsive** navigation with hamburger menu
- **Newsletter + contact form** with feedback states
- **No dependencies** — pure HTML, CSS, and vanilla JavaScript

## Design

- **Fonts:** Cormorant Garamond (display) + Jost (body) via Google Fonts
- **Palette:** Warm cream, deep espresso, amber gold, sage green
- **Aesthetic:** Luxury organic — grain texture overlays, editorial typography, candlelight glow effects

## Deployment

### GitHub Pages
1. Push this repository to GitHub
2. Go to **Settings → Pages**
3. Set source to **main branch, root folder**
4. Your site will be live at `https://yourusername.github.io/candle-shop/`

### Netlify / Vercel
Drag and drop the folder into [Netlify Drop](https://app.netlify.com/drop) for instant deployment.

## Customization

Edit these CSS variables in `css/style.css` to change the color palette:

```css
:root {
  --cream: #f5f0e8;
  --dark: #1c1814;
  --amber: #c4793a;
  --sage: #7a8c6e;
}
```

Replace all instances of `Lumière` with your business name, and update the email address in `contact.html`.

---

Built with ❤️ and a lot of candles.
