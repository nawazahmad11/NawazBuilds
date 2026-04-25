import React from 'react';

interface FloatingIconProps {
  iconUrl: string;
  altText: string;
  positionClass: string; 
  delay?: string;        
}

const FloatingIcon: React.FC<FloatingIconProps> = ({ iconUrl, altText, positionClass, delay = "0s" }) => {
  return (
    // 'contain-layout' browser ko batata hai ke ye element bahar ke layout ko disturb nahi karega (Performance boost)
    <div className={`absolute pointer-events-none z-10 ${positionClass}`} style={{ contain: 'layout style' }}>
      <div 
        className="relative group animate-float will-change-transform" // 'will-change' GPU ko active karta hai
        style={{ 
          animationDelay: delay,
          backfaceVisibility: 'hidden', // Flicker khatam karne ke liye
          transform: 'translateZ(0)'    // Hardware acceleration force karne ke liye
        }}
      >
        {/* --- OPTIMIZED MIST CONTAINER --- */}
        <div className="relative aspect-square flex items-center justify-center p-2.5 md:p-4 overflow-visible transition-transform duration-500
                        rounded-full 
                        /* 1. Blur intensity 'xl' se 'md' kar di (Mobile friendly) */
                        bg-white/10 backdrop-blur-md 
                        /* 2. Shadow spread ko optimized kiya (80px -> 40px) taake painting load kam ho */
                        shadow-[0_0_40px_20px_rgba(255,255,255,0.08),inset_0_0_15px_5px_rgba(255,255,255,0.05)]
                        w-12 h-12 md:w-20 md:h-20
                        
                        /* Hover par scale use kiya hai (Box-shadow expansion ki jagah, jo fast hai) */
                        group-hover:scale-110 group-hover:bg-white/20"
        >
          
          <div className="absolute inset-0 rounded-full shadow-[inset_0_2px_5px_rgba(255,255,255,0.05)] pointer-events-none"></div>
          
          <img 
            alt={altText} 
            loading="lazy" // SEO/Performance optimization
            decoding="async" // Parallel decoding
            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" 
            src={iconUrl}
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  );
};

export default FloatingIcon;