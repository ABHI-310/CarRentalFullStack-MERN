# CarRental - Luxury Car Rental Platform

A full-stack **MERN** application for renting premium vehicles. Users can browse, search, and book luxury cars, while owners can list and manage their vehicles through a dedicated dashboard.

---

# Features

##

* Live Website Link: https://carrental-xi-taupe.vercel.app 

## User

* JWT Authentication
* User Registration & Login
* Browse all available cars
* Search cars by brand, model, category, or transmission
* Filter cars by pickup location and rental dates
* View detailed car information
* Book rental cars
* View booking history
* Responsive UI

## Owner

* Become an Owner
* Add new cars with image upload
* Manage listed cars
* Toggle car availability
* Delete cars
* View all bookings
* Update booking status
* Owner Dashboard
  * Total Cars
  * Total Bookings
  * Pending Bookings
  * Confirmed Bookings
  * Monthly Revenue
* Update profile picture

---

# Tech Stack

## Frontend

* React
* Vite
* React Router DOM
* Tailwind CSS
* Axios
* Motion (Framer Motion)
* React Hot Toast

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Multer
* Cloudinary

---

# Project Structure

```text
CarRental
│
├── client
│   ├── src
│   ├── public
│   ├── package.json
│   └── vercel.json
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── package.json
│   └── vercel.json
│
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/<your-username>/car-rental.git
cd car-rental
```

## Install Frontend

```bash
cd client
npm install
```

## Install Backend

```bash
cd ../server
npm install
```

---

# Environment Variables

## Backend (`server/.env`)

```env
PORT=5000
NODE_ENV=development

MONGODB_URI=

JWT_SECRET=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

CLIENT_URL=http://localhost:5173
```

## Frontend (`client/.env`)

```env
VITE_BASE_URL=http://localhost:5000
VITE_CURRENCY=₹
```

---

# Running Locally

## Backend

```bash
cd server
npm run dev
```

## Frontend

```bash
cd client
npm run dev
```

---

# API Modules

## User

* Register
* Login
* Fetch User
* Browse Cars

## Booking

* Create Booking
* Check Availability
* View User Bookings

## Owner

* Become Owner
* Dashboard Analytics
* Add Car
* Manage Cars
* Toggle Availability
* Delete Car
* Manage Bookings
* Change Booking Status
* Update Profile Image

---

# Screens

* Home
* Browse Cars
* Car Details
* Login / Register
* My Bookings
* Owner Dashboard
* Manage Cars
* Manage Bookings
* Add Car

---

# Future Improvements

* Online Payments
* Google OAuth
* Reviews & Ratings
* Wishlist
* Email Notifications
* Booking Cancellation
* Admin Panel
* Advanced Filters
* Real-time Booking Updates

---

# Deployment

## Frontend

Vercel

## Backend

Vercel

## Database

MongoDB Atlas

## Media Storage

Cloudinary

---

# License

This project is licensed under the **MIT License**.

---

# Author

Developed as a full-stack MERN application demonstrating:

* JWT Authentication
* REST APIs
* Role-Based Authorization
* Cloud Image Uploads
* Complete Booking Workflow
* Responsive Frontend
* Dashboard Analytics