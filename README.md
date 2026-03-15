# 🏨 Hotel Demo Website

A professional, fully-responsive hotel landing page and demo website built with React, Tailwind CSS, and Framer Motion. This project showcases a visually impressive, modern hotel website with interactive features like room browsing, image galleries, filtering, and a booking form—all powered by mock data for a lightweight, easy-to-maintain demo.

**Status**: ✅ **Production Ready** | **Deploy Ready for GitHub Pages**

---

## 🎯 Quick Demo

**Live Features**:
- 🏠 **Home Page** - Hero section with featured rooms, amenities showcase, and guest reviews
- 🛏️ **Rooms Listing** - Browse all rooms with real-time filtering by price and amenities
- 📷 **Room Details** - Dynamic room pages with image gallery, specifications, and booking form
- 📅 **Booking System** - Interactive form with date picker, guest selection, and price calculation
- 📧 **Contact Page** - Contact form and hotel information
- ✨ **Smooth Animations** - Professional animations throughout the site
- �� **Fully Responsive** - Perfect on mobile, tablet, and desktop

---

## 📊 Features

### Visual Design ✨
- ✅ **Modern Hero Section** - Full-width background with gradient overlay and animated CTA
- ✅ **Responsive Design** - Works perfectly on all devices (mobile, tablet, desktop)
- ✅ **Smooth Animations** - Framer Motion animations: fade-ins, hover effects, scroll reveals
- ✅ **Professional Layout** - Clean card designs, elegant typography, consistent spacing
- ✅ **Visual Components** - Room cards, image gallery, review cards, modals with polish

### Functionality 🚀
- ✅ **Room Browsing** - View detailed information about each room with full gallery
- ✅ **Real-Time Filtering** - Filter rooms by price range and amenities on-the-fly
- ✅ **Image Gallery** - Main image with thumbnail navigation and smooth transitions
- ✅ **Booking Form** - Interactive form with date picker, guest selection, price calculation
- ✅ **Form Validation** - Real-time validation with error messages and helpful feedback
- ✅ **Confirmation Modals** - Beautiful success messages after form submission
- ✅ **Contact System** - Contact form with validation and submission feedback

### Technical Excellence 🔧
- ✅ **Mock Data Only** - All data from JSON files (no database, no backend API needed)
- ✅ **Component Architecture** - Reusable, modular React components with clean structure
- ✅ **Type Safety Ready** - Code structure supports TypeScript migration
- ✅ **Performance Optimized** - Lazy loading, optimized images, minimal bundle size
- ✅ **Production Ready** - Zero errors/warnings, optimized build, ready for deployment

---

## 🏗️ Architecture

```
┌────────────────────────────────────────────────────┐
│          React SPA (Vite Build Tool)               │
├────────────────────────────────────────────────────┤
│  Pages:                                            │
│  • HomePage - Hero, featured rooms, reviews      │
│  • RoomsPage - Grid with filters                 │
│  • RoomDetailPage - Full room info + gallery     │
│  • BookingPage - Standalone booking form         │
│  • ContactPage - Contact form                    │
│  • NotFoundPage - 404 error page                 │
├────────────────────────────────────────────────────┤
│  Components:                                       │
│  • Navbar - Navigation with mobile menu          │
│  • HeroSection - Animated hero banner            │
│  • RoomCard - Room display card                  │
│  • RoomGrid - Responsive grid layout             │
│  • Gallery - Image gallery with navigation       │
│  • BookingForm - Form with validation            │
│  • Modal - Reusable dialog component             │
│  • Footer - Site footer with links               │
├────────────────────────────────────────────────────┤
│  Data Layer (Mock Data - No Backend):             │
│  • rooms.json - 6 hotels with full details       │
│  • amenities.json - 16 amenity types             │
│  • reviews.json - 6 guest testimonials           │
└────────────────────────────────────────────────────┘
```

**Design Philosophy**: No backend complexity. All data is client-side mock data. Forms provide visual feedback but don't persist data (perfect for a demo).

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18 (latest)
- **Build Tool**: Vite (ultra-fast bundler)
- **Styling**: Tailwind CSS 3 (utility-first CSS)
- **Animations**: Framer Motion (smooth animations)
- **Routing**: React Router v6 (client-side SPA routing)
- **Icons**: Lucide React (clean icon library)

### Development Tools
- **Package Manager**: npm
- **Build**: Vite (6.7s build time, 103 KB gzipped)
- **Linting**: ESLint (code quality)
- **Environment**: Node.js 16+

