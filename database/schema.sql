-- Hotel Management System Database Schema
-- PostgreSQL

-- Create schema
CREATE SCHEMA IF NOT EXISTS hotel;
SET search_path TO hotel, public;

-- Admin Users Table
CREATE TABLE admin_users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_admin_users_email ON admin_users(email);

-- Rooms Table
CREATE TABLE rooms (
    id SERIAL PRIMARY KEY,
    number VARCHAR(10) UNIQUE NOT NULL,
    type VARCHAR(50) NOT NULL, -- e.g., 'single', 'double', 'suite'
    price_per_night DECIMAL(10, 2) NOT NULL,
    capacity INT NOT NULL,
    status VARCHAR(20) DEFAULT 'available', -- 'available', 'unavailable', 'maintenance'
    description TEXT,
    amenities TEXT[], -- Array of amenities
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_rooms_status ON rooms(status);
CREATE INDEX idx_rooms_type ON rooms(type);

-- Guests Table
CREATE TABLE guests (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20),
    address TEXT,
    city VARCHAR(100),
    country VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_guests_email ON guests(email);
CREATE INDEX idx_guests_phone ON guests(phone);

-- Bookings Table
CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    room_id INT NOT NULL REFERENCES rooms(id) ON DELETE CASCADE,
    guest_id INT NOT NULL REFERENCES guests(id) ON DELETE CASCADE,
    check_in DATE NOT NULL,
    check_out DATE NOT NULL,
    number_of_nights INT NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    status VARCHAR(20) DEFAULT 'pending', -- 'pending', 'confirmed', 'checked_in', 'checked_out', 'cancelled'
    special_requests TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT check_checkout_after_checkin CHECK (check_out > check_in)
);

CREATE INDEX idx_bookings_room_id ON bookings(room_id);
CREATE INDEX idx_bookings_guest_id ON bookings(guest_id);
CREATE INDEX idx_bookings_status ON bookings(status);
CREATE INDEX idx_bookings_check_in ON bookings(check_in);
CREATE INDEX idx_bookings_check_out ON bookings(check_out);

-- Create function to automatically update 'updated_at' timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at columns
CREATE TRIGGER update_admin_users_updated_at BEFORE UPDATE ON admin_users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_rooms_updated_at BEFORE UPDATE ON rooms
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_guests_updated_at BEFORE UPDATE ON guests
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_bookings_updated_at BEFORE UPDATE ON bookings
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Sample data
INSERT INTO rooms (number, type, price_per_night, capacity, status, description, amenities)
VALUES
    ('101', 'single', 50.00, 1, 'available', 'Cozy single room with city view', ARRAY['WiFi', 'AC', 'TV']),
    ('102', 'double', 80.00, 2, 'available', 'Spacious double room with bathroom', ARRAY['WiFi', 'AC', 'TV', 'Mini Bar']),
    ('103', 'suite', 150.00, 4, 'available', 'Luxury suite with living area', ARRAY['WiFi', 'AC', 'TV', 'Mini Bar', 'Jacuzzi']),
    ('104', 'double', 80.00, 2, 'available', 'Double room with balcony', ARRAY['WiFi', 'AC', 'TV']),
    ('105', 'single', 50.00, 1, 'available', 'Single room standard', ARRAY['WiFi', 'AC']);
