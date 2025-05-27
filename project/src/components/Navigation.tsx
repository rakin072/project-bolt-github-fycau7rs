import { useState } from 'react';
import { Home, Search, Mail, Phone } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleContactClick = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu if open
  };

  const handleNavigation = (sectionId: string, sectionName: string) => {
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
              className="relative group flex items-center space-x-2 px-6 py-2.5 rounded-lg bg-gradient-to-r from-electric-500 to-purple-500 hover:from-electric-600 hover:to-purple-600 text-white font-medium transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-electric-500/30 active:scale-95 overflow-hidden"
              onClick={handleContactClick}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-electric-500/0 via-white/10 to-electric-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <Phone className="w-4 h-4 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110" />
              <span className="relative">Contact Us</span>
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
        <div className={`md:hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="py-3 space-y-2 px-2">
            <button 
              onClick={() => handleNavigation('home', 'Home')}
              className="block text-white hover:text-cyan-400 transition-colors duration-300 w-full text-left px-4 py-1.5"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('properties', 'Properties')}
              className="block text-white hover:text-cyan-400 transition-colors duration-300 w-full text-left px-4 py-1.5"
            >
              Properties
            </button>
            <button 
              onClick={() => handleNavigation('services', 'Services')}
              className="block text-white hover:text-cyan-400 transition-colors duration-300 w-full text-left px-4 py-1.5"
            >
              Services
            </button>
            <button 
              onClick={() => handleNavigation('about', 'About')}
              className="block text-white hover:text-cyan-400 transition-colors duration-300 w-full text-left px-4 py-1.5"
            >
              About
            </button>
            <button 
              onClick={() => handleNavigation('contact', 'Contact')}
              className="block text-white hover:text-cyan-400 transition-colors duration-300 w-full text-left px-4 py-1.5"
            >
              Contact
            </button>
            <div className="px-4 pt-1">
              <button 
                className="relative group w-full px-8 py-4 rounded-full bg-gradient-to-r from-electric-500 to-purple-500 hover:from-electric-600 hover:to-purple-600 text-white font-medium transition-all duration-500 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-electric-500/30 active:scale-95 flex items-center justify-center space-x-2 overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/30 before:to-transparent before:opacity-100 before:transition-opacity before:duration-500 after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:to-black/20 after:opacity-100 after:transition-opacity after:duration-500 shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
                onClick={handleContactClick}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-electric-500/0 via-white/20 to-electric-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <Phone className="w-5 h-5 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]" />
                <span className="relative z-10 text-base font-semibold tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">Contact Us</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
