import React from 'react';
import { MapPinIcon, PhoneIcon, MailIcon } from 'lucide-react';
export const About = () => {
  return <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#2c5070]">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-8">
            I am a Data Scientist with a strong background in mathematics and
            computer science. Currently pursuing an engineering degree at CY
            TECH in Cergy, I specialize in data analysis, visualization, and
            machine learning. My goal is to develop my expertise in data and
            machine learning while contributing to impactful projects with high
            added value.
          </p>
          <div className="flex flex-col md:flex-row justify-between mt-10">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-4 text-[#2c5070]">
                Contact Information
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <MapPinIcon size={20} className="mr-3 text-[#2c5070]" />
                  <span>9 Les Larris Pourpres, 95000, Pontoise</span>
                </li>
                <li className="flex items-center">
                  <PhoneIcon size={20} className="mr-3 text-[#2c5070]" />
                  <span>+33 7 83 10 36 81</span>
                </li>
                <li className="flex items-center">
                  <MailIcon size={20} className="mr-3 text-[#2c5070]" />
                  <span>mustafadjite@gmail.com</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#2c5070]">
                Languages
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>English</span>
                    <span>Advanced (C1)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#2c5070] h-2 rounded-full" style={{
                    width: '85%'
                  }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">TOEIC 880</p>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>French</span>
                    <span>Bilingual</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#2c5070] h-2 rounded-full" style={{
                    width: '100%'
                  }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-4 text-[#2c5070]">
              Interests
            </h3>
            <div className="flex flex-wrap gap-3">
              {['Basketball', 'Thai Boxing', 'Cinema', 'Anime'].map(interest => <span key={interest} className="px-4 py-2 bg-gray-100 rounded-full text-gray-700">
                    {interest}
                  </span>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};