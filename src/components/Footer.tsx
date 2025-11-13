import React from 'react';
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-[#2c5070] text-white py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Mouhamadou Moustapha Djite</h3>
            <p className="text-sm opacity-80 mt-1">Data Scientist</p>
          </div>
          <div className="text-sm opacity-80">
            &copy; {currentYear} All rights reserved.
          </div>
        </div>
      </div>
    </footer>;
};