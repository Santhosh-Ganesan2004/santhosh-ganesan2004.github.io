
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin, Twitter, Instagram, Github } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-light-ash-gray dark:bg-jet-black text-jet-black dark:text-light-ash-gray font-roboto transition-colors">
      {/* Navigation */}
      <nav className="bg-steel-blue border-b border-burnt-orange/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-burnt-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <span className="text-xl font-bold text-white">
                Alex Johnson
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/') 
                    ? 'bg-burnt-orange text-white' 
                    : 'text-white hover:text-burnt-orange hover:bg-steel-blue/80'
                }`}
              >
                About Me
              </Link>
              <Link
                to="/projects"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/projects') 
                    ? 'bg-burnt-orange text-white' 
                    : 'text-white hover:text-burnt-orange hover:bg-steel-blue/80'
                }`}
              >
                Projects
              </Link>
              <Link
                to="/certifications"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/certifications') 
                    ? 'bg-burnt-orange text-white' 
                    : 'text-white hover:text-burnt-orange hover:bg-steel-blue/80'
                }`}
              >
                Certifications
              </Link>
              <ThemeToggle />
            </div>

            {/* Mobile menu button and theme toggle */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button
                onClick={toggleMenu}
                className="text-white hover:text-burnt-orange focus:outline-none focus:text-burnt-orange transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-steel-blue/80 rounded-lg mt-2">
                <Link
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive('/') 
                      ? 'bg-burnt-orange text-white' 
                      : 'text-white hover:text-burnt-orange hover:bg-steel-blue/60'
                  }`}
                >
                  About Me
                </Link>
                <Link
                  to="/projects"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive('/projects') 
                      ? 'bg-burnt-orange text-white' 
                      : 'text-white hover:text-burnt-orange hover:bg-steel-blue/60'
                  }`}
                >
                  Projects
                </Link>
                <Link
                  to="/certifications"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive('/certifications') 
                      ? 'bg-burnt-orange text-white' 
                      : 'text-white hover:text-burnt-orange hover:bg-steel-blue/60'
                  }`}
                >
                  Certifications
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-steel-blue border-t border-burnt-orange/20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-light-ash-gray text-sm">
                © 2024 Alex Johnson. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://linkedin.com/in/alexjohnson"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-ash-gray hover:text-military-green transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com/alexjohnson"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-ash-gray hover:text-military-green transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com/alexjohnson"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-ash-gray hover:text-military-green transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://github.com/alexjohnson"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-ash-gray hover:text-military-green transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
