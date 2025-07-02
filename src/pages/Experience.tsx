
import React from 'react';
import Navigation from '@/components/Navigation';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

const Experience = () => {
  const experience = {
    position: 'Data Analyst Intern',
    company: 'Inditronics',
    duration: 'June 25, 2024 – December 25, 2024',
    location: 'Remote/Hybrid',
    status: 'Current',
    description: 'Hands-on work with real datasets, reporting insights, and creating dashboards to support decision-making processes.',
    responsibilities: [
      'Analyzed complex datasets to extract actionable business insights',
      'Created interactive dashboards and reports using Power BI',
      'Collaborated with cross-functional teams to understand data requirements',
      'Performed data cleaning, transformation, and validation processes',
      'Presented findings and recommendations to stakeholders',
      'Automated routine data analysis tasks using Python scripts',
      'Conducted statistical analysis to identify trends and patterns',
      'Maintained data quality and integrity across multiple sources'
    ],
    achievements: [
      'Improved data processing efficiency by 40% through automation',
      'Created 15+ interactive dashboards for different departments',
      'Identified key performance indicators that influenced strategic decisions',
      'Reduced manual reporting time by 60% through process optimization'
    ],
    skills: ['Python', 'Power BI', 'SQL', 'Excel', 'Statistical Analysis', 'Data Visualization']
  };

  const timeline = [
    {
      date: 'June 2024',
      title: 'Started Internship',
      description: 'Began internship at Inditronics as Data Analyst'
    },
    {
      date: 'July 2024',
      title: 'First Dashboard',
      description: 'Created first interactive Power BI dashboard'
    },
    {
      date: 'September 2024',
      title: 'Process Automation',
      description: 'Implemented Python scripts for data automation'
    },
    {
      date: 'November 2024',
      title: 'Stakeholder Presentation',
      description: 'Presented insights to senior management'
    },
    {
      date: 'December 2024',
      title: 'Internship Completion',
      description: 'Successfully completed 6-month internship'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-cyan-400">Experience</span>
            </h1>
            <p className="text-xl text-gray-400">Professional journey and achievements</p>
          </div>

          {/* Main Experience Card */}
          <div className="bg-gray-800 rounded-lg p-8 mb-12 border-l-4 border-cyan-400">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
              <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <Briefcase className="h-8 w-8 text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{experience.position}</h2>
                  <h3 className="text-xl text-cyan-400 font-semibold">{experience.company}</h3>
                  <div className="flex items-center space-x-4 text-gray-400 mt-2">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {experience.duration}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {experience.location}
                    </div>
                  </div>
                </div>
              </div>
              <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                {experience.status}
              </span>
            </div>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {experience.description}
            </p>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Responsibilities */}
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Key Responsibilities</h4>
                <ul className="space-y-3">
                  {experience.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Key Achievements</h4>
                <ul className="space-y-3 mb-6">
                  {experience.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {achievement}
                    </li>
                  ))}
                </ul>

                <h4 className="text-xl font-semibold text-white mb-4">Skills Utilized</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-8 text-center">Internship Timeline</h2>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-cyan-400"></div>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-start">
                    <div className="absolute left-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="ml-12">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                        <span className="text-cyan-400 text-sm font-medium">{item.date}</span>
                      </div>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Future Goals */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Looking Forward</h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Building on this internship experience, I'm excited to take on new challenges in data analysis 
              and continue growing my expertise in turning complex data into actionable business insights. 
              I'm actively seeking full-time opportunities where I can contribute to data-driven decision making 
              and organizational growth.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Experience;
