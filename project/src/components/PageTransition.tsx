
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);
  const location = useLocation();

  useEffect(() => {
    if (displayChildren !== children) {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setDisplayChildren(children);
        setIsTransitioning(false);
      }, 300);
    }
  }, [children, displayChildren]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Page Transition Overlay */}
      <div 
        className={`fixed inset-0 z-50 bg-gradient-to-br from-navy-900 via-electric-500/20 to-purple-500/20 backdrop-blur-sm transition-all duration-500 ${
          isTransitioning 
            ? 'opacity-100 transform scale-100 rotate-0' 
            : 'opacity-0 transform scale-95 rotate-1 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* 3D Loading Animation */}
            <div className="w-20 h-20 relative perspective-1000">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-electric-500 to-purple-500 animate-spin transform-gpu preserve-3d">
                <div className="absolute inset-2 rounded-lg bg-navy-900/80 backdrop-blur-sm"></div>
              </div>
            </div>
            
            {/* Floating Particles */}
            <div className="absolute -top-10 -left-10 w-4 h-4 bg-electric-400/60 rounded-full animate-float blur-sm"></div>
            <div className="absolute -bottom-10 -right-10 w-3 h-3 bg-purple-400/60 rounded-full animate-float blur-sm" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-5 -right-15 w-2 h-2 bg-cyan-400/60 rounded-full animate-float blur-sm" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>

      {/* Main Content with 3D Transform */}
      <div 
        className={`transition-all duration-700 transform-gpu ${
          isTransitioning 
            ? 'opacity-70 scale-95 rotate-x-2 translate-z-[-50px]' 
            : 'opacity-100 scale-100 rotate-x-0 translate-z-0'
        }`}
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1000px'
        }}
      >
        {displayChildren}
      </div>
    </div>
  );
};

export default PageTransition;