### Deployment
- **GitHub Pages** - Static site hosting
- **No Backend Needed** - Pure frontend application
- **Production Ready** - Optimized build, zero external dependencies

---

## 📁 Project Structure

```
hotel-sample/
├── frontend/                          # React application
│   ├── src/
│   │   ├── components/               # Reusable UI components
│   │   │   ├── Navbar.jsx            # Navigation header
│   │   │   ├── HeroSection.jsx       # Hero banner
│   │   │   ├── RoomCard.jsx          # Room display card
│   │   │   ├── RoomGrid.jsx          # Room grid layout
│   │   │   ├── Gallery.jsx           # Image gallery
│   │   │   ├── BookingForm.jsx       # Booking form
│   │   │   ├── Modal.jsx             # Dialog component
│   │   │   ├── Footer.jsx            # Site footer
│   │   │   ├── AmenityBadge.jsx      # Amenity badge
│   │   │   ├── ReviewCard.jsx        # Review card
│   │   │   └── ...more components
│   │   ├── pages/                    # Page components
│   │   │   ├── HomePage.jsx          # Home page
│   │   │   ├── RoomsPage.jsx         # Rooms listing
│   │   │   ├── RoomDetailPage.jsx    # Room details
│   │   │   ├── BookingPage.jsx       # Booking page
│   │   │   ├── ContactPage.jsx       # Contact page
│   │   │   └── NotFoundPage.jsx      # 404 page
│   │   ├── data/                     # Mock data
│   │   │   ├── rooms.json            # Room data
│   │   │   ├── amenities.json        # Amenity data
│   │   │   └── reviews.json          # Review data
│   │   ├── App.jsx                   # Root component with routing
│   │   └── main.jsx                  # Entry point
│   ├── index.html                    # HTML template
│   ├── vite.config.js                # Vite configuration
│   ├── tailwind.config.js            # Tailwind configuration
│   ├── package.json                  # Dependencies
│   └── dist/                         # Build output (created after npm run build)
│
├── docs/                             # Documentation
├── .git/                             # Version control
├── README.md                         # This file
└── package.json                      # Root package.json

```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16 or higher
- npm or yarn
- Git

### Installation

1. **Clone the repository**:
```bash
git clone https://github.com/yourusername/hotel-sample.git
cd hotel-sample
```

2. **Install dependencies**:
```bash
cd frontend
npm install
```

3. **Start the development server**:
```bash
npm run dev
```

The application will be available at **http://localhost:3000** with hot module replacement (HMR) enabled.

### Development Commands

```bash
# Start development server with HMR
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

---

## 📱 Pages Overview

### Home Page (`/`)
- Hero section with animated background and CTA button
- Featured rooms showcase (3 rooms)
- Amenities grid (16 amenity types)
- Guest testimonials carousel
- Newsletter signup section
- Full Framer Motion animations

### Rooms Page (`/rooms`)
- Grid of all rooms (6 available)
- Real-time price range filter
- Amenity checkboxes for filtering
- Responsive card layout
- Click any card to view full details

### Room Details Page (`/rooms/:id`)
- Dynamic room information from URL parameter
- Large image gallery with thumbnail navigation
- Room specifications (capacity, type, price)
- Complete amenities list
- Integrated booking form with price calculation
- Booking confirmation modal

### Booking Page (`/booking`)
- Standalone booking interface
- Feature cards highlighting benefits
- Complete booking form
- Booking policies section
- Success confirmation modal

### Contact Page (`/contact`)
- Contact information (phone, email, address)
- Contact form with validation
- Social media links
- Business hours display
- Success confirmation modal

### 404 Page
- Animated 404 display
- Quick navigation to main pages
- Professional error handling

---

## 🎨 Features in Detail

### Form Validation
- **Booking Form**: 
  - Date validation (checkout > check-in)
  - Guest count minimum (1-6)
  - Email format validation
  - Name required
  - Real-time error feedback
  - Live price calculation

- **Contact Form**:
  - Email validation
  - Name, subject, message required
  - Real-time validation feedback

### Image Gallery
- Main image display with fade transitions
- Thumbnail navigation with click-to-select
- Previous/Next arrow buttons
- Image counter (e.g., "3/5")
- Smooth transitions between images
- Fully responsive on mobile

### Animations (Framer Motion)
- **Page Transitions**: Smooth fade-in as pages load
- **Form Fields**: Staggered animation (50ms delay each)
- **Modal Entrance**: Scale effect (0.9→1x) with fade
- **Gallery**: Image fade transitions (300ms)
- **Cards**: Hover lift effect with shadow increase
- **Scroll Reveals**: Elements animate when scrolled into view

### Responsive Design
- **Mobile** (< 640px): Single column, hamburger menu, optimized spacing
- **Tablet** (640-1024px): Two-column grid, side-by-side layouts
- **Desktop** (> 1024px): Multi-column grids, full navigation

---

## 🌐 Deployment

### Deploy to GitHub Pages

The project is configured for GitHub Pages deployment. The `base` path is set to `/hotel-sample/` in `vite.config.js`.

#### Step 1: Push to GitHub
```bash
git add .
git commit -m "Ready for GitHub Pages deployment"
git push origin main
```

#### Step 2: Enable GitHub Pages
1. Go to your repository settings on GitHub
2. Navigate to **Pages** section
3. Select **Deploy from a branch** under "Build and deployment"
4. Select **main** branch and **/ (root)** folder
5. Click **Save**

#### Step 3: Build and Deploy
```bash
npm run build
```

The `dist/` folder is ready for deployment. GitHub Pages will automatically serve it at `https://yourusername.github.io/hotel-sample/`

