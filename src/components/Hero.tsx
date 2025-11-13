import React from 'react';
import { ArrowDownIcon } from 'lucide-react';
export const Hero = () => {
  return <section className="relative h-screen flex items-center bg-[#2c5070] text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a50] to-[#2c5070] opacity-90"></div>
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="rounded-full overflow-hidden border-4 border-white w-56 h-56 md:w-72 md:h-72 mx-auto">
              <img src="/profile.jpg" alt="Mouhamadou Moustapha Djite" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="md:w-1/2 md:pl-10 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Mouhamadou Moustapha Djite
            </h1>
            <h2 className="text-xl md:text-2xl font-light mb-6">
              Data Scientist
            </h2>
            <p className="text-lg md:max-w-md">
              Passionate about transforming data into actionable insights and
              developing machine learning solutions with real-world impact.
            </p>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <a href="#about" className="flex flex-col items-center animate-bounce">
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDownIcon size={20} />
          </a>
        </div>
      </div>
    </section>;
};