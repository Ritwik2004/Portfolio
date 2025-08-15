# Ritwik Kundu - Portfolio Website

A modern, responsive portfolio website built with React.js showcasing my journey as a Full-Stack Web Developer and final-year B.Tech IT student at Haldia Institute of Technology.

## 🌟 Features

- **Responsive Design**: Fully responsive across all devices with mobile-first approach
- **Modern UI/UX**: Dark theme with yellow accent colors and smooth transitions
- **Single Page Application**: Built with React Router for seamless navigation
- **Interactive Components**: Dynamic navigation with active state indicators
- **Contact Form**: Functional contact form with email integration
- **Project Showcase**: Detailed project cards with live demo and GitHub links
- **Professional Layout**: Clean sidebar with personal information and main content area

## 🚀 Live Demo

[View Portfolio](https://your-portfolio-link.com)

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Pages Overview](#-pages-overview)
- [Components](#-components)
- [Installation](#-installation)
- [Usage](#-usage)
- [Environment Variables](#-environment-variables)
- [Contact](#-contact)

## 🛠 Tech Stack

- **Frontend**: React.js, React Router DOM
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **HTTP Client**: Axios
- **Notifications**: React Hot Toast
- **Build Tool**: Vite
- **Deployment**: Vercel

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── Components/
│   │   ├── Home.component.jsx
│   │   ├── Navbar.component.jsx
│   │   └── Sidebar.component.jsx
│   ├── Pages/
│   │   ├── About.page.jsx
│   │   ├── Contact.page.jsx
│   │   ├── Home.page.jsx
│   │   ├── Portfolio.page.jsx
│   │   └── Resume.page.jsx
│   ├── assets/
│   │   └── assets.js
│   └── App.jsx
├── public/
├── package.json
└── README.md
```

## 📄 Pages Overview

### 🏠 Home Page
- **Route**: `/`
- **Component**: `HomeComponent`
- **Description**: Landing page with personal introduction, key skills highlight, and call-to-action buttons leading to About and Projects sections.

### 👨‍💻 About Page
- **Route**: `/about-me`
- **Component**: `AboutPage`
- **Description**: Detailed personal and professional background, technical expertise, current learning focus, and career goals.

### 📄 Resume Page
- **Route**: `/resume`
- **Component**: `Resume`
- **Description**: Comprehensive resume including education, technical skills, projects, achievements, and additional information.

### 💼 Portfolio Page
- **Route**: `/portfolio`
- **Component**: `PortFolio`
- **Description**: Showcase of major projects with descriptions, tech stacks, GitHub links, and live demos.

### 📧 Contact Page
- **Route**: `/contact`
- **Component**: `Contact`
- **Description**: Contact form with email integration and direct contact information including social media links.

## 🧩 Components

### Sidebar Component
- **File**: `Sidebar.component.jsx`
- **Features**: 
  - Profile avatar and name
  - Professional title
  - Contact information (Email, Phone, Birthday, Location)
  - Responsive design for mobile and desktop

### Navbar Component
- **File**: `Navbar.component.jsx`
- **Features**:
  - Dynamic page title showing current active section
  - Navigation links with active state highlighting
  - Responsive navigation for mobile devices
  - Smooth hover effects and transitions

### Home Component
- **File**: `Home.component.jsx`
- **Features**:
  - Hero section with animated greeting
  - Professional summary
  - Technology stack highlights
  - Call-to-action buttons for navigation

## ⚡ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ritwik2004/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🔧 Usage

### Development
```bash
npm run dev
```
Starts the development server at `http://localhost:5173`

### Build
```bash
npm run build
```
Creates an optimized production build in the `dist` directory

### Preview Production Build
```bash
npm run preview
```
Preview the production build locally

## 🌐 Environment Variables

Create a `.env.local` file in the root directory:

```env
VITE_BASE_URL=your_backend_api_url
```

**Required Variables:**
- `VITE_BASE_URL`: Backend API URL for contact form functionality

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px and above

## 🎨 Color Scheme

- **Background**: `#1e1e1f` (Dark Gray)
- **Secondary Background**: `#121212` (Darker Gray)
- **Accent**: `#fbbf24` (Yellow)
- **Text Primary**: `#ffffff` (White)
- **Text Secondary**: `#d1d5db` (Light Gray)
- **Borders**: `#383838` (Medium Gray)

## 🚀 Featured Projects

1. **Real-Time Chat Application**
   - Full-stack chat app with Socket.IO
   - Features: OTP auth, media sharing, online status
   - Tech: React.js, Node.js, MongoDB, Socket.IO

2. **AI Content Creation Platform**
   - AI-powered text and image generation
   - Integration with OpenAI and ClipDrop APIs
   - Tech: React.js, Node.js, Neon SQL, Clerk

3. **College Utility Platform**
   - Backend-focused project with role-based authentication
   - Tech: Node.js, Express.js, MongoDB, JWT

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

**Ritwik Kundu**
- **Email**: [ritwikkundu09@gmail.com](mailto:ritwikkundu09@gmail.com)
- **Phone**: +91 98833 98028
- **LinkedIn**: [linkedin.com/in/rik09](https://linkedin.com/in/rik09)
- **GitHub**: [github.com/Ritwik2004](https://github.com/Ritwik2004)
- **Location**: Hooghly, West Bengal, India

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ **If you found this portfolio helpful, please give it a star!**

Built with ❤️ by [Ritwik Kundu](https://github.com/Ritwik2004)