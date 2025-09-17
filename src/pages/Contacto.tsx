import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Contacto = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "¡Mensaje enviado!",
        description: "Gracias por contactarme. Te responderé pronto.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-portfolio-dark">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-portfolio-blue to-blue-600">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Contacto
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            ¿Tienes un proyecto en mente? ¡Hablemos! Estoy aquí para ayudarte a materializar tus ideas.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-24 bg-white dark:bg-portfolio-dark">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Personal Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-portfolio-dark dark:text-white mb-6">
                  Información Personal
                </h2>
                <p className="text-portfolio-gray dark:text-gray-300 text-lg">
                  Soy Jonathan De La Cruz Hernández, desarrollador y diseñador apasionado por crear 
                  soluciones digitales innovadoras. Con experiencia en desarrollo web y diseño gráfico, 
                  me especializo en transformar ideas en realidades digitales.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-portfolio-blue/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-portfolio-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-portfolio-dark dark:text-white mb-1">Email</h3>
                    <a 
                      href="mailto:jonathan.dlch@example.com" 
                      className="text-portfolio-blue hover:underline"
                    >
                      jonathan.dlch@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-portfolio-blue/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-portfolio-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-portfolio-dark dark:text-white mb-1">Teléfono</h3>
                    <a 
                      href="tel:+525551234567" 
                      className="text-portfolio-blue hover:underline"
                    >
                      +52 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-portfolio-blue/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-portfolio-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-portfolio-dark dark:text-white mb-1">Ubicación</h3>
                    <p className="text-portfolio-gray dark:text-gray-300">Ciudad de México, México</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-portfolio-blue/10 p-3 rounded-lg">
                    <Calendar className="w-6 h-6 text-portfolio-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-portfolio-dark dark:text-white mb-1">Disponibilidad</h3>
                    <p className="text-portfolio-gray dark:text-gray-300">
                      Lunes a Viernes, 9:00 AM - 6:00 PM (GMT-6)
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-xl font-bold text-portfolio-dark dark:text-white mb-4">
                  Especialidades
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'React', 'TypeScript', 'Node.js', 'Python', 'UI/UX Design', 
                    'Branding', 'Adobe Creative Suite', 'Figma', 'Tailwind CSS'
                  ].map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-portfolio-blue/10 text-portfolio-blue rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-portfolio-dark dark:text-white mb-6">
                Envíame un Mensaje
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-portfolio-gray dark:text-gray-300 mb-2">
                      Nombre
                    </label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-portfolio-gray dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-portfolio-gray dark:text-gray-300 mb-2">
                    Asunto
                  </label>
                  <Input 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-portfolio-gray dark:text-gray-300 mb-2">
                    Mensaje
                  </label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-portfolio-blue hover:bg-blue-600 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacto;