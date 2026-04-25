import React from 'react';

interface FloatingIconProps {
  iconUrl: string;
  altText: string;
  positionClass: string; // Tailwind coordinates like "top-[10%] left-[8%]"
  delay?: string;        // Animation delay like "0s"
}

const FloatingIcon: React.FC<FloatingIconProps> = ({ iconUrl, altText, positionClass, delay = "0s" }) => {
  return (
    // Z-INDEX & CONTAINMENT: Keeps the blurry element positioned correctly.
    <div className={`absolute pointer-events-auto z-10 ${positionClass}`}>
      <div 
        className="relative group animate-float"
        style={{ animationDelay: delay }}
      >
        {/* --- THE DIFFUSED BLUR MIST CONTAINER --- */}
        {/*
          1. overall look: Is container ko hum white color aur blur effect dete hain.
          2. size: Responsive sizes (w-12 aur md:w-20).
          3. transition: Hover par smooth tabdeeli ke liye.
        */}
        <div className="relative aspect-square flex items-center justify-center p-2.5 md:p-4 overflow-visible transition-all duration-500
                        rounded-full 
                        /* Main white diffused core: semi-transparent, strong blur, and a soft outer glow */
                        bg-white/20 backdrop-blur-xl 
                        /* Creates the 'cloud' effect blending into the background */
                        shadow-[0_0_80px_60px_rgba(255,255,255,0.1),inset_0_0_30px_10px_rgba(255,255,255,0.1)]
                        /* Small initial size */
                        w-12 h-12 md:w-20 md:h-20
                        
                        /* --- Hover State Modifications --- */
                        /* Expand and darken the outer mist on hover for an intense, defined look */
                        group-hover:shadow-[0_0_120px_90px_rgba(255,255,255,0.2)] 
                        group-hover:scale-105"
        >
          
          {/* Inner masking shadow for depth */}
          <div className="absolute inset-0 rounded-full shadow-[inset_0_5px_10px_rgba(255,255,255,0.1)] pointer-events-none"></div>
          
          {/* logo image: Remains sharp for contrast against the blurry background */}
          <img 
            alt={altText} 
            className="w-full h-full object-contain filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.15)] transition-all duration-700 group-hover:scale-110 group-hover:drop-shadow-[0_8px_12px_rgba(0,0,0,0.3)]" 
            src={iconUrl}
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  );
};

export default FloatingIcon;