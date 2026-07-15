# Manish Kumar V - Portfolio Website

Welcome to my personal portfolio website! This project showcases my skills, experience, and projects as an AI Full Stack Developer. Built with modern web technologies, this responsive React application highlights my expertise in full-stack development, AI integration, and user-centric design.

## 🚀 Live Demo

[View Portfolio](https://manish-portfolio-kappa-two.vercel.app/)

## 📋 Table of Contents

- [About](#about)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contact](#contact)

## 📖 About

I'm Manish Kumar V, an AI Full Stack Developer passionate about creating innovative web applications and integrating AI solutions. This portfolio demonstrates my proficiency in React, Node.js, and various modern web technologies. It serves as a comprehensive showcase of my technical abilities, professional experience, and creative projects.

## 🛠 Technologies Used

### Frontend
- **React** (v19.2.3) - Core framework for building the user interface
- **Framer Motion** (v12.23.26) - Animation library for smooth transitions
- **React Three Fiber** (v9.4.2) - 3D graphics integration
- **React Three Drei** (v10.7.7) - Useful helpers for React Three Fiber
- **Lucide React** (v0.563.0) - Icon library
- **React Toastify** (v11.0.5) - Notification system

### Development Tools
- **Create React App** - Build setup
- **ESLint** - Code linting
- **Testing Library** - Unit testing framework

### Styling
- **CSS3** - Custom styling with responsive design
- **CSS Modules** - Scoped styling for components

## ✨ Features

### Core Sections
- **Hero Section**: Eye-catching introduction with animated elements and social links
- **About**: Personal background and professional summary
- **Skills**: Technical skills visualization with interactive elements
- **Experience**: Professional work history and achievements
- **Projects**: Showcase of key projects with descriptions and links
- **Education**: Academic background and certifications
- **Contact**: Contact form with EmailJS integration for direct messaging

### Technical Highlights
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion-powered transitions and scroll-triggered animations
- **3D Elements**: Integrated 3D icons and graphics using React Three Fiber
- **Form Handling**: Contact form with real-time validation and email sending
- **Performance Optimized**: Lazy loading and efficient rendering
- **Accessibility**: WCAG compliant design principles

## 🏗 Project Structure

```
portfolio_manish/
├── public/
│   ├── index.html
│   ├── manifest.json
│   ├── robots.txt
│   └── assets/ (images, icons, resume)
├── src/
│   ├── components/
│   │   ├── About.jsx & About.css
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx & Skills.css
│   ├── App.js & App.css
│   ├── index.js & index.css
│   └── styles.css
├── package.json
└── README.md
```

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/manish-vm/portfolio_manish.git
   cd portfolio_manish
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:3000` to view the portfolio.

## 📱 Usage

- **Navigation**: Use the navbar to jump between sections
- **Responsive**: Resize your browser or view on mobile devices to see responsive design
- **Contact**: Fill out the contact form to send me a message directly
- **Download CV**: Click the download button in the Hero section

## 🔧 Key Code Snippets

### Animated Section Component (App.js)
```javascript
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

// Usage in render
<motion.div initial="hidden" whileInView="visible" variants={sectionVariants} viewport={{ once: true }}>
  <Hero />
</motion.div>
```

### Hero Component Structure (Hero.jsx)
```jsx
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Hi, I'm <span>Manish</span></h1>
        <h4 className="Hero-para">AI Full Stack Developer</h4>
        <button className="download-btn">
          <a href="/Manish Kumar V - Resume.pdf">Download CV</a>
        </button>
        {/* Social links */}
      </div>
      <div className="hero-img">
        {/* Profile image and 3D tech icons */}
      </div>
    </section>
  );
};
```

## 📞 Contact

I'm always open to discussing new opportunities and collaborations!

- **Email**: [Your Email]
- **LinkedIn**: [https://www.linkedin.com/in/manish310a/](https://www.linkedin.com/in/manish310a/)
- **GitHub**: [https://github.com/manish-vm](https://github.com/manish-vm?tab=repositories)
- **Instagram**: [https://www.instagram.com/manish_vmk_/](https://www.instagram.com/manish_vmk_/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

*Built with ❤️ by Manish*
