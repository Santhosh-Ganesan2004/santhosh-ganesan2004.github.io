
# Alex Johnson - AI + IoT Engineer Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, showcasing AI and IoT projects with dynamic markdown content.

## 🚀 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dynamic Content**: Projects and certifications loaded from markdown files
- **Modern UI**: Gradient backgrounds, smooth animations, and hover effects
- **Contact Integration**: Direct Gmail integration for contact form
- **Modal Certifications**: Professional certifications displayed in elegant modals
- **Project Showcase**: Detailed project pages with markdown rendering

## 🛠️ Technologies Used

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Markdown**: react-markdown with remark-gfm
- **Icons**: Lucide React
- **Build Tool**: Vite

## 📁 Project Structure

```
src/
├── components/
│   ├── Layout.tsx              # Main layout with navigation and footer
│   ├── ContactForm.tsx         # Contact form with Gmail integration
│   └── CertificationsModal.tsx # Modal for displaying certifications
├── pages/
│   ├── Home.tsx               # Landing page with bio and navigation
│   ├── Projects.tsx           # Projects grid view
│   └── ProjectDetail.tsx      # Individual project pages
├── data/
│   ├── projects/              # Markdown files for projects
│   └── certifications/        # Markdown files for certifications
└── App.tsx                    # Main app component with routing
```

## 🎯 How to Add New Projects

1. **Create a new markdown file** in `src/data/projects/`:
   ```markdown
   # Project Title
   
   ## Overview
   Brief description of the project...
   
   ## Key Features
   - Feature 1
   - Feature 2
   
   ## Technical Details
   Technical implementation details...
   ```

2. **Add project to the projects array** in `src/pages/Projects.tsx`:
   ```typescript
   {
     id: 'project-slug',
     title: 'Project Title',
     description: 'Brief description',
     image: 'https://example.com/image.jpg',
     technologies: ['Tech1', 'Tech2'],
     link: 'https://github.com/username/repo'
   }
   ```

3. **Update ProjectDetail.tsx** to include the new project data.

## 📜 How to Add New Certifications

1. **Create a markdown file** in `src/data/certifications/`:
   ```markdown
   # Certification Name
   
   **Issuer**: Organization Name
   **Date**: Year
   
   ## Description
   Details about the certification...
   ```

2. **Add certification** to the certifications array in `src/components/CertificationsModal.tsx`:
   ```typescript
   {
     id: 'cert-id',
     name: 'Certification Name',
     description: 'Brief description',
     link: 'https://certificate-url.com',
     issuer: 'Organization',
     date: 'Year'
   }
   ```

## 🚀 Development Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 🌐 Deployment to GitHub Pages

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json**:
   ```json
   {
     "homepage": "https://yourusername.github.io/repository-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

## 🎨 Customization

### Colors and Styling
- Primary colors are defined in the Tailwind config
- Gradient backgrounds use blue/cyan color scheme
- Dark theme with slate backgrounds

### Personal Information
Update the following files with your information:
- `src/components/Layout.tsx` - Name, logo, social links
- `src/pages/Home.tsx` - Bio, photo, description
- `src/components/ContactForm.tsx` - Email address

### Social Media Links
Update social media URLs in `src/components/Layout.tsx`:
```typescript
const socialLinks = {
  linkedin: 'https://linkedin.com/in/yourusername',
  twitter: 'https://twitter.com/yourusername',
  instagram: 'https://instagram.com/yourusername',
  github: 'https://github.com/yourusername'
};
```

## 📱 Responsive Design Features

- **Mobile-first approach** with responsive breakpoints
- **Collapsible navigation** with hamburger menu on mobile
- **Flexible grid layouts** that adapt to screen size
- **Touch-friendly interactions** for mobile devices
- **Optimized images** with responsive sizing

## 🔧 Performance Optimizations

- **Code splitting** with React Router
- **Lazy loading** for images and components
- **Optimized builds** with Vite
- **Minimal dependencies** for faster load times

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Alex Johnson
