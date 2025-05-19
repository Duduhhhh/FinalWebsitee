your_project_folder/
├── index.html
├── config.php
├── process_contact.php
└── admin/
    ├── login.php
    ├── index.php
    ├── logout.php
    └── test.php 

-- Create the database
CREATE DATABASE IF NOT EXISTS servpro_db;
USE servpro_db;

-- Users table
CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(20) NOT NULL,
    alternate_phone VARCHAR(20),
    password VARCHAR(255) NOT NULL,
    address TEXT,
    city VARCHAR(50),
    province VARCHAR(50),
    barangay VARCHAR(50),
    postal_code VARCHAR(10),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Service Bookings table
CREATE TABLE service_bookings (
    booking_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    service_type ENUM('relocation', 'installation', 'repair', 'supply', 'cleaning', 'pumpdown') NOT NULL,
    ac_type ENUM('window', 'split', 'package') NOT NULL,
    brand VARCHAR(50) NOT NULL,
    capacity DECIMAL(3,1) NOT NULL,
    issue_description TEXT,
    preferred_date DATE NOT NULL,
    preferred_time TIME NOT NULL,
    urgency ENUM('normal', 'urgent', 'emergency') DEFAULT 'normal',
    status ENUM('pending', 'confirmed', 'in_progress', 'completed', 'cancelled') DEFAULT 'pending',
    special_instructions TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Products table
CREATE TABLE products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    brand VARCHAR(50) NOT NULL,
    model_name VARCHAR(100) NOT NULL,
    ac_type ENUM('window', 'split', 'package') NOT NULL,
    capacity DECIMAL(3,1) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    description TEXT,
    features TEXT,
    stock_quantity INT DEFAULT 0,
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Service History table
CREATE TABLE service_history (
    history_id INT PRIMARY KEY AUTO_INCREMENT,
    booking_id INT,
    technician_id INT,
    service_date DATE NOT NULL,
    service_type VARCHAR(50) NOT NULL,
    description TEXT,
    cost DECIMAL(10,2) NOT NULL,
    status ENUM('completed', 'cancelled') DEFAULT 'completed',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (booking_id) REFERENCES service_bookings(booking_id)
);

-- Technicians table
CREATE TABLE technicians (
    technician_id INT PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(100) NOT NULL,
    specialization VARCHAR(100),
    contact_number VARCHAR(20) NOT NULL,
    email VARCHAR(100),
    status ENUM('available', 'busy', 'offline') DEFAULT 'available',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Maintenance Schedule table
CREATE TABLE maintenance_schedule (
    schedule_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    ac_model VARCHAR(100) NOT NULL,
    ac_brand VARCHAR(50) NOT NULL,
    last_service_date DATE NOT NULL,
    next_service_date DATE NOT NULL,
    service_type VARCHAR(50) NOT NULL,
    service_frequency ENUM('monthly', 'quarterly', 'biannual', 'annual') NOT NULL,
    notes TEXT,
    reminder_type ENUM('email', 'sms', 'both') DEFAULT 'email',
    status ENUM('pending', 'completed', 'cancelled') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Customer Feedback table
CREATE TABLE customer_feedback (
    feedback_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    service_id INT,
    rating INT CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    service_type VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (service_id) REFERENCES service_bookings(booking_id)
);

-- Warranty Information table
CREATE TABLE warranty_info (
    warranty_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    product_id INT,
    serial_number VARCHAR(100) UNIQUE NOT NULL,
    purchase_date DATE NOT NULL,
    expiry_date DATE NOT NULL,
    coverage_type VARCHAR(50) NOT NULL,
    status ENUM('active', 'expired') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- Create indexes for better performance
CREATE INDEX idx_service_bookings_user ON service_bookings(user_id);
CREATE INDEX idx_service_bookings_status ON service_bookings(status);
CREATE INDEX idx_maintenance_schedule_user ON maintenance_schedule(user_id);
CREATE INDEX idx_maintenance_schedule_status ON maintenance_schedule(status);
CREATE INDEX idx_warranty_info_serial ON warranty_info(serial_number);
CREATE INDEX idx_warranty_info_status ON warranty_info(status); 