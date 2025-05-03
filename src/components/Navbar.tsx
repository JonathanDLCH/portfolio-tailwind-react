
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="font-bold text-2xl text-portfolio-dark">
          JDLCH
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10">
          <button 
            onClick={() => scrollToSection('home')} 
            className="font-medium text-portfolio-dark hover:text-portfolio-blue transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="font-medium text-portfolio-dark hover:text-portfolio-blue transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('projects')} 
            className="font-medium text-portfolio-dark hover:text-portfolio-blue transition-colors"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="font-medium text-portfolio-dark hover:text-portfolio-blue transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* Contact Button - Desktop */}
        <div className="hidden md:block">
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-portfolio-blue hover:bg-blue-600 text-white"
          >
            Let's Connect
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-portfolio-dark focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="container mx-auto px-6 flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('home')} 
              className="font-medium text-portfolio-dark hover:text-portfolio-blue transition-colors text-left py-2"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="font-medium text-portfolio-dark hover:text-portfolio-blue transition-colors text-left py-2"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="font-medium text-portfolio-dark hover:text-portfolio-blue transition-colors text-left py-2"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="font-medium text-portfolio-dark hover:text-portfolio-blue transition-colors text-left py-2"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-portfolio-blue hover:bg-blue-600 text-white w-full"
            >
              Let's Connect
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