### Deploy to Other Platforms

**Vercel** (recommended):
```bash
npm i -g vercel
vercel
```

**Netlify**:
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

**Any Static Host**:
1. Run `npm run build`
2. Upload the `dist/` folder contents
3. Configure the server to route all URLs to `index.html` (for React Router)

---

## 📊 Performance Metrics

### Bundle Size
- **JavaScript**: 342.64 KB (gzipped: 103.81 KB)
- **CSS**: 22.53 KB (gzipped: 4.71 KB)
- **Total**: ~108 KB gzipped (production-ready)

### Performance Features
- ✅ Lazy loading on images
- ✅ Optimized Unsplash URLs with size parameters
- ✅ GPU-accelerated animations (transform, opacity only)
- ✅ Viewport-triggered animations (no off-screen rendering)
- ✅ Code splitting ready
- ✅ Zero jank (60fps animations)

---

## 🔧 Customization

### Change Hotel Name
Edit the following files:
- `frontend/src/components/Navbar.jsx` - Logo text
- `frontend/src/components/HeroSection.jsx` - Hero title
- `frontend/src/components/Footer.jsx` - Footer branding

### Add More Rooms
1. Add rooms to `frontend/src/data/rooms.json`
2. Add room images to Unsplash URLs
3. Rooms will automatically appear in listings

### Update Colors
1. Edit `frontend/tailwind.config.js` for Tailwind colors
2. Update class names in components (e.g., `bg-blue-600` → `bg-indigo-600`)

### Customize Mock Data
1. Edit `frontend/src/data/rooms.json` for rooms
2. Edit `frontend/src/data/amenities.json` for amenities
3. Edit `frontend/src/data/reviews.json` for testimonials

---

## 🤝 Contributing

Contributions are welcome! Here's how to contribute:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** and test thoroughly
4. **Commit with clear messages**: `git commit -m "Add amazing feature"`
5. **Push to your fork**: `git push origin feature/amazing-feature`
6. **Open a Pull Request** with a clear description

---

## 📝 License

This project is open source and available under the MIT License. See LICENSE file for details.

---

## 🙏 Credits

- **Hotel Images**: [Unsplash](https://unsplash.com) - Free stock photos
- **Icons**: [Lucide React](https://lucide.dev) - Beautiful icons
- **Animations**: [Framer Motion](https://www.framer.com/motion) - React animation library
- **Styling**: [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework

---

## 📧 Support

Have questions or found a bug? Please open an issue on GitHub or contact the maintainers.

---

## 🎯 Future Enhancements

Potential features for future releases:
- [ ] Dark mode toggle
- [ ] Guest reviews on room detail pages
- [ ] Room comparison feature
- [ ] Wishlist/favorites functionality
- [ ] Payment integration (Stripe/Razorpay)
- [ ] Email booking confirmations
- [ ] Admin dashboard for room management
- [ ] Advanced search with multiple filters
- [ ] Virtual room tours
- [ ] Google Maps integration

---

**Last Updated**: March 2024 | **Version**: 2.0.0

**Made with ❤️ for hotel websites and travel demos**

