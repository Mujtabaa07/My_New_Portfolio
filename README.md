# 🚀 Mohamed Mujtaba - Portfolio Website

A modern, interactive portfolio website built with React.js, featuring stunning 3D animations, responsive design, and a clean user interface. This project showcases my skills as a Full-Stack Developer with an emphasis on modern web technologies and user experience.

![Portfolio Preview](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop&q=80)

## ✨ Features

### 🎨 **Interactive Design**
- **3D Lanyard Animation**: Physics-based draggable lanyard card in the loading screen
- **Aurora Background**: Dynamic animated background effects
- **Magnetic Interactions**: Hover effects with magnetic attraction
- **Tilt Effects**: 3D card tilting with mouse movement
- **Decrypt Text Animation**: Text reveals with scrambling effects

### 📱 **Fully Responsive**
- Mobile-first design approach
- Optimized for all screen sizes (mobile, tablet, desktop)
- Touch-friendly interactions
- Hidden scrollbars for clean appearance

### 🌟 **Modern UI/UX**
- Dark theme with glassmorphism effects
- Smooth animations and transitions
- Interactive navigation with magnetic effects
- Clean, minimal design aesthetic

### 📄 **Comprehensive Sections**
- **Home**: Hero section with rotating tech stack display
- **About**: Personal information, skills, education, and experience
- **Projects**: Interactive project showcase with 3D view and filtering
- **Contact**: Contact form with social links and information

### 🛠 **Advanced Project Showcase**
- Standard grid view and 3D interactive view
- Project filtering by category (Full-Stack, Frontend, Backend)
- Featured projects highlighting
- Live demo and GitHub links
- Technology stack visualization

## 🛠 Tech Stack

### **Frontend**
- **React.js** - UI library
- **React Router** - Navigation
- **Framer Motion** - Animations
- **Three.js & React Three Fiber** - 3D graphics
- **Tailwind CSS** - Styling

### **Build Tools**
- **Vite** - Build tool and dev server
- **ESLint** - Code linting
- **PostCSS** - CSS processing

### **3D & Physics**
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for React Three Fiber
- **@react-three/rapier** - Physics engine
- **Three.js** - 3D graphics library

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mujtabaa07/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

### Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist/` directory.

## 📁 Project Structure

```
my-portfolio/
├── public/                 # Static assets
│   └── vite.svg
├── src/
│   ├── components/         # Reusable components
│   │   ├── Aurora.jsx      # Animated background
│   │   ├── ClickSpark.jsx  # Click animation effects
│   │   ├── DecryptedText.jsx # Text scramble animation
│   │   ├── HeroSection.jsx
│   │   ├── InfiniteMenu.jsx # 3D project carousel
│   │   ├── Lanyard.jsx     # 3D lanyard animation
│   │   ├── Magnet.jsx      # Magnetic hover effects
│   │   ├── Navigation.jsx  # Navigation component
│   │   ├── RotatingText.jsx # Rotating text animation
│   │   ├── ScrollReveal.jsx
│   │   ├── ScrollVelocity.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── TiltedCard.jsx  # 3D tilt card effect
│   │   └── TextCursor.jsx  # Custom cursor effects
│   ├── pages/              # Page components
│   │   ├── About.jsx       # About page
│   │   ├── Contact.jsx     # Contact page
│   │   ├── Home.jsx        # Landing page
│   │   ├── Loading.jsx     # Loading screen
│   │   └── Projects.jsx    # Projects showcase
│   ├── assets/             # Static assets
│   │   ├── card.glb        # 3D card model
│   │   ├── lanyard.svg     # Lanyard texture
│   │   ├── Mujtaba_Resume.pdf
│   │   └── react.svg
│   ├── App.jsx             # Main app component
│   ├── App.css             # Global styles
│   ├── index.css           # Base styles
│   └── main.jsx            # Entry point
├── eslint.config.js        # ESLint configuration
├── package.json            # Dependencies and scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.js          # Vite configuration
└── README.md               # This file
```

## 🎯 Key Components

### **Loading Screen**
- 3D physics-based lanyard card
- Smooth loading counter
- Clean, minimal design

### **Navigation**
- Magnetic hover effects
- Responsive design
- Smooth transitions

### **Project Showcase**
- Dual view modes (Standard/3D Interactive)
- Category filtering
- Technology stack display
- Live demo and source code links

### **Contact Form**
- Form validation
- Social media links
- Contact information
- Success/error states

## 🌟 Featured Projects

1. **Coffee Shop Platform** - Full-Stack e-commerce platform with React, Node.js, MongoDB
2. **GitHub PR Tracker** - GitHub integration with analytics using Next.js and TypeScript
3. **Animation Website** - Interactive portfolio with custom animations
4. **Library Management Backend** - REST API with authentication and database management
5. **eCommerce Shopping Platform** - React TypeScript with Supabase integration

## 📱 Responsive Design

The portfolio is fully responsive with:
- **Mobile**: Optimized touch interactions, stacked layouts
- **Tablet**: Balanced grid systems, touch-friendly buttons
- **Desktop**: Full interactive experience, hover effects

## 🎨 Design Features

- **Glassmorphism**: Modern glass-like UI elements
- **Dark Theme**: Eye-friendly dark color scheme
- **Gradient Accents**: Subtle color gradients
- **Smooth Animations**: 60fps animations throughout
- **Interactive Elements**: Hover states and micro-interactions

## 🚀 Performance Optimizations

- **Lazy Loading**: Components load as needed
- **Optimized Images**: Proper image sizing and compression
- **Smooth Scrolling**: Hidden scrollbars with maintained functionality
- **Efficient Animations**: Hardware-accelerated CSS animations
- **Code Splitting**: Optimized bundle sizes

## 🔧 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
```

## 📞 Contact

**Mohamed Mujtaba**
- 📧 Email: [mohamedmujtaba07@gmail.com](mailto:mohamedmujtaba07@gmail.com)
- 💼 LinkedIn: [mohamed-mujtaba](https://www.linkedin.com/in/mohamed-mujtaba/)
- 🐙 GitHub: [Mujtabaa07](https://github.com/Mujtabaa07/)
- 📍 Location: Bangalore, India

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Three.js Community** for amazing 3D graphics capabilities
- **Framer Motion** for smooth animations
- **React Three Fiber** for React integration with Three.js
- **Tailwind CSS** for utility-first styling
- **Unsplash** for high-quality images

---

⭐ **If you found this portfolio helpful, please consider giving it a star!**

*Built with ❤️ by Mohamed Mujtaba*
