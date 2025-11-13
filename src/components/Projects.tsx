import React from 'react';
import { BarChart2Icon, DatabaseIcon, LineChartIcon, TrendingUpIcon } from 'lucide-react';
export const Projects = () => {
  const projects = [{
    title: 'Multi-Industry Data Analysis',
    description: 'Structured and analyzed multi-industry data to identify patterns and insights for business decision-making.',
    icon: <DatabaseIcon className="h-10 w-10 text-[#2c5070]" />,
    skills: ['Python', 'SQL', 'Data Analysis']
  }, {
    title: 'Automated Dashboard System',
    description: 'Developed automated dashboards that reduced reporting time by several hours per month and improved decision-making efficiency.',
    icon: <BarChart2Icon className="h-10 w-10 text-[#2c5070]" />,
    skills: ['Power BI', 'DAX', 'Automation']
  }, {
    title: 'National Statistical Survey',
    description: 'Supervised data collection, performed quality control, and analyzed results for national statistical surveys.',
    icon: <TrendingUpIcon className="h-10 w-10 text-[#2c5070]" />,
    skills: ['Stata', 'R', 'Statistical Analysis']
  }, {
    title: 'Interactive Data Visualization',
    description: 'Created interactive dashboards and visualizations to facilitate data-driven decision making.',
    icon: <LineChartIcon className="h-10 w-10 text-[#2c5070]" />,
    skills: ['Data Visualization', 'Dashboard Design']
  }];
  return <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#2c5070]">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-[#2c5070]">
              <div className="flex items-center mb-4">
                {project.icon}
                <h3 className="text-xl font-semibold ml-4 text-[#2c5070]">
                  {project.title}
                </h3>
              </div>
              <p className="text-gray-700 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, skillIndex) => <span key={skillIndex} className="px-3 py-1 bg-[#2c5070] bg-opacity-10 text-[#2c5070] rounded-full text-sm">
                    {skill}
                  </span>)}
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};