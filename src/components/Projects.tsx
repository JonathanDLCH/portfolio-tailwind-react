import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const projects = [
	{
		id: 1,
		title: 'Desarrollo de Software',
		description:
			'Nuestro equipo de expertos en desarrollo de software trabaja mano a mano contigo para crear soluciones que optimicen tus procesos empresariales. Desde sistemas de gestión de inventarios y puntos de venta eficientes, hasta aplicaciones web personalizadas, nos encargamos de desarrollar software que se adapte a tus necesidades y te brinde una ventaja competitiva.',
		tags: ['Requerimientos', 'Diseño', 'Implementación', 'Despliegue'],
		image:
			'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3',
		link: '/servicios-code',
	},
	{
		id: 2,
		title: 'Trabajamos con PYMES',
		description:
			'Entendemos las particularidades y desafíos que enfrentan las PYMES, por eso nos enfocamos en ofrecer soluciones accesibles y adaptadas a tus recursos y necesidades específicas. Nos apasiona ayudar a las empresas a crecer y tener éxito en el mundo digital, brindándote las herramientas necesarias para competir en el mercado actual.',
		tags: ['Inovación', 'Adaptabilidad', 'Automatización', 'Capacitación'],
		image:
			'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3',
		link: '/servicios-code',
	},
	{
		id: 3,
		title: 'Diseño Impactante',
		description:
			'El diseño es una poderosa herramienta para cautivar a tus clientes y transmitir la esencia de tu marca. En CoDesign, ofrecemos servicios de diseño gráfico que van desde la creación de imágenes y logotipos impresionantes hasta el manejo estratégico de tus redes sociales. Nos aseguramos de que tu presencia en línea sea visualmente atractiva, coherente y efectiva para generar un impacto duradero.',
		tags: ['Marca', 'Formateria', 'Redes'],
		image:
			'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3',
		link: '/servicios-design',
	},
];

const Projects = () => {
	return (
		<section id="projects" className="py-24 bg-portfolio-light dark:bg-gray-800">
			<div className="container mx-auto px-6">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
					{projects.map((project) => (
						<div
							key={project.id}
							className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
						>
							<div className="h-48 overflow-hidden">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
								/>
							</div>

							<div className="p-6">
								<h3 className="text-xl font-bold text-portfolio-dark dark:text-white mb-2">
									{project.title}
								</h3>
								<p className="text-portfolio-gray dark:text-gray-300 mb-4">
									{project.description}
								</p>

								<div className="flex flex-wrap gap-2 mb-4">
									{project.tags.map((tag, index) => (
										<span
											key={index}
											className="bg-portfolio-blue/10 dark:bg-portfolio-blue/20 text-portfolio-blue text-sm px-3 py-1 rounded-full"
										>
											{tag}
										</span>
									))}
								</div>

								<a
									href={project.link}
									className="inline-flex items-center text-portfolio-blue hover:underline font-medium"
								>
									Solicitar{' '}
									<ChevronRight size={16} className="ml-1" />
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
