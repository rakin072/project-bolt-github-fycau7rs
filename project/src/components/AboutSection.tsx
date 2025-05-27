import { Building2, Users, Award, TrendingUp, Star, Heart, Trophy, Medal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const teamMembers = [
    {
      name: "Nila Amber",
      role: "Senior Real Estate Consultant",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces",
      achievements: [
        { title: "Top Performer 2023", icon: Trophy },
        { title: "Client Satisfaction Award", icon: Medal }
      ],
      description: "10+ years of experience in luxury real estate, specializing in waterfront properties."
    },
    {
      name: "Michael Chen",
      role: "Investment Strategist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces",
      achievements: [
        { title: "Best Investment Advisor 2022", icon: Trophy },
        { title: "Market Analysis Expert", icon: Medal }
      ],
      description: "Expert in market analysis and investment strategies with a proven track record."
    },
    {
      name: "Mithila Danger",
      role: "Property Management Director",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=faces",
      achievements: [
        { title: "Excellence in Management", icon: Trophy },
        { title: "Innovation Award 2023", icon: Medal }
      ],
      description: "Leading our property management division with innovative solutions and exceptional service."
    }
  ];

  const milestones = [
    {
      year: "2010",
      title: "The Beginning",
      description: "Hive&in was founded with a vision to revolutionize luxury real estate by combining innovative technology with personalized service.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      icon: Building2
    },
    {
      year: "2013",
      title: "Expanding Horizons",
      description: "We expanded our operations to major metropolitan areas, establishing ourselves as a trusted name in luxury real estate.",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop",
      icon: TrendingUp
    },
    {
      year: "2016",
      title: "Innovation Leadership",
      description: "Launched our proprietary virtual tour technology, setting new standards in property visualization and client experience.",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop",
      icon: Award
    },
    {
      year: "2019",
      title: "Global Recognition",
      description: "Received multiple industry awards for excellence in luxury real estate and customer service.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      icon: Star
    },
    {
      year: "2022",
      title: "Community Impact",
      description: "Established the Hive&in Foundation, focusing on sustainable development and community initiatives.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      icon: Heart
    },
    {
      year: "Present",
      title: "Growing Family",
      description: "Today, we're proud to have served over 10,000 families and continue to grow our team of dedicated professionals.",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
      icon: Users
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Story</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From humble beginnings to becoming a leader in luxury real estate, discover the journey that shaped Hive&in into what it is today.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-electric-500 via-purple-500 to-cyan-500 hidden md:block" />

          {/* Milestones */}
          <div className="space-y-12 md:space-y-0">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={milestone.year}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'} animate-slide-up`} style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="glass-card-dark p-6 rounded-xl hover:shadow-xl hover:shadow-electric-500/20 transition-all duration-500 group">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-electric-500 to-purple-500 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <span className="text-cyan-400 font-semibold">{milestone.year}</span>
                          <h3 className="text-xl font-bold text-white">{milestone.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4">{milestone.description}</p>
                      <div className="relative overflow-hidden rounded-lg aspect-video">
                        <img
                          src={milestone.image}
                          alt={milestone.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-electric-500 to-purple-500 rounded-full flex items-center justify-center z-10 hidden md:flex">
                    <div className="w-4 h-4 bg-navy-900 rounded-full" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Members Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Meet Our <span className="text-gradient">Team</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="glass-card-dark p-6 rounded-xl hover:shadow-xl hover:shadow-electric-500/20 transition-all duration-500 group"
              >
                <div className="relative mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-electric-500/20 shadow-lg group-hover:border-electric-500/40 transition-all duration-500 transform group-hover:scale-105"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {member.achievements.map((achievement, idx) => {
                      const Icon = achievement.icon;
                      return (
                        <div 
                          key={idx}
                          className="bg-gradient-to-r from-electric-500 to-purple-500 p-2 rounded-full shadow-lg transform group-hover:scale-110 transition-all duration-500"
                          style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                      );
                    })}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-1 text-center">{member.name}</h4>
                <p className="text-cyan-400 text-sm mb-3 text-center">{member.role}</p>
                <p className="text-gray-300 text-sm mb-4 text-center">{member.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.achievements.map((achievement, idx) => (
                    <span 
                      key={idx}
                      className="text-xs bg-electric-500/10 text-electric-400 px-3 py-1 rounded-full"
                    >
                      {achievement.title}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link to="/about">
              <Button 
                variant="outline" 
                className="bg-gradient-to-r from-electric-500 to-purple-500 text-white border-none hover:from-electric-600 hover:to-purple-600 transition-all duration-300"
              >
                Meet Our Full Team
              </Button>
            </Link>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-32 text-center">
          <h3 className="text-3xl font-bold mb-12">
            Our <span className="text-gradient">Values</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card-dark p-6 rounded-xl hover:shadow-xl hover:shadow-electric-500/20 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-r from-electric-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Client First</h4>
              <p className="text-gray-300">
                We prioritize our clients' needs and satisfaction above all else, ensuring a personalized experience.
              </p>
            </div>
            <div className="glass-card-dark p-6 rounded-xl hover:shadow-xl hover:shadow-electric-500/20 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Excellence</h4>
              <p className="text-gray-300">
                We strive for excellence in every aspect of our service, from property selection to client care.
              </p>
            </div>
            <div className="glass-card-dark p-6 rounded-xl hover:shadow-xl hover:shadow-electric-500/20 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-electric-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Innovation</h4>
              <p className="text-gray-300">
                We continuously innovate to provide cutting-edge solutions in real estate technology and service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 