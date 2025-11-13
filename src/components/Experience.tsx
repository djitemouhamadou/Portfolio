import React from 'react';
import { BriefcaseIcon, CalendarIcon, MapPinIcon, CheckIcon } from 'lucide-react';
export const Experience = () => {
  const experiences = [{
    title: 'Data Scientist',
    company: 'ENEDIS',
    location: 'Noisy-Le-Grand, France',
    period: '09/2023 - 09/2025',
    responsibilities: ['Analyse et structuration de données multi-métiers.', 'Conception de dashboards automatisés, réduisant le temps de reporting de plusieurs heures/mois et facilitant la prise de décision.', "Support aux équipes dans l'exploitation de leurs données.", "Animation de 6 sessions pour l'Académie Data (20 collaborateurs formés à Power BI).", 'Gestion de projets data: recueil du besoin, production, restitution, prise en compte des retours.']
  }, {
    title: 'Stage en statistiques et analyse de données',
    company: 'ANSD',
    location: 'Dakar, Sénégal',
    period: '06/2024 - 09/2024',
    responsibilities: ["Supervision terrain et contrôle qualité dans le cadre d'enquêtes statistiques nationales.", 'Traitement et nettoyage des données (Stata, R) pour garantir leur exploitabilité analytique.', 'Visualisation des résultats via dashboards clairs et graphiques interactifs, facilitant la prise de décision.']
  }, {
    title: 'Professeur de mathématiques',
    company: 'Complétude',
    location: '',
    period: '09/2022 - 10/2023',
    responsibilities: ["Pédagogie personnalisée favorisant l'autonomie et la compréhension des élèves."]
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