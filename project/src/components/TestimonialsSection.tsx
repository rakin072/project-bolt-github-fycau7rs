import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "First-time Homebuyer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=faces",
      rating: 5,
      text: "Hive&in made my dream of homeownership a reality. Their team's expertise and dedication were exceptional throughout the entire process.",
      location: "Beverly Hills, CA"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Property Investor",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The investment insights and market analysis provided by Hive&in helped me build a profitable property portfolio. Highly recommended!",
      location: "Manhattan, NY"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Luxury Home Seller",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Selling our luxury property was seamless with Hive&in. They understood our needs and delivered results beyond our expectations.",
      location: "Malibu, CA"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-800 to-navy-900" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Read the success stories and experiences shared by our satisfied clients across the country.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative perspective-1000">
            <div className="glass-card-dark p-8 lg:p-12 rounded-2xl transform transition-all duration-500 preserve-3d">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-16 h-16 glass-card rounded-full flex items-center justify-center">
                <Quote className="w-8 h-8 text-cyan-400" />
              </div>

              <div className="grid lg:grid-cols-3 gap-8 items-center">
                {/* Client Photo and Info */}
                <div className="text-center lg:text-left">
                  <div className="relative inline-block mb-4">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-24 h-24 rounded-full object-cover ring-4 ring-electric-500/50 transform transition-all duration-300 hover:scale-110"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-electric-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Star className="w-4 h-4 text-white fill-current" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-1">
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-cyan-400 text-sm font-medium mb-2">
                    {testimonials[currentTestimonial].role}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {testimonials[currentTestimonial].location}
                  </p>

                  {/* Rating */}
                  <div className="flex justify-center lg:justify-start mt-4 space-x-1">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <div className="lg:col-span-2">
                  <blockquote className="text-xl lg:text-2xl text-gray-100 leading-relaxed italic">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-700">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 glass-card rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-electric-500/20 group"
                >
                  <ChevronLeft className="w-6 h-6 text-white group-hover:text-cyan-400" />
                </button>

                {/* Dots Indicator */}
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial
                          ? 'bg-gradient-to-r from-electric-500 to-purple-500 scale-125'
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 glass-card rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-electric-500/20 group"
                >
                  <ChevronRight className="w-6 h-6 text-white group-hover:text-cyan-400" />
                </button>
              </div>
            </div>
          </div>

          {/* Additional Testimonials Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`glass-card p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  index === currentTestimonial 
                    ? 'ring-2 ring-electric-500/50 bg-electric-500/10' 
                    : 'hover:bg-white/5'
                }`}
                onClick={() => setCurrentTestimonial(index)}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-white font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-gray-400 text-xs">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm line-clamp-3">
                  "{testimonial.text}"
                </p>
                <div className="flex mt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
