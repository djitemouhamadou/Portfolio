import React from 'react';
import { GraduationCapIcon, CalendarIcon, MapPinIcon } from 'lucide-react';
export const Education = () => {
  const educationItems = [{
    degree: "Engineering Degree",
    field: 'Mathematics & Computer Science',
    institution: 'CY TECH',
    location: 'Cergy',
    period: '2022 - 2025',
    current: true
  }, {
    degree: 'Preparatory Class for Engineering Schools',
    field: 'Physics, Chemistry and Engineering Sciences (PCSI)',
    institution: 'Lycée Henri Poincaré',
    location: 'Nancy',
    period: '2020 - 2022'
  }, {
    degree: 'High School Diploma',
    field: 'Série S1 - Mathematics, Physics and Chemistry',
    institution: 'Athéna Sédar',
    location: 'Dakar, SENEGAL',
    period: '2020',
    mention: 'Honors (Mention Bien)'
  }];
  return <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#2c5070]">
          Education
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 border-l-2 border-[#2c5070] space-y-12">
            {educationItems.map((item, index) => <div key={index} className="relative">
                <div className="absolute -left-[25px] w-12 h-12 bg-white rounded-full border-2 border-[#2c5070] flex items-center justify-center">
                  <GraduationCapIcon className="h-6 w-6 text-[#2c5070]" />
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm ml-4">
                  <h3 className="text-xl font-semibold text-[#2c5070]">
                    {item.degree}: {item.field}
                  </h3>
                  <div className="mt-2 text-gray-700 font-medium">
                    {item.institution}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPinIcon className="h-4 w-4 mr-1" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      <span>{item.period}</span>
                    </div>
                  </div>
                  {item.mention && <div className="mt-2 inline-block px-3 py-1 bg-[#2c5070] bg-opacity-10 text-[#2c5070] rounded-full text-sm">
                      {item.mention}
                    </div>}
                  {item.current && <div className="mt-2 inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                      Current
                    </div>}
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};