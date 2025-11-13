import React from 'react';
import { BriefcaseIcon, CalendarIcon, MapPinIcon, CheckIcon } from 'lucide-react';
export const Experience = () => {
  const experiences = [{
    title: 'Data Scientist',
    company: 'ENEDIS',
    location: 'Noisy-Le-Grand, France',
    period: '09/2023 - 09/2025',
    responsibilities: ["Analysis and structuring of cross-functional data.",
      "Design of automated dashboards, reducing reporting time by several hours per month and improving decision-making.",
      "Support for teams in leveraging their data effectively.",
      "Facilitation of six training sessions for the Data Academy (20 employees trained in Power BI).",
      "Data project management: requirements gathering, production, delivery, and integration of feedback."]
  }, {
    title: 'Internship in Statistics and Data Analysis',
    company: 'ANSD',
    location: 'Dakar, Senegal',
    period: '06/2024 - 09/2024',
    responsibilities: ["Field supervision and quality control as part of national statistical surveys.",
      "Data processing and cleaning (Stata, R) to ensure analytical usability.",
      "Visualization of results through clear dashboards and interactive charts to support decision-making."]
  }, {
    title: 'Mathematics Teacher',
    company: 'Complétude',
    location: '',
    period: '09/2022 - 10/2023',
    responsibilities: ["Personalized teaching promoting student autonomy and understanding."]
  }];
  return <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#2c5070]">
          Professional Experience
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {experiences.map((exp, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[#2c5070]">
                      {exp.title}
                    </h3>
                    <div className="text-lg font-medium">{exp.company}</div>
                  </div>
                  <div className="flex items-center mt-2 md:mt-0">
                    <CalendarIcon className="h-5 w-5 text-gray-500 mr-1" />
                    <span className="text-gray-600">{exp.period}</span>
                  </div>
                </div>
                {exp.location && <div className="flex items-center mb-4 text-gray-600">
                    <MapPinIcon className="h-5 w-5 mr-1" />
                    <span>{exp.location}</span>
                  </div>}
                <ul className="space-y-2 mt-4">
                  {exp.responsibilities.map((item, itemIndex) => <li key={itemIndex} className="flex">
                      <CheckIcon className="h-5 w-5 text-[#2c5070] mr-2 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>)}
                </ul>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};