
import { Button } from '@/components/ui/button';

const About = () => {
  const downloadResume = () => {
    // This would be where you'd link to your actual resume file
    alert('Resume download would happen here');
  };

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-dark dark:text-white mb-3">Nuestros servicios</h2>
          <div className="h-1 w-20 bg-portfolio-blue mx-auto"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left side - Skills */}
          <div className="flex-1 animate-fade-in">
            <h3 className="text-2xl font-bold text-portfolio-dark dark:text-white mb-6">Habilidades</h3>
            
            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="skill-item">
                <h4 className="text-lg font-medium text-portfolio-dark dark:text-white mb-2">Creación de aplicaciones</h4>
                <p className="text-portfolio-gray dark:text-gray-300">Aplicaciones de escritorio y web a la medida</p>
              </div>
              
              <div className="skill-item">
                <h4 className="text-lg font-medium text-portfolio-dark dark:text-white mb-2">Diseños</h4>
                <p className="text-portfolio-gray dark:text-gray-300">Branding, identidad visual y diseño web, fundamentales para la presencia digital.</p>
              </div>
              
              <div className="skill-item">
                <h4 className="text-lg font-medium text-portfolio-dark dark:text-white mb-2">Automatización y Digitalización</h4>
                <p className="text-portfolio-gray dark:text-gray-300">Optimización de procesos mediante automatización y digitalización</p>
              </div>
              
              <div className="skill-item">
                <h4 className="text-lg font-medium text-portfolio-dark dark:text-white mb-2">Reparación y Servicio Técnico</h4>
                <p className="text-portfolio-gray dark:text-gray-300">Soporte integral en hardware: Laptops, PC, Redes, Mantenimiento</p>
              </div>
            </div>
          </div>
          
          {/* Right side - Text content */}
          <div className="flex-1 animate-fade-in">
            <h3 className="text-2xl font-bold text-portfolio-dark dark:text-white mb-6">En Codesign</h3>
            
            <div className="space-y-4 text-portfolio-gray dark:text-gray-300">
              <p>
                Combinamos nuestra experiencia en desarrollo de software y diseño creativo para ofrecerte soluciones integrales que impulsen tu negocio. Nuestro enfoque centrado en el cliente nos permite entender tus metas y adaptarnos a tus requerimientos, garantizando resultados que superen tus expectativas.
              </p>
              
              <p>
                Descubre cómo nuestras soluciones digitales y servicios de diseño pueden transformar tu empresa. ¡Contacta con nosotros hoy mismo para una consulta gratuita y déjanos ayudarte a alcanzar tus objetivos!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
