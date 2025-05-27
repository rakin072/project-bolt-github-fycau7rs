
import { useEffect, useState } from 'react';
import { Home, Users, Award, Calendar } from 'lucide-react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    properties: 0,
    clients: 0,
    awards: 0,
    experience: 0
  });

  const targetCounts = {
    properties: 200,
    clients: 10000,
    awards: 16,
    experience: 15
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('stats');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const animateCount = (key: keyof typeof targetCounts, target: number) => {
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, duration / steps);
    };

    // Animate all counters
    Object.entries(targetCounts).forEach(([key, value]) => {
      setTimeout(() => {
        animateCount(key as keyof typeof targetCounts, value);
      }, Math.random() * 500);
    });
  }, [isVisible]);

  const stats = [
    {
      icon: Home,
      value: counts.properties,
      suffix: '+',
      label: 'Properties Sold',
      color: 'from-electric-500 to-cyan-400'
    },
    {
      icon: Users,
      value: counts.clients,
      suffix: '+',
      label: 'Happy Clients',
      color: 'from-purple-500 to-electric-500'
    },
    {
      icon: Award,
      value: counts.awards,
      suffix: '+',
      label: 'Awards Won',
      color: 'from-cyan-400 to-purple-500'
    },
    {
      icon: Calendar,
      value: counts.experience,
      suffix: '+',
      label: 'Years Experience',
      color: 'from-electric-500 to-purple-400'
    }
  ];

  return (
    <section id="stats" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900" />
      <div className="absolute inset-0 bg-gradient-to-br from-electric-500/5 via-transparent to-purple-500/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Achievements</span> in Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            These numbers represent our commitment to excellence and the trust our clients place in us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="stat-card group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-6 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Count */}
                  <div className="text-center">
                    <div className={`text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 ${isVisible ? 'animate-count-up' : ''}`}>
                      {stat.value.toLocaleString()}{stat.suffix}
                    </div>
                    <div className="text-gray-300 text-lg font-medium">
                      {stat.label}
                    </div>
                  </div>

                  {/* Decorative Line */}
                  <div className={`h-1 w-20 mx-auto rounded-full bg-gradient-to-r ${stat.color} transform transition-all duration-300 group-hover:w-32`} />
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-electric-500/0 to-purple-500/0 group-hover:from-electric-500/10 group-hover:to-purple-500/10 rounded-xl transition-all duration-300" />
              </div>
            );
          })}
        </div>

        {/* Bottom Decorative Elements */}
        <div className="flex justify-center mt-16 space-x-4">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-electric-500 to-purple-500 animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
