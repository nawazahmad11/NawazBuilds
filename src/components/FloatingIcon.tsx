import React from 'react';

interface FloatingIconProps {
  iconUrl: string;
  altText: string;
  positionClass: string; 
  delay?: string;        
}

const FloatingIcon: React.FC<FloatingIconProps> = ({ iconUrl, altText, positionClass, delay = "0s" }) => {
  return (
    <div className={`absolute pointer-events-auto z-50 ${positionClass}`}>
      <div 
        className="relative group animate-float"
        style={{ animationDelay: delay }}
      >
        {/* Soft Glow Backdrop */}
        <div className="absolute inset-0 bg-white/5 blur-2xl rounded-full group-hover:bg-primary/10 transition-all duration-700 scale-125 -z-10"></div>
        
        {/* Main 3D Container */}
        <div className="relative w-12 h-12 md:w-20 md:h-20 bg-white/95 backdrop-blur-md rounded-full 
                        /* 3D Deep Shadows */
                        shadow-[0_12px_30px_rgba(0,0,0,0.22),0_4px_12px_rgba(0,0,0,0.15)] 
                        border border-white/60 flex items-center justify-center p-2.5 md:p-4 overflow-hidden 
                        transition-all duration-500 
                        group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.3)] 
                        group-hover:translate-y-[-6px] group-hover:rotate-2">
          
          {/* Inner Shadow for Recessed Look */}
          <div className="absolute inset-0 rounded-full shadow-[inset_0_3px_5px_rgba(0,0,0,0.08)] pointer-events-none"></div>
          
          <img 
            alt={altText} 
            className="w-full h-full object-contain filter drop-shadow-[0_3px_4px_rgba(0,0,0,0.15)] transition-transform duration-700 group-hover:scale-110" 
            src={iconUrl}
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  );
};

export default FloatingIcon;