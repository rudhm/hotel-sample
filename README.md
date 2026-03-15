# Hotel Management System

A modern, full-stack hotel management platform built with Node.js, React, and PostgreSQL. This system enables efficient management of hotel operations including room inventory, guest management, and booking reservations.

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)

## Features

### Core Functionality
- ✅ **Room Management**: Create, update, and manage hotel rooms with pricing and capacity
- ✅ **Guest Management**: Maintain guest profiles and contact information
- ✅ **Booking System**: Handle room reservations with conflict detection
- ✅ **Availability Checking**: Real-time room availability verification
- ✅ **Price Calculation**: Automatic total price calculation based on stay duration
- ✅ **Admin Dashboard**: Analytics and business metrics (occupancy, revenue, trends)
- ✅ **Admin Authentication**: Secure login with JWT tokens

### Advanced Features (Planned)
- 📅 **Dynamic Pricing**: Weekday vs. weekend pricing variations
- 💳 **Payment Integration**: Stripe/Razorpay integration for online payments
- 📧 **Email Notifications**: Booking confirmations and cancellations
- 🔍 **Search & Filters**: Advanced room search by type, price, capacity
- ⭐ **Guest Reviews**: Rating and feedback system

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                   Frontend (React)                       │
│  Dashboard | Rooms | Bookings | Admin Panel | Auth      │
└─────────────────┬───────────────────────────────────────┘
                  │ HTTP/REST API
                  ↓
┌─────────────────────────────────────────────────────────┐
│            Backend (Node.js + Express)                   │
│  Controllers | Services | Middleware | Routes           │
├─────────────────────────────────────────────────────────┤
│  • Input Validation & Error Handling                    │
│  • JWT Authentication & Authorization                   │
│  • Business Logic (Booking, Availability, Pricing)      │
└─────────────────┬───────────────────────────────────────┘
                  │ SQL Queries
                  ↓
┌─────────────────────────────────────────────────────────┐
│           Database (PostgreSQL)                          │
│  Rooms | Guests | Bookings | Admin Users                │
└─────────────────────────────────────────────────────────┘
```

## Tech Stack

### Backend
- **Runtime**: Node.js (v16+)
- **Framework**: Express.js (REST API)
- **Database**: PostgreSQL
- **Validation**: Joi
- **Auth**: JWT + bcryptjs
- **Testing**: Jest + Supertest
- **Linting**: ESLint

### Frontend
- **Library**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Icons**: Lucide React
- **Routing**: React Router

### DevOps
- **Containerization**: Docker
- **Orchestration**: Docker Compose
- **CI/CD**: GitHub Actions

## Project Structure

```
hotel-system/
├── backend/                    # Express.js API server
│   ├── src/
│   │   ├── app.js             # Express app configuration
│   │   ├── server.js          # Server entry point
│   │   ├── controllers/       # Route handlers
│   │   ├── models/            # Database models
│   │   ├── routes/            # API routes
│   │   ├── middleware/        # Custom middleware
│   │   ├── services/          # Business logic
│   │   └── utils/             # Helper utilities
│   ├── tests/                 # Test files
│   ├── package.json
│   ├── .env.example
│   └── Dockerfile
│
├── frontend/                   # React application
│   ├── src/
│   │   ├── main.jsx           # Entry point
│   │   ├── App.jsx            # Root component
│   │   ├── components/        # Reusable components
│   │   ├── pages/             # Page components
│   │   ├── services/          # API services
│   │   └── utils/             # Helper functions
│   ├── public/                # Static files
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── .env.example
│   └── Dockerfile
│
├── database/
│   └── schema.sql             # PostgreSQL schema
│
├── docs/                      # Documentation
│   ├── API.md                 # API endpoints
│   ├── ARCHITECTURE.md        # System design
│   └── SETUP.md               # Setup guide
│
├── docker-compose.yml         # Multi-container setup
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites
- Node.js v16 or higher
- PostgreSQL v12 or higher
- Docker and Docker Compose (optional, for containerized setup)

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/rudhm/hotel-sample.git
   cd hotel-sample
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Edit .env with your database credentials
   npm run dev
   ```

3. **Setup Frontend** (in a new terminal)
   ```bash
   cd frontend
   npm install
   cp .env.example .env
   npm run dev
   ```

4. **Setup Database**
   ```bash
   # Create PostgreSQL database
   createdb hotel_db
   
   # Import schema
   psql hotel_db < ../database/schema.sql
   ```

5. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000/api
   - Health Check: http://localhost:5000/api/health

### Docker Setup

```bash
docker-compose up -d
```

This will start:
- PostgreSQL database on port 5432
- Node.js backend on port 5000
- React frontend on port 3000

## API Documentation

### Core Endpoints

#### Rooms
- `GET /api/rooms` - List all rooms
- `POST /api/rooms` - Create a room (admin)
- `GET /api/rooms/:id` - Get room details
- `PATCH /api/rooms/:id` - Update room (admin)
- `DELETE /api/rooms/:id` - Delete room (admin)

#### Guests
- `GET /api/guests` - List all guests
- `POST /api/guests` - Create guest
- `GET /api/guests/:id` - Get guest details

#### Bookings
- `GET /api/bookings` - List bookings
- `POST /api/bookings` - Create booking
- `GET /api/bookings/:id` - Get booking details
- `DELETE /api/bookings/:id` - Cancel booking

#### Authentication
- `POST /api/auth/login` - Admin login
- `POST /api/auth/refresh` - Refresh JWT token

For detailed API documentation, see [docs/API.md](docs/API.md)

## Development Workflow

### Running Tests
```bash
cd backend
npm test
npm run test:watch  # Watch mode
```

### Linting
```bash
npm run lint        # Check for issues
npm run lint:fix    # Auto-fix issues
```

### Building for Production
```bash
# Backend
cd backend
npm install --production

# Frontend
cd frontend
npm run build
```

## Phases Overview

This project is being built in phases:

1. **Phase 1** ✅ - Project Restructuring (current)
2. **Phase 2** - Backend API Foundation
3. **Phase 3** - Booking Logic & Validation
4. **Phase 4** - Frontend Development
5. **Phase 5** - Admin Dashboard & Analytics
6. **Phase 6** - Authentication & Authorization
7. **Phase 7** - DevOps & Deployment
8. **Phase 8** - Documentation & Polish
9. **Phase 9** - Advanced Features

## Contributing

This is a portfolio project. For contributions:

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## License

MIT License - see LICENSE file for details

## Contact

For questions or feedback, please open an issue on GitHub.

---

**Last Updated**: Phase 1 - Project Restructuring
**Status**: Under active development 🚀
