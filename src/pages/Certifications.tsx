import React from 'react';
import Navigation from '@/components/Navigation';
import { ExternalLink, Award, Calendar, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Certifications = () => {
  const certifications = [
    {
      title: 'Prompt Engineering for ChatGPT',
      provider: 'Vanderbilt University (Coursera)',
      date: 'Completed',
      credentialUrl: 'https://coursera.org/share/f18e3da7ffef1becf97f78abe416aa8a',
      description: 'Comprehensive course covering advanced prompt engineering techniques for ChatGPT and other AI language models. Learned to craft effective prompts, understand AI limitations, and optimize AI interactions for various applications.',
      skills: ['Prompt Engineering', 'AI Communication', 'ChatGPT', 'Natural Language Processing'],
      category: 'AI & Machine Learning'
    },
    {
      title: 'Python Complete Course',
      provider: 'Udemy',
      date: 'Completed',
      credentialUrl: 'https://www.udemy.com/certificate/UC-22aa15e4-fa41-4dd5-b33c-aaf11a0d54b7/',
      description: 'Complete Python programming course covering fundamentals to advanced topics including data structures, object-oriented programming, file handling, and web development basics.',
      skills: ['Python Programming', 'Data Structures', 'OOP', 'Web Development', 'Problem Solving'],
      category: 'Programming'
    },
    {
      title: 'Git And Github Complete Course',
      provider: 'Udemy',
      date: 'Completed',
      credentialUrl: 'https://www.udemy.com/certificate/UC-22aa15e4-fa41-4dd5-b33c-aaf11a0d54b7/',
      description: 'Comprehensive course on version control using Git and GitHub. Covered branching strategies, collaboration workflows, pull requests, and best practices for code management.',
      skills: ['Git', 'GitHub', 'Version Control', 'Collaboration', 'Code Management'],
      category: 'Development Tools'
    },
    {
      title: 'Microsoft Excel Beginner to Advanced',
      provider: 'Udemy',
      date: 'Completed',
      credentialUrl: 'https://www.udemy.com/certificate/UC-b1141948-4af9-40e8-9587-3fa0405d7bd3/',
      description: 'Advanced Excel course covering formulas, pivot tables, data analysis, macros, and dashboard creation. Essential skills for data analysis and business intelligence.',
      skills: ['Excel', 'Data Analysis', 'Pivot Tables', 'Macros', 'Dashboard Creation'],
      category: 'Data Analysis'
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
              My <span className="text-cyan-400">Certifications</span>
            </h1>
            <p className="text-xl text-gray-400">Professional certifications and continuous learning</p>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
              >
                {/* Certificate Header */}
                <div className="h-32 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center relative">
                  <Award className="h-16 w-16 text-cyan-400" />
                  <div className="absolute top-4 right-4">
                    <span className="text-xs font-medium text-cyan-400 bg-cyan-500/20 px-2 py-1 rounded">
                      {cert.category}
                    </span>
                  </div>
                </div>
                
                {/* Certificate Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {cert.title}
                  </h3>
                  
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Building className="h-4 w-4 mr-2" />
                      {cert.provider}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {cert.date}
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {cert.description}
                  </p>
                  
                  {/* Skills */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Skills Gained:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  <Button 
                    onClick={() => window.open(cert.credentialUrl, '_blank')}
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Credential
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6 text-center">Certification Statistics</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">4+</div>
                <div className="text-gray-400">Certifications Earned</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">3</div>
                <div className="text-gray-400">Different Platforms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">4</div>
                <div className="text-gray-400">Skill Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
                <div className="text-gray-400">Completion Rate</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Certifications;
