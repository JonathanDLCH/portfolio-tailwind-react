
import { ChevronRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-portfolio-dark text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">JDLCH</h3>
            <p className="text-gray-300 mb-4">
              Front-end developer passionate about creating stunning digital experiences that 
              combine beautiful design with functional interfaces.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="inline-flex items-center text-gray-300 hover:text-portfolio-blue transition-colors"
                >
                  <ChevronRight size={16} className="mr-1" /> Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="inline-flex items-center text-gray-300 hover:text-portfolio-blue transition-colors"
                >
                  <ChevronRight size={16} className="mr-1" /> About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="inline-flex items-center text-gray-300 hover:text-portfolio-blue transition-colors"
                >
                  <ChevronRight size={16} className="mr-1" /> Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center text-gray-300 hover:text-portfolio-blue transition-colors"
                >
                  <ChevronRight size={16} className="mr-1" /> Contact
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li>San Francisco, California</li>
              <li>
                <a href="mailto:hello@jdlch.com" className="hover:text-portfolio-blue transition-colors">
                  hello@jdlch.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-portfolio-blue transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-portfolio-blue transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-300 hover:text-portfolio-blue transition-colors">
                GitHub
              </a>
              <a href="#" className="text-gray-300 hover:text-portfolio-blue transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© {currentYear} JDLCH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
