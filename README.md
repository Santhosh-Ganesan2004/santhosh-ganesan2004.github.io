# Santhosh Ganesan - AI + IoT Engineer Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, showcasing my expertise in AI and IoT, alongside my certifications and projects.

## 🚀 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dynamic Content**: Projects and certifications loaded from markdown files for easy updates
- **Modern UI**: Clean and professional with dark and light theme options
- **Contact Integration**: Direct Gmail integration for contact form
- **Modal Certifications**: Professional certifications displayed in interactive modals
- **Project Showcase**: Detailed project pages with markdown rendering and rich media

## 🛠️ Technologies Used

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Markdown**: react-markdown with remark-gfm
- **Icons**: Lucide React
- **Build Tool**: Vite

## 📁 Project Structure

```plaintext
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

2. The application dynamically renders new markdown files added to the `projects` directory, so no manual updates to the code are required.

## 📜 How to Add New Certifications

1. **Create a markdown file** in `src/data/certifications/`:
   ```markdown
   # Certification Name

   **Issuer**: Organization Name
   **Date**: Year

   ## Description
   Details about the certification...
   ```

2. Certifications are dynamically rendered from the `certifications` directory and will appear in the modal without additional coding changes.

## 🚀 Development Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/santhosh-ganesan2004/portfolio
   cd portfolio
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
     "homepage": "https://santhosh-ganesan2004.github.io/",
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
- **Dark Mode**: Black and blue gradient backgrounds with white text
- **Light Mode**: White and blue gradient backgrounds with black text
- Tailwind config allows easy updates to color schemes and themes.

### Personal Information
Update the following files with your information:
- `src/components/Layout.tsx` - Name, logo, social links
- `src/pages/Home.tsx` - Bio, photo, description
- `src/components/ContactForm.tsx` - Email address

### Social Media Links
Update social media URLs in `src/components/Layout.tsx`:
```typescript
const socialLinks = {
  linkedin: 'https://linkedin.com/in/santhoshganesan2004',
  twitter: 'https://x.com/I_Am_Santi7704',
  github: 'https://github.com/Santhosh-Ganesan2004'
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
