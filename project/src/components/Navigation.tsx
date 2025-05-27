
import { useState } from 'react';
import { Home, Search, Mail, Phone } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleContactClick = () => {
    toast({
      title: "Contact Us",
      description: "Redirecting to contact section...",
    });
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu if open
  };

  const handleNavigation = (sectionId: string, sectionName: string) => {
    toast({
      title: `Navigating to ${sectionName}`,
      description: `Scrolling to ${sectionName} section...`,
    });
    
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu if open
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card-dark border-b border-electric-500/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-electric-500 to-purple-500 rounded-lg flex items-center justify-center animate-glow">
              <Home className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gradient">Hive&in</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavigation('home', 'Home')}
              className="text-white hover:text-cyan-400 transition-colors duration-300 relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-electric-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => handleNavigation('properties', 'Properties')}
              className="text-white hover:text-cyan-400 transition-colors duration-300 relative group"
            >
              Properties
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-electric-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => handleNavigation('services', 'Services')}
              className="text-white hover:text-cyan-400 transition-colors duration-300 relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-electric-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => handleNavigation('about', 'About')}
              className="text-white hover:text-cyan-400 transition-colors duration-300 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-electric-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => handleNavigation('contact', 'Contact')}
              className="text-white hover:text-cyan-400 transition-colors duration-300 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-electric-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              className="btn-primary flex items-center space-x-2"
              onClick={handleContactClick}
            >
              <Phone className="w-4 h-4" />
              <span>Contact Us</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="py-4 space-y-4">
            <button 
              onClick={() => handleNavigation('home', 'Home')}
              className="block text-white hover:text-cyan-400 transition-colors duration-300 w-full text-left"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('properties', 'Properties')}
              className="block text-white hover:text-cyan-400 transition-colors duration-300 w-full text-left"
            >
              Properties
            </button>
            <button 
              onClick={() => handleNavigation('services', 'Services')}
              className="block text-white hover:text-cyan-400 transition-colors duration-300 w-full text-left"
            >
              Services
            </button>
            <button 
              onClick={() => handleNavigation('about', 'About')}
              className="block text-white hover:text-cyan-400 transition-colors duration-300 w-full text-left"
            >
              About
            </button>
            <button 
              onClick={() => handleNavigation('contact', 'Contact')}
              className="block text-white hover:text-cyan-400 transition-colors duration-300 w-full text-left"
            >
              Contact
            </button>
            <button 
              className="btn-primary w-full mt-4"
              onClick={handleContactClick}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
