
import React from 'react';
import Navigation from '@/components/Navigation';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 90, tools: 'Pandas, NumPy, Matplotlib' },
        { name: 'R', level: 75, tools: 'Statistical Analysis' },
        { name: 'SQL', level: 85, tools: 'MySQL, MongoDB' },
        { name: 'PHP', level: 70, tools: 'Web Development' },
      ]
    },
    {
      title: 'Data & Analytics Tools',
      skills: [
        { name: 'Power BI', level: 88, tools: 'Dashboard Creation' },
        { name: 'Excel', level: 85, tools: 'Advanced Analytics' },
        { name: 'Matplotlib', level: 80, tools: 'Data Visualization' },
        { name: 'Statistical Analysis', level: 85, tools: 'Root Cause Analysis' },
      ]
    },
    {
      title: 'Technical Skills',
      skills: [
        { name: 'Data Cleaning', level: 90, tools: 'Preprocessing' },
        { name: 'Data Transformation', level: 88, tools: 'ETL Processes' },
        { name: 'Web Development', level: 75, tools: 'Responsive Design' },
        { name: 'Database Management', level: 80, tools: 'Query Optimization' },
      ]
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Communication', level: 92, tools: 'Stakeholder Engagement' },
        { name: 'Data Storytelling', level: 88, tools: 'Presentation Skills' },
        { name: 'Teamwork', level: 85, tools: 'Collaborative Projects' },
        { name: 'Logical Reasoning', level: 90, tools: 'Problem Solving' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-cyan-400">Skills</span>
            </h1>
            <p className="text-xl text-gray-400">Technologies and expertise I work with</p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-cyan-400 mb-6">{category.title}</h2>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-white">{skill.name}</span>
                        <span className="text-cyan-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <p className="text-gray-400 text-sm">{skill.tools}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Key Highlights */}
          <div className="mt-16 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6 text-center">Key Highlights</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="font-semibold text-white mb-2">Data Analysis</h3>
                <p className="text-gray-400 text-sm">Expert in extracting insights from complex datasets</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="font-semibold text-white mb-2">Visualization</h3>
                <p className="text-gray-400 text-sm">Creating compelling dashboards and reports</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="font-semibold text-white mb-2">Problem Solving</h3>
                <p className="text-gray-400 text-sm">Analytical thinking and logical reasoning</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Skills;
