# Harshal Patil - Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing skills as a full-stack web developer and designed to attract potential clients for freelance work.

## 🚀 Features

- **Modern Design**: Clean, elegant, and professional design
- **Responsive**: Fully responsive across all devices
- **Smooth Animations**: Beautiful scroll animations using Framer Motion
- **Interactive Elements**: Hover effects and micro-interactions
- **Contact Form**: Functional contact form for client inquiries
- **Project Showcase**: Filterable project gallery
- **Skills Display**: Animated skill progress bars
- **SEO Optimized**: Meta tags and proper structure

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: CSS3 with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Customization Guide

### Personal Information

Update the following files with your personal information:

#### 1. Contact Information
- **File**: `src/components/Hero.jsx`
- **File**: `src/components/Contact.jsx`
- **File**: `src/components/Footer.jsx`

Update these fields:
```javascript
// Social links
{ icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
{ icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
{ icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' }

// Contact info
email: "your.email@example.com"
phone: "+91 98765 43210"
location: "Mumbai, India"
```

#### 2. About Section
- **File**: `src/components/About.jsx`

Update:
- Personal description
- Experience stats
- Personal information

#### 3. Skills Section
- **File**: `src/components/Skills.jsx`

Update skill categories and proficiency levels:
```javascript
const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", level: 90 },
      { name: "JavaScript", level: 95 },
      // Add your skills here
    ]
  }
]
```

#### 4. Projects Section
- **File**: `src/components/Projects.jsx`

Update the projects array with your actual projects:
```javascript
const projects = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Project description...",
    image: "project-image-url",
    category: "frontend", // or "backend", "fullstack"
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://your-project.com",
    githubUrl: "https://github.com/yourusername/project",
    featured: true
  }
]
```

#### 5. Meta Information
- **File**: `index.html`

Update:
- Title
- Meta description
- Keywords
- Author

### Styling Customization

#### Colors
- **File**: `src/index.css`

Update CSS custom properties in the `:root` selector:
```css
:root {
  --primary-color: #2563eb;
  --primary-dark: #1d4ed8;
  --secondary-color: #64748b;
  --accent-color: #f59e0b;
  /* ... other colors */
}
```

#### Fonts
- **File**: `src/index.css`

Update the Google Fonts import:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
```

### Adding New Sections

To add a new section:

1. Create a new component in `src/components/`
2. Import and add it to `src/App.jsx`
3. Add navigation link in `src/components/Header.jsx`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

### Other Platforms
The built files in the `dist` folder can be deployed to any static hosting service.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions, please open an issue.

## 📞 Support

If you need help customizing this portfolio, feel free to reach out!

---

**Made with ❤️ by Harshal Patil**
