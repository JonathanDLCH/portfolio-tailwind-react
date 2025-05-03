
import { Button } from '@/components/ui/button';

const About = () => {
  const downloadResume = () => {
    // This would be where you'd link to your actual resume file
    alert('Resume download would happen here');
  };

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-dark mb-3">About Me</h2>
          <div className="h-1 w-20 bg-portfolio-blue mx-auto"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left side - Skills */}
          <div className="flex-1 animate-fade-in">
            <h3 className="text-2xl font-bold text-portfolio-dark mb-6">My Skills</h3>
            
            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="skill-item">
                <h4 className="text-lg font-medium text-portfolio-dark mb-2">Front-End Development</h4>
                <p className="text-portfolio-gray">HTML, CSS, JavaScript, React, Tailwind CSS</p>
              </div>
              
              <div className="skill-item">
                <h4 className="text-lg font-medium text-portfolio-dark mb-2">UI/UX Design</h4>
                <p className="text-portfolio-gray">Figma, Sketch, Adobe XD, User Research</p>
              </div>
              
              <div className="skill-item">
                <h4 className="text-lg font-medium text-portfolio-dark mb-2">Back-End Development</h4>
                <p className="text-portfolio-gray">Node.js, Express, MongoDB, Firebase</p>
              </div>
              
              <div className="skill-item">
                <h4 className="text-lg font-medium text-portfolio-dark mb-2">Tools & Methods</h4>
                <p className="text-portfolio-gray">Git, Agile, REST APIs, GraphQL</p>
              </div>
            </div>
            
            <Button onClick={downloadResume} className="mt-8 bg-portfolio-blue hover:bg-blue-600 text-white">
              Download Resume
            </Button>
          </div>
          
          {/* Right side - Text content */}
          <div className="flex-1 animate-fade-in">
            <h3 className="text-2xl font-bold text-portfolio-dark mb-6">Who Am I?</h3>
            
            <div className="space-y-4 text-portfolio-gray">
              <p>
                I'm a passionate Front-End Developer with over 5 years of experience creating 
                responsive and intuitive user interfaces. My journey in web development began 
                during my university years, and it quickly became my calling.
              </p>
              
              <p>
                I specialize in building modern, performance-optimized websites and applications 
                using the latest technologies. My approach combines technical expertise with an 
                eye for design, ensuring that every project I work on is both functional and visually appealing.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new design trends, contributing to 
                open-source projects, or sharing knowledge through writing tutorials and mentoring 
                aspiring developers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
