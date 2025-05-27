import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    propertyType: 'residential'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Start Your Real Estate{' '}
            <span className="text-gradient">Journey Today</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to take the next step? Get in touch with our expert team for personalized guidance and exceptional service.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="glass-card-dark p-6 group transform transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-electric-500 to-cyan-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Call Us</h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                    <p className="text-cyan-400 text-sm">Available 24/7</p>
                  </div>
                </div>
              </div>

              <div className="glass-card-dark p-6 group transform transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-electric-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Email Us</h3>
                    <p className="text-gray-300">info@hiveandin.com</p>
                    <p className="text-cyan-400 text-sm">Response within 2 hours</p>
                  </div>
                </div>
              </div>

              <div className="glass-card-dark p-6 group transform transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Visit Us</h3>
                    <p className="text-gray-300">123 Luxury Ave, Premium District</p>
                    <p className="text-cyan-400 text-sm">Los Angeles, CA 90210</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="glass-card-dark p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-cyan-400" />
                <h3 className="text-white font-semibold text-lg">Business Hours</h3>
              </div>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-cyan-400">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-cyan-400">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-cyan-400">12:00 PM - 5:00 PM</span>
                </div>
              </div>
            </div>

            {/* Team Info */}
            <div className="glass-card-dark p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-6 h-6 text-cyan-400" />
                <h3 className="text-white font-semibold text-lg">Expert Team</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Our certified real estate professionals are ready to assist you with personalized service and expert guidance.
              </p>
              <Link to="/about">
                <Button 
                  variant="outline" 
                  className="w-full bg-gradient-to-r from-electric-500 to-purple-500 text-white border-none hover:from-electric-600 hover:to-purple-600 transition-all duration-300"
                >
                  Meet Our Team
                </Button>
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card-dark p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-navy-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-electric-500 focus:ring-2 focus:ring-electric-500/20 transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-navy-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-electric-500 focus:ring-2 focus:ring-electric-500/20 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-300 text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-navy-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-electric-500 focus:ring-2 focus:ring-electric-500/20 transition-all duration-300"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              {/* Property Type */}
              <div>
                <label htmlFor="propertyType" className="block text-gray-300 text-sm font-medium mb-2">
                  Property Interest
                </label>
                <select
                  id="propertyType"
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="w-full bg-navy-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-electric-500 focus:ring-2 focus:ring-electric-500/20 transition-all duration-300"
                >
                  <option value="residential">Residential Property</option>
                  <option value="commercial">Commercial Property</option>
                  <option value="luxury">Luxury Property</option>
                  <option value="investment">Investment Property</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-navy-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-electric-500 focus:ring-2 focus:ring-electric-500/20 transition-all duration-300 resize-none"
                  placeholder="Tell us about your real estate needs..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn-primary w-full py-4 text-lg flex items-center justify-center space-x-2 group"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </form>

            {/* Additional Info */}
            <div className="mt-6 p-4 bg-electric-500/10 border border-electric-500/20 rounded-lg">
              <p className="text-cyan-400 text-sm">
                <strong>Quick Response Guarantee:</strong> We'll get back to you within 2 hours during business hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
