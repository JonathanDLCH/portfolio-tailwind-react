import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import LogoBA from '@/assets/LogoBA.png';
import LogoNG from '@/assets/LogoNG.png';

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
      scrolled ? 'bg-white dark:bg-portfolio-dark shadow-md py-3' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center font-bold text-2xl">
          <img
            src={LogoNG}
            alt="Codesign"
            className="h-10 w-auto block dark:hidden"
          />
          <img
            src={LogoBA}
            alt="Codesign"
            className="h-10 w-auto hidden dark:block"
          />
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10">
          <button>
            <a
              href="/"
              className="font-medium text-portfolio-dark dark:text-white hover:text-portfolio-blue dark:hover:text-portfolio-blue transition-colors"
            >
              Inicio
            </a>
          </button>
          <a 
            href="/servicios-code"
            className="font-medium text-portfolio-dark dark:text-white hover:text-portfolio-blue dark:hover:text-portfolio-blue transition-colors"
          >
            Servicios Code
          </a>
          <button 
            onClick={() => scrollToSection('projects')} 
            className="font-medium text-portfolio-dark dark:text-white hover:text-portfolio-blue dark:hover:text-portfolio-blue transition-colors"
          >
            Servicios Design
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="font-medium text-portfolio-dark dark:text-white hover:text-portfolio-blue dark:hover:text-portfolio-blue transition-colors"
          >
            Contacto
          </button>
        </nav>

        {/* Contact Button and Theme Toggle - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-portfolio-blue hover:bg-blue-600 text-white"
          >
            Portafolio
          </Button>
        </div>

        {/* Mobile Menu Button and Theme Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <button 
            className="text-portfolio-dark dark:text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-portfolio-dark border-t border-gray-100 dark:border-gray-800 py-4">
          <div className="container mx-auto px-6 flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('home')} 
              className="font-medium text-portfolio-dark dark:text-white hover:text-portfolio-blue dark:hover:text-portfolio-blue transition-colors text-left py-2"
            >
              Inicio
            </button>
            <a 
              href="/servicios-code"
              className="font-medium text-portfolio-dark dark:text-white hover:text-portfolio-blue dark:hover:text-portfolio-blue transition-colors text-left py-2 block"
            >
              Servicios Code
            </a>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="font-medium text-portfolio-dark dark:text-white hover:text-portfolio-blue dark:hover:text-portfolio-blue transition-colors text-left py-2"
            >
              Servicios Design
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="font-medium text-portfolio-dark dark:text-white hover:text-portfolio-blue dark:hover:text-portfolio-blue transition-colors text-left py-2"
            >
              Contacto
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-portfolio-blue hover:bg-blue-600 text-white w-full"
            >
              Portafolio
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
