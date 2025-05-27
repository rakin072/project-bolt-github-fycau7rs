import { Home, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press', href: '#press' }
    ],
    services: [
      { name: 'Buy Property', href: '#buy' },
      { name: 'Sell Property', href: '#sell' },
      { name: 'Rent Property', href: '#rent' },
      { name: 'Property Management', href: '#management' }
    ],
    resources: [
      { name: 'Market Reports', href: '#reports' },
      { name: 'Property Guides', href: '#guides' },
      { name: 'Investment Tips', href: '#tips' },
      { name: 'Legal Resources', href: '#legal' }
    ],
    support: [
      { name: 'Help Center', href: '#help' },
      { name: 'Contact Support', href: '#support' },
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#facebook' },
    { name: 'Twitter', icon: Twitter, href: '#twitter' },
    { name: 'Instagram', icon: Instagram, href: '#instagram' },
    { name: 'LinkedIn', icon: Linkedin, href: '#linkedin' }
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 border-t border-electric-500/20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-electric-500 to-purple-500 rounded-xl flex items-center justify-center animate-glow">
                  <Home className="w-7 h-7 text-white" />
                </div>
                <span className="text-3xl font-bold text-gradient">Hive&in</span>
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed max-w-md">
                Your trusted partner in finding the perfect property. We combine cutting-edge technology with personalized service to deliver exceptional real estate experiences.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span>info@hiveandin.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span>123 Luxury Ave, Los Angeles, CA 90210</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 glass-card rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-electric-500/20 group touch-manipulation active:scale-95 active:rotate-3 perspective-1000 transform-gpu"
                      style={{
                        transformStyle: 'preserve-3d',
                        WebkitTapHighlightColor: 'transparent'
                      }}
                    >
                      <Icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-transform duration-300 group-active:scale-90" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Company */}
              <div>
                <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 relative group"
                      >
                        {link.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-electric-500 to-cyan-400 transition-all duration-300 group-hover:w-full" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
                <ul className="space-y-3">
                  {footerLinks.services.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 relative group"
                      >
                        {link.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-electric-500 to-cyan-400 transition-all duration-300 group-hover:w-full" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 relative group"
                      >
                        {link.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-electric-500 to-cyan-400 transition-all duration-300 group-hover:w-full" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
                <ul className="space-y-3">
                  {footerLinks.support.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 relative group"
                      >
                        {link.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-electric-500 to-cyan-400 transition-all duration-300 group-hover:w-full" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="py-8 border-t border-gray-700">
          <div className="glass-card-dark p-6 rounded-2xl transform-gpu perspective-1000">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Stay Updated</h3>
                <p className="text-gray-300">Get the latest property listings and market insights delivered to your inbox.</p>
              </div>
              <div className="flex flex-col sm:flex-row w-full md:w-auto space-y-3 sm:space-y-0 sm:space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 md:w-64 bg-navy-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-electric-500 focus:ring-2 focus:ring-electric-500/20 transition-all duration-300 touch-manipulation"
                />
                <button 
                  className="relative group flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-electric-500 to-purple-500 hover:from-electric-600 hover:to-purple-600 text-white font-medium transition-all duration-500 transform-gpu hover:scale-105 hover:shadow-lg hover:shadow-electric-500/30 active:scale-95 active:rotate-1 active:translate-y-0.5 overflow-hidden touch-manipulation perspective-1000"
                  style={{
                    transformStyle: 'preserve-3d',
                    WebkitTapHighlightColor: 'transparent'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-electric-500/0 via-white/10 to-electric-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <span className="relative text-lg font-semibold transform-gpu group-active:scale-95">Subscribe Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Hive&in. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#privacy" className="hover:text-cyan-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-cyan-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#cookies" className="hover:text-cyan-400 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
