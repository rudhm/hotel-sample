import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MobileTopNav from './components/MobileTopNav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import RoomsPage from './pages/RoomsPage';
import RoomDetailPage from './pages/RoomDetailPage';
import BookingPage from './pages/BookingPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950 transition-colors duration-200">
        <MobileTopNav cartCount={cartCount} />
        <main className="flex-grow pt-16 lg:pt-0">
          <Routes>
            <Route path="/" element={<HomePage cartCount={cartCount} setCartCount={setCartCount} />} />
            <Route path="/rooms" element={<RoomsPage />} />
            <Route path="/rooms/:id" element={<RoomDetailPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
