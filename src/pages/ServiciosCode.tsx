import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Code, Globe, Zap, Database, Smartphone, Cloud } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const services = [
  {
    id: 1,
    title: 'Desarrollo Web',
    description: 'Creamos aplicaciones web modernas y responsivas utilizando las últimas tecnologías como React, Next.js, y TypeScript. Desde landing pages hasta aplicaciones complejas.',
    icon: Globe,
    features: ['React/Next.js', 'TypeScript', 'Responsive Design', 'SEO Optimizado']
  },
  {
    id: 2,
    title: 'Aplicaciones Móviles',
    description: 'Desarrollo de aplicaciones móviles nativas e híbridas para iOS y Android. Experiencias de usuario fluidas y rendimiento optimizado.',
    icon: Smartphone,
    features: ['React Native', 'Flutter', 'iOS & Android', 'UI/UX Optimizado']
  },
  {
    id: 3,
    title: 'Automatización de Procesos',
    description: 'Automatizamos tareas repetitivas y optimizamos flujos de trabajo empresariales. Ahorra tiempo y reduce errores humanos.',
    icon: Zap,
    features: ['Scripts Personalizados', 'APIs Integration', 'Workflows', 'Monitoring']
  },
  {
    id: 4,
    title: 'Backend & APIs',
    description: 'Desarrollo de APIs robustas y escalables. Arquitecturas serverless y microservicios para máximo rendimiento.',
    icon: Database,
    features: ['REST APIs', 'GraphQL', 'Serverless', 'Microservicios']
  },
  {
    id: 5,
    title: 'Soluciones Cloud',
    description: 'Migración y optimización de infraestructura en la nube. Escalabilidad automática y alta disponibilidad.',
    icon: Cloud,
    features: ['AWS/Azure/GCP', 'DevOps', 'CI/CD', 'Monitoring']
  },
  {
    id: 6,
    title: 'Sistemas Personalizados',
    description: 'Desarrollo de software a medida para necesidades específicas. CRM, ERP, sistemas de gestión y más.',
    icon: Code,
    features: ['Arquitectura Custom', 'Integrations', 'Escalabilidad', 'Mantenimiento']
  }
];

const ServiciosCode = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    description: '',
    budget: '',
    timeline: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Gracias por tu consulta. Te contactaremos pronto.');
  };

  return (
    <div className="min-h-screen bg-portfolio-light dark:bg-portfolio-dark">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-portfolio-blue/10 to-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-portfolio-dark dark:text-white mb-6">
              Servicios <span className="text-portfolio-blue">CODE</span>
            </h1>
            <p className="text-xl text-portfolio-gray dark:text-gray-300 mb-8">
              Transformamos tus ideas en soluciones digitales innovadoras. Desarrollo de software profesional 
              para impulsar tu negocio hacia el futuro.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-portfolio-dark dark:text-white mb-12">
            Nuestros Servicios de Desarrollo
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.id} className="p-6 bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-portfolio-blue/10 dark:bg-portfolio-blue/20 p-3 rounded-lg mr-4">
                      <IconComponent className="w-6 h-6 text-portfolio-blue" />
                    </div>
                    <h3 className="text-xl font-bold text-portfolio-dark dark:text-white">{service.title}</h3>
                  </div>
                  
                  <p className="text-portfolio-gray dark:text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-portfolio-blue rounded-full mr-3"></div>
                        <span className="text-sm text-portfolio-gray dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Request Form */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-portfolio-dark dark:text-white mb-4">
                Solicita Información de tu Proyecto
              </h2>
              <p className="text-portfolio-gray dark:text-gray-300">
                Cuéntanos sobre tu proyecto y te proporcionaremos una cotización personalizada
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-portfolio-dark dark:text-white mb-2">
                    Nombre completo *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-portfolio-dark dark:text-white mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-portfolio-dark dark:text-white mb-2">
                    Empresa
                  </label>
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-portfolio-dark dark:text-white mb-2">
                    Tipo de servicio *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-portfolio-dark dark:text-white"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="web">Desarrollo Web</option>
                    <option value="mobile">Aplicaciones Móviles</option>
                    <option value="automation">Automatización</option>
                    <option value="backend">Backend & APIs</option>
                    <option value="cloud">Soluciones Cloud</option>
                    <option value="custom">Sistema Personalizado</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-portfolio-dark dark:text-white mb-2">
                  Descripción del proyecto *
                </label>
                <Textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full"
                  placeholder="Describe tu proyecto, objetivos, funcionalidades requeridas..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-portfolio-dark dark:text-white mb-2">
                    Presupuesto estimado
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-portfolio-dark dark:text-white"
                  >
                    <option value="">Selecciona rango</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-portfolio-dark dark:text-white mb-2">
                    Timeline deseado
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-portfolio-dark dark:text-white"
                  >
                    <option value="">Selecciona timeline</option>
                    <option value="1-2m">1-2 meses</option>
                    <option value="3-4m">3-4 meses</option>
                    <option value="6m+">6+ meses</option>
                  </select>
                </div>
              </div>

              <div className="text-center">
                <Button 
                  type="submit"
                  className="bg-portfolio-blue hover:bg-blue-600 text-white px-8 py-3 text-lg"
                >
                  Solicitar Cotización
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiciosCode;