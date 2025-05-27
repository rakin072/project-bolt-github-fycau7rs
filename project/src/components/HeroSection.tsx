import { useState, useEffect } from 'react';
import { Search, MapPin, Home, ArrowRight, Heart, Star, Smile } from 'lucide-react';

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [floatingElements, setFloatingElements] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);

  useEffect(() => {
    // Generate floating particles
    const particles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
      delay: Math.random() * 15
    }));
    setFloatingElements(particles);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Ambient Background with Enhanced Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
        {/* Floating Particles */}
        {floatingElements.map((particle) => (
          <div
            key={particle.id}
            className="floating-particle bg-gradient-to-r from-electric-500/20 to-purple-500/20 animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
              filter: 'blur(1px)',
              boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)'
            }}
          />
        ))}
        
        {/* Ambient Gradient Overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-electric-500/5 via-transparent to-purple-500/5 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-navy-900 to-transparent" />
        
        {/* Ambient Light Circles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content with Enhanced Ambient Styling */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 mb-4 group">
                <Star className="w-5 h-5 text-yellow-400 fill-current animate-pulse" />
                <span className="text-cyan-300 font-medium tracking-wide text-shadow-glow group-hover:text-cyan-200 transition-all duration-500">
                  Trusted by 10,000+ Happy Families
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                <div className="flex items-center space-x-4 mb-2">
                  <span className="text-white/90 hover:text-white transition-all duration-700 text-shadow-xl">
                    Find Your
                  </span>
                  {/* 3D Happy Smiley Emoji */}
                  <div className="relative perspective-1000">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 glass-card-dark rounded-full flex items-center justify-center animate-float glow-border transform-gpu transition-all duration-1000 hover:rotate-y-2 hover:scale-110 group cursor-pointer">
                      <Smile className="w-8 h-8 lg:w-10 lg:h-10 text-yellow-400 animate-pulse group-hover:text-yellow-300 transition-all duration-500" />
                      {/* 3D Glow Effect */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-400/20 blur-xl animate-ambient-glow"></div>
                      {/* Floating sparkles around smiley */}
                      <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-300/60 rounded-full animate-float blur-sm" style={{ animationDelay: '0.5s' }}></div>
                      <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-orange-300/60 rounded-full animate-float blur-sm" style={{ animationDelay: '1.5s' }}></div>
                    </div>
                  </div>
                </div>
                <span className="text-gradient animate-glow bg-gradient-to-r from-electric-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent hover:from-electric-300 hover:via-purple-300 hover:to-cyan-300 transition-all duration-700 text-shadow-glow">
                  Perfect
                </span>
                <br />
                <span className="block mt-2 text-white/90 hover:text-white transition-all duration-700 text-shadow-xl">
                  Family Home with
                </span>
                <br />
                <span className="text-gradient bg-gradient-to-r from-electric-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent hover:from-electric-300 hover:via-purple-300 hover:to-cyan-300 transition-all duration-700 text-shadow-glow tracking-wider">
                  Hive&in
                </span>
              </h1>
              
              <p className="text-xl text-gray-300/80 leading-relaxed max-w-lg font-light tracking-wide text-shadow-soft hover:text-gray-200 transition-all duration-500">
                Where luxury meets comfort. Transform your family's future with our exclusive collection of 
                premium properties designed for modern living and lasting memories.
              </p>

              <div className="flex items-center space-x-6 text-sm text-cyan-300/80">
                <div className="flex items-center space-x-2 group hover:text-cyan-200 transition-all duration-300">
                  <Heart className="w-4 h-4 text-red-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-shadow-soft">Family-Focused Designs</span>
                </div>
                <div className="flex items-center space-x-2 group hover:text-cyan-200 transition-all duration-300">
                  <Home className="w-4 h-4 text-electric-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-shadow-soft">Luxury Amenities</span>
                </div>
              </div>
            </div>

            {/* Enhanced Search Bar */}
            <div className="glass-card p-2 rounded-2xl max-w-md glow-border hover:shadow-2xl hover:shadow-electric-500/20 transition-all duration-500 group">
              <div className="flex items-center space-x-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-hover:text-cyan-400 transition-colors duration-300" />
                  <input
                    type="text"
                    placeholder="Search your dream home..."
                    className="w-full bg-transparent border-none outline-none pl-12 pr-4 py-3 text-white placeholder-gray-400 text-shadow-soft"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <button className="btn-primary px-6 py-3 rounded-xl flex items-center space-x-2 group hover:shadow-lg hover:shadow-electric-500/30 transition-all duration-300">
                  <span className="text-shadow-soft">Explore</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary px-8 py-4 text-lg flex items-center justify-center space-x-2 group hover:shadow-xl hover:shadow-electric-500/30 transition-all duration-500 transform hover:scale-105">
                <span className="text-shadow-soft">View Premium Homes</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="btn-secondary px-8 py-4 text-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-105">
                <span className="text-shadow-soft">Book Free Consultation</span>
              </button>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center group hover:transform hover:scale-110 transition-all duration-300">
                <div className="text-2xl font-bold text-cyan-400 text-shadow-glow group-hover:text-cyan-300">500+</div>
                <div className="text-xs text-gray-400 text-shadow-soft group-hover:text-gray-300">Luxury Properties</div>
              </div>
              <div className="text-center group hover:transform hover:scale-110 transition-all duration-300">
                <div className="text-2xl font-bold text-electric-400 text-shadow-glow group-hover:text-electric-300">98%</div>
                <div className="text-xs text-gray-400 text-shadow-soft group-hover:text-gray-300">Client Satisfaction</div>
              </div>
              <div className="text-center group hover:transform hover:scale-110 transition-all duration-300">
                <div className="text-2xl font-bold text-purple-400 text-shadow-glow group-hover:text-purple-300">24/7</div>
                <div className="text-xs text-gray-400 text-shadow-soft group-hover:text-gray-300">Expert Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced 3D Family Home Image */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              {/* 3D Family Image Container with Enhanced Effects */}
              <div className="relative perspective-1000">
                <div className="glass-card-dark p-4 transform-gpu transition-all duration-1000 hover:rotate-y-2 animate-float preserve-3d overflow-hidden rounded-3xl hover:shadow-2xl hover:shadow-electric-500/20">
                  {/* Family Image with 3D effects */}
                  <div className="relative group">
                    <img 
                      src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Happy family in their dream home"
                      className="w-full h-64 lg:h-80 object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105 filter hover:brightness-110"
                    />
                    
                    {/* Enhanced 3D Overlay Effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-electric-500/20 rounded-2xl" />
                    
                    {/* Floating Elements on Image with Enhanced Styling */}
                    <div className="absolute top-4 right-4 glass-card p-3 rounded-xl animate-float hover:shadow-lg hover:shadow-red-400/30 transition-all duration-300" style={{ animationDelay: '0.5s' }}>
                      <div className="text-center">
                        <Heart className="w-6 h-6 text-red-400 mx-auto mb-1 animate-pulse" />
                        <div className="text-xs text-white font-medium text-shadow-soft">Dream Home</div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 glass-card p-3 rounded-xl animate-float hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-300" style={{ animationDelay: '1s' }}>
                      <div className="flex items-center space-x-2">
                        <Star className="w-5 h-5 text-yellow-400 fill-current animate-pulse" />
                        <span className="text-white text-sm font-medium text-shadow-soft">5.0 Rating</span>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Luxury Features Showcase */}
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-300 text-shadow-soft">Luxury Features:</span>
                      <span className="text-cyan-400 font-medium text-shadow-glow">Premium Quality</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="glass-card p-2 rounded-lg text-center hover:shadow-lg hover:shadow-electric-400/20 transition-all duration-300 group">
                        <div className="text-electric-400 font-bold text-shadow-glow group-hover:text-electric-300">5</div>
                        <div className="text-gray-300 text-shadow-soft group-hover:text-gray-200">Bedrooms</div>
                      </div>
                      <div className="glass-card p-2 rounded-lg text-center hover:shadow-lg hover:shadow-purple-400/20 transition-all duration-300 group">
                        <div className="text-purple-400 font-bold text-shadow-glow group-hover:text-purple-300">4</div>
                        <div className="text-gray-300 text-shadow-soft group-hover:text-gray-200">Bathrooms</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced 3D Floating Elements Around Image */}
              <div className="absolute -top-6 -right-6 w-16 h-16 glass-card rounded-full flex items-center justify-center animate-float glow-border hover:shadow-xl hover:shadow-cyan-400/30 transition-all duration-500" style={{ animationDelay: '1.5s' }}>
                <MapPin className="w-8 h-8 text-cyan-400 animate-pulse" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-20 h-20 glass-card rounded-full flex items-center justify-center animate-float glow-border hover:shadow-xl hover:shadow-electric-400/30 transition-all duration-500" style={{ animationDelay: '2.5s' }}>
                <div className="text-center">
                  <div className="text-cyan-400 font-bold text-lg text-shadow-glow">$2M+</div>
                  <div className="text-xs text-gray-300 text-shadow-soft">Avg Value</div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-8 w-14 h-14 glass-card rounded-full flex items-center justify-center animate-float glow-border hover:shadow-xl hover:shadow-purple-400/30 transition-all duration-500" style={{ animationDelay: '0.8s' }}>
                <Home className="w-7 h-7 text-purple-400 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
