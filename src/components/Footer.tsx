
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
            <h3 className="text-2xl font-bold mb-4">Jonathan DLCH</h3>
            <p className="text-gray-300 mb-4">
            Desarrollador Full-stack apasionado por crear experiencias digitales impresionantes que combinan un hermoso diseño con interfaces funcionales.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="inline-flex items-center text-gray-300 hover:text-portfolio-blue transition-colors"
                >
                  <ChevronRight size={16} className="mr-1" /> WhatsApp
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="inline-flex items-center text-gray-300 hover:text-portfolio-blue transition-colors"
                >
                  <ChevronRight size={16} className="mr-1" /> CV
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="inline-flex items-center text-gray-300 hover:text-portfolio-blue transition-colors"
                >
                  <ChevronRight size={16} className="mr-1" /> Sobre mí
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center text-gray-300 hover:text-portfolio-blue transition-colors"
                >
                  <ChevronRight size={16} className="mr-1" /> Contacto
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Puebla, Puebla</li>
              <li>
                <a href="mailto:hello@jdlch.com" className="hover:text-portfolio-blue transition-colors">
                  jonathan@code-sign.dev
                </a>
              </li>
              <li>
                <a href="tel:+522226062058" className="hover:text-portfolio-blue transition-colors">
                  +(52) 222 606 2058
                </a>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Social</h3>
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
          <p>© {currentYear} Codesign.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
