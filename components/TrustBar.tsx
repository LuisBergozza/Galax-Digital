import React from 'react';

const logos = [
  "Google Partner", "Meta Business Partner", "RD Station", "Shopify"
];

export const TrustBar: React.FC = () => {
  return (
    <div className="w-full bg-black border-y border-white/5 py-4 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10"></div>
      
      <div className="flex items-center gap-16 animate-scroll whitespace-nowrap w-max">
        {/* Doubled list for seamless loop */}
        {[...logos, ...logos, ...logos].map((logo, index) => (
          <div 
            key={index} 
            className="text-xl md:text-2xl font-bold text-gray-700 hover:text-white transition-colors duration-300 uppercase tracking-widest cursor-default select-none"
          >
            {logo}
          </div>
        ))}
      </div>
      
      <p className="text-center text-xs text-gray-600 uppercase tracking-[0.2em] mt-4 font-medium">
        Plataformas e Parceiros Estratégicos
      </p>
    </div>
  );
};