import React from 'react';
import { BarChartIcon, CodeIcon, DatabaseIcon, SettingsIcon, LayoutIcon } from 'lucide-react';
export const Skills = () => {
  const skillCategories = [{
    title: 'Data Visualization',
    icon: <BarChartIcon className="h-8 w-8 text-[#2c5070]" />,
    skills: ['Power BI', 'DAX', 'Language M', 'Python']
  }, {
    title: 'Programming',
    icon: <CodeIcon className="h-8 w-8 text-[#2c5070]" />,
    skills: ['Python', 'R', 'SQL']
  }, {
    title: 'Automation / Low Code',
    icon: <SettingsIcon className="h-8 w-8 text-[#2c5070]" />,
    skills: ['Power Apps', 'Power Automate']
  }, {
    title: 'Office Tools',
    icon: <LayoutIcon className="h-8 w-8 text-[#2c5070]" />,
    skills: ['Microsoft 365']
  }, {
    title: 'Statistics & Machine Learning',
    icon: <DatabaseIcon className="h-8 w-8 text-[#2c5070]" />,
    skills: ['Time Series (ARIMA)', 'Linear Optimization', 'Random Forests', 'Neural Networks', 'Bayesian Models', 'Logistic Regression', 'Multiclass Classification']
  }];
  return <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#2c5070]">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold ml-3 text-[#2c5070]">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => <li key={skillIndex} className="flex items-center">
                    <span className="w-2 h-2 bg-[#2c5070] rounded-full mr-2"></span>
                    <span>{skill}</span>
                  </li>)}
              </ul>
            </div>)}
        </div>
      </div>
    </section>;
};