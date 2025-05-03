
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative bg-portfolio-light pt-16">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left content */}
          <div className="flex-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-dark mb-6">
              Hi, I'm <span className="text-portfolio-blue">J</span>oel
              <br />
              <span className="text-portfolio-blue">D</span>avid 
              <span className="text-portfolio-blue"> L</span>ópez
              <br />
              <span className="text-portfolio-blue">C</span>astro 
              <span className="text-portfolio-blue">H</span>ernandez
            </h1>
            <p className="text-lg md:text-xl text-portfolio-gray mb-8">
              Front-end developer passionate about creating stunning digital experiences that 
              combine beautiful design with functional interfaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToProjects}
                className="bg-portfolio-blue hover:bg-blue-600 text-white px-8 py-6 text-lg"
              >
                View My Work
              </Button>
              <Button
                onClick={scrollToContact}
                variant="outline" 
                className="border-portfolio-blue text-portfolio-blue hover:bg-blue-50 px-8 py-6 text-lg"
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Right content - Hero image */}
          <div className="flex-1 animate-fade-in">
            <div className="relative">
              <div className="w-full h-[500px] bg-portfolio-blue/10 rounded-lg flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Joel David López Castro Hernandez" 
                  className="w-[80%] h-[80%] object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-portfolio-blue/5 rounded-lg -z-10"></div>
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-portfolio-blue/5 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-portfolio-blue" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
