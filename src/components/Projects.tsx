
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A fully responsive e-commerce platform built with React, Redux, and Node.js. Features include user authentication, product filtering, and payment processing.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3',
    link: '#'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'React DnD'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3',
    link: '#'
  },
  {
    id: 3,
    title: 'Health & Fitness Dashboard',
    description: 'A comprehensive health tracking dashboard that visualizes user fitness data, nutrition information, and workout statistics.',
    tags: ['React', 'Chart.js', 'Express', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3',
    link: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-portfolio-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-dark mb-3">My Projects</h2>
          <div className="h-1 w-20 bg-portfolio-blue mx-auto mb-6"></div>
          <p className="text-portfolio-gray max-w-2xl mx-auto">
            Here are some of my recent projects. Each one represents a unique challenge that I've 
            tackled with passion and technical expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-portfolio-dark mb-2">{project.title}</h3>
                <p className="text-portfolio-gray mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="bg-portfolio-blue/10 text-portfolio-blue text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link} 
                  className="inline-flex items-center text-portfolio-blue hover:underline font-medium"
                >
                  View Project <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-portfolio-blue hover:bg-blue-600 text-white">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
