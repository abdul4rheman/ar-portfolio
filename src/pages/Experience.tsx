import React from 'react';
import Navigation from '@/components/Navigation';
import { Briefcase, Calendar, MapPin, CheckCircle, Award, Users, Trophy } from 'lucide-react';

const Experience = () => {
  const experience = {
    position: 'Data Analyst Intern',
    company: 'Inditronics',
    duration: 'June 25, 2024 – December 25, 2024',
    location: 'Remote/Hybrid',
    status: 'Completed',
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

  const academicAchievements = [
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Class Representative (1st to 3rd Year)',
      period: '2021',
      description: 'Represented a cohort of 60+ students for 3 consecutive years, facilitating communication between faculty and students, organizing academic events, and resolving student concerns.',
      impact: 'Enhanced student-faculty communication'
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: 'General Secretary – Annual College Gathering',
      period: '2025',
      description: 'Led the planning and execution of college-wide events, including sports, indoor games, and a cultural night, resulting in a 30% increase in student engagement compared to the previous year.',
      impact: '30% increase in student engagement'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Cultural Secretary',
      period: '2023 & 2024',
      description: 'Managed logistics, coordinated with 10+ teams, and oversaw event flow for two successful Annual Gatherings, ensuring 100% event delivery within planned timelines.',
      impact: '100% event delivery success rate'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'College Student Council Member',
      period: 'Ongoing',
      description: 'Supported peers with resume building, mock interviews, and pre-placement training initiatives; contributed to increasing placement participation by 20% in the department.',
      impact: '20% increase in placement participation'
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

          {/* Academic Achievements */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-cyan-400 mb-8 text-center">Academic Achievements</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {academicAchievements.map((achievement, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400 flex-shrink-0">
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-white">{achievement.title}</h3>
                        <span className="text-cyan-400 text-sm font-medium">{achievement.period}</span>
                      </div>
                      <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                        {achievement.description}
                      </p>
                      <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-2">
                        <p className="text-cyan-400 text-xs font-medium">
                          Impact: {achievement.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Future Goals */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Looking Forward</h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Building on this internship experience and academic achievements, I'm excited to take on new challenges in data analysis 
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
