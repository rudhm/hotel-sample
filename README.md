# Hotel Demo Website

A clean, modern hotel landing page and demo website built with React and Tailwind CSS. This project showcases a visually impressive, fully responsive hotel website with interactive features like room browsing, filtering, and a booking form—all powered by mock data for a lightweight, easy-to-maintain demo.

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)

## Features

### Visual Design
- ✅ **Modern Hero Section**: Large imagery and compelling call-to-action
- ✅ **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- ✅ **Smooth Animations**: Hover effects, transitions, and scroll animations
- ✅ **Professional Layout**: Clean card designs, elegant typography, proper spacing
- ✅ **Visual Components**: Room cards, reviews, badges, modals with polished UI

### Functionality
- ✅ **Room Browsing**: View detailed information about each room
- ✅ **Filtering & Sorting**: Filter by price, room type, amenities; sort by price or rating
- ✅ **Booking Form**: Interactive form with date picker and validation
- ✅ **Review Display**: Guest testimonials with ratings
- ✅ **Confirmation Modal**: Thank you message after booking form submission

### Technical
- ✅ **Mock Data**: All data loaded from JSON files (no database needed)
- ✅ **Component Architecture**: Reusable, modular React components
- ✅ **Fast Performance**: Optimized images and minimal dependencies
- ✅ **Easy to Customize**: Simple file structure, well-organized code

## Architecture

```
┌─────────────────────────────────────────────┐
│    React Frontend (Next.js or Vite)         │
│  Components: Hero, Cards, Forms, Modals    │
│  Pages: Home, Rooms, Details, Confirmation │
└──────────────────┬──────────────────────────┘
                   │
                   ↓
        ┌──────────────────────┐
        │  Mock Data (JSON)    │
        │  • rooms.json        │
        │  • amenities.json    │
        │  • reviews.json      │
        └──────────────────────┘
```

**No backend complexity.** All data is client-side mock data. Booking forms submit with a confirmation message but don't persist data.

## Tech Stack

### Frontend (Primary)
- **Library**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **HTTP Client**: Axios (for future API calls if needed)
- **Icons**: Lucide React
- **Date Picker**: React Calendar (optional)

### Backend (Minimal)
- **Runtime**: Node.js (optional, for static file serving)
- **Framework**: Express.js (lightweight, no API complexity)
- **Linting**: ESLint

### Data
- **Format**: JSON (mock data only)
- **Storage**: Local files in `frontend/src/data/`
- **No Database**: All demo data is client-side

## Project Structure

```
hotel-sample/
├── frontend/                       # React application (main focus)
│   ├── src/
│   │   ├── components/            # Reusable UI components
│   │   ├── pages/                 # Page components
│   │   ├── data/                  # Mock data JSON files
│   │   ├── utils/                 # Helper utilities
│   │   ├── App.jsx                # Root component
│   │   └── main.jsx               # Entry point
│   ├── public/                    # Static assets
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── backend/                       # Optional minimal Express server
│   ├── src/
│   │   └── server.js             # Static file server
│   └── package.json
│
├── database/                      # Not used (for reference)
│   └── schema.sql                # PostgreSQL schema (deprecated)
│
├── README.md                      # This file
├── .gitignore
└── docs/                          # Documentation (future)

## Getting Started

### Prerequisites
- Node.js v16 or higher
- npm or yarn

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/rudhm/hotel-sample.git
   cd hotel-sample
   ```

2. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

3. **Access the website**
   - Open http://localhost:3000 in your browser
   - Explore rooms, filter by preferences, try the booking form

### Optional: Run Backend
```bash
cd backend
npm install
npm run dev
```

The backend serves static files on http://localhost:5000 (optional for deployment).

## Mock Data Structure

The website uses JSON files for all data:

```
frontend/src/data/
├── rooms.json          # Hotel rooms with details
├── amenities.json      # Available amenities
└── reviews.json        # Guest testimonials
```

You can easily customize this data to match your hotel's information.

## Component Library

Key reusable components:
- **Navbar**: Navigation header with logo and menu
- **HeroSection**: Large hero image with CTA
- **RoomCard**: Individual room display
- **RoomGrid**: Responsive grid layout
- **BookingForm**: Interactive booking form
- **ReviewCard**: Guest testimonial display
- **Modal**: Reusable dialog component
- **Footer**: Site footer with links

## API Documentation

This is a **demo website**, not an API-driven application. There are no API endpoints to document.

All data comes from local JSON files loaded on the frontend. The booking form submission is for demo purposes only and does not persist data.

If you need to extend this with a real backend later, consider:
- Building a Node.js/Express API
- Adding a database (PostgreSQL, MongoDB, etc.)
- Implementing authentication if needed

## Development Workflow

### Running the App
```bash
cd frontend
npm run dev
```

### Building for Production
```bash
cd frontend
npm run build
```

The `dist/` folder contains your optimized static website.

### Linting
```bash
npm run lint        # Check for issues
npm run lint:fix    # Auto-fix issues
```

## Phases Overview

This project is being built in phases:

1. **Phase 1** ✅ - Project Restructuring (Complete)
2. **Phase 2** - Frontend Setup & Mock Data
3. **Phase 3** - Core Components (10 reusable components)
4. **Phase 4** - Pages & Layout
5. **Phase 5** - Interactions & Features
6. **Phase 6** - Design Polish & Animations
7. **Phase 7** - Simple Backend (Optional)
8. **Phase 8** - Deployment & Documentation
9. **Phase 9** - Extra Enhancements

## Contributing

This is a demo/portfolio project. Contributions welcome!

For improvements:
1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## License

MIT License - see LICENSE file for details

## Contact

For questions or feedback, please open an issue on GitHub.

---

**Last Updated**: Phase 1 Complete - Project Direction Updated
**Status**: Building visual demo website 🏨✨
