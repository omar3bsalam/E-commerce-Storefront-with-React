# 🛍️ Modern E-Commerce Storefront

A fully functional, production-ready e-commerce storefront built with **React**, **Vite**, **Tailwind CSS**, and **React Router**.

## ✨ Features

### 🏠 Home Page
- Hero banner with call-to-action
- Featured products grid
- Why shop with us section
- Responsive design for all devices

### 📦 Product Catalog
- Complete product grid view
- Advanced search functionality
- Category filtering
- Multiple sorting options (name, price, rating)
- Product cards with ratings and images

### 🔍 Product Details
- High-quality product images
- Detailed product information
- Star ratings display
- Stock availability
- Quantity selector
- Recommended products section
- Add to cart functionality

### 🛒 Shopping Cart
- Add/remove items
- Quantity controls
- Real-time total updates
- Persistent storage (localStorage)
- Empty cart state

### 💳 Checkout Flow
- Multi-step checkout process (Shipping → Payment → Confirmation)
- Shipping information form
- Payment simulation
- Order summary
- Success confirmation page

### 📱 Responsive Design
- Mobile-first approach
- Desktop, tablet, and mobile optimized
- Hamburger menu for mobile navigation
- Touch-friendly buttons

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **Routing**: React Router 7
- **State Management**: Context API
- **Icons**: Lucide React
- **UI/UX**: Modern, accessible components

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx           # Navigation & cart badge
│   ├── ProductCard.jsx      # Product display card
│   └── Footer.jsx           # Footer component
├── pages/
│   ├── Home.jsx             # Landing page
│   ├── Products.jsx         # Product catalog with filters
│   ├── ProductDetail.jsx    # Individual product page
│   ├── Cart.jsx             # Shopping cart
│   ├── Checkout.jsx         # Multi-step checkout
│   └── About.jsx            # About page
├── context/
│   └── CartContext.jsx      # Cart state management
├── hooks/
│   └── useCart.js           # Custom hook for cart operations
├── data/
│   └── products.js          # Mock product data
├── App.jsx                  # Main app with routing
├── main.jsx                 # Entry point
└── style.css                # Global styles

```

## 🚀 Getting Started

### Installation

```bash
cd my-store
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Production Build

```bash
npm run build
npm run preview
```

## 🎯 Key Features Explained

### Context API for Cart Management

The `CartContext` manages:
- Add items to cart
- Remove items
- Update quantities
- Calculate totals
- Persist to localStorage

```javascript
const { addItem, removeItem, updateQuantity, getTotalPrice } = useCart();
```

### Product Data Structure

Each product includes:
- ID, name, price, rating
- Category, description
- Product image URL
- Stock quantity
- Long description for details page

### Routing Structure

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | Home | Landing page |
| `/products` | Products | Product catalog with filters |
| `/product/:id` | ProductDetail | Individual product page |
| `/cart` | Cart | Shopping cart |
| `/checkout` | Checkout | Multi-step checkout |
| `/about` | About | About company |

## 🎨 Design Highlights

### Color Scheme
- **Primary**: Blue (#3b82f6)
- **Secondary**: Green (#10b981)
- **Background**: White with light gray accents
- **Text**: Dark gray (#111827)

### Components
- Responsive grid layouts
- Smooth transitions and hover effects
- Loading states and empty states
- Error handling
- Accessibility features

## 💾 Data Persistence

- Cart items are automatically saved to `localStorage`
- Cart persists across browser sessions
- Automatic sync on component mount

## 📊 Mock Data

8 sample products included:
1. Wireless Headphones
2. Smart Watch
3. USB-C Charger
4. Portable Speaker
5. Phone Stand
6. Laptop Bag
7. Wireless Mouse
8. Mechanical Keyboard

3 product categories:
- Electronics
- Accessories
- Audio

## 🔒 Payment Simulation

The checkout page accepts test card information:
- Card Number: 4532 1234 5678 9010 (or any 16 digits)
- Expiry: 12/25 (or any future date)
- CVV: 123 (or any 3 digits)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Performance Optimizations

- Code splitting via Vite
- Tree shaking
- CSS minification
- Image optimization recommendations
- Lazy loading ready

## 📝 Future Enhancements

- User authentication
- Product reviews and ratings
- Wishlist functionality
- Dark mode toggle
- Multi-language support
- Advanced search filters
- Real payment integration
- Order tracking
- Admin dashboard

## 📦 Dependencies

- `react`: ^18.3.1 - UI library
- `react-dom`: ^18.3.1 - React DOM rendering
- `react-router-dom`: ^7.9.6 - Client-side routing
- `lucide-react`: ^0.554.0 - Icon library
- `tailwindcss`: ^4.1.17 - Utility-first CSS
- `vite`: ^7.2.4 - Build tool
- `postcss`: ^8.5.6 - CSS processing
- `autoprefixer`: ^10.4.22 - CSS vendor prefixes

## 🎓 Learning Resources

This project demonstrates:
- React functional components and hooks
- Context API for state management
- React Router for navigation
- Tailwind CSS for styling
- localStorage API for persistence
- Form handling and validation
- Responsive design principles
- Component composition

## 📄 License

This project is open source and available for personal and commercial use.

---

**Built with ❤️ for modern e-commerce**
