
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
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
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
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
    <section id="contact" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-dark dark:text-white mb-3">Get In Touch</h2>
          <div className="h-1 w-20 bg-portfolio-blue mx-auto mb-6"></div>
          <p className="text-portfolio-gray dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out. I'm always 
            open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-portfolio-dark dark:text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-portfolio-dark dark:text-white mb-2">Location</h4>
                <p className="text-portfolio-gray dark:text-gray-300">San Francisco, California</p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-portfolio-dark dark:text-white mb-2">Email</h4>
                <a href="mailto:hello@jdlch.com" className="text-portfolio-blue hover:underline">hello@jdlch.com</a>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-portfolio-dark dark:text-white mb-2">Phone</h4>
                <a href="tel:+1234567890" className="text-portfolio-blue hover:underline">+1 (234) 567-890</a>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-portfolio-dark dark:text-white mb-2">Social Media</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-portfolio-gray dark:text-gray-300 hover:text-portfolio-blue transition-colors">
                    LinkedIn
                  </a>
                  <a href="#" className="text-portfolio-gray dark:text-gray-300 hover:text-portfolio-blue transition-colors">
                    GitHub
                  </a>
                  <a href="#" className="text-portfolio-gray dark:text-gray-300 hover:text-portfolio-blue transition-colors">
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-portfolio-dark dark:text-white mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-portfolio-gray dark:text-gray-300 mb-1">Your Name</label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-portfolio-gray/30 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:border-portfolio-blue focus:ring-portfolio-blue"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-portfolio-gray dark:text-gray-300 mb-1">Your Email</label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-portfolio-gray/30 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:border-portfolio-blue focus:ring-portfolio-blue"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-portfolio-gray dark:text-gray-300 mb-1">Subject</label>
                <Input 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border-portfolio-gray/30 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:border-portfolio-blue focus:ring-portfolio-blue"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-portfolio-gray dark:text-gray-300 mb-1">Your Message</label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full border-portfolio-gray/30 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:border-portfolio-blue focus:ring-portfolio-blue resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-portfolio-blue hover:bg-blue-600 text-white px-8"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
