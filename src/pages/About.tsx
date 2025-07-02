
import React from 'react';
import Navigation from '@/components/Navigation';
import { GraduationCap, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-cyan-400">Me</span>
            </h1>
            <p className="text-xl text-gray-400">Get to know me better</p>
          </div>

          {/* Profile Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-cyan-400">Profile Overview</h2>
              <p className="text-gray-300 leading-relaxed">
                I'm <strong className="text-white">Shaikh Abdul Rheman Mohsin</strong>, a passionate and driven Data Analyst 
                with a Computer Science Engineering degree. Currently interning at Inditronics, I specialize in 
                extracting actionable insights from complex datasets.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I value discipline, time, and continuous growth—focusing on building real-world data solutions 
                without the noise of distractions. My approach combines technical expertise with clear communication 
                to bridge the gap between data and decision-making.
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg p-1">
                  <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center">
                    <div className="text-4xl font-bold text-cyan-400">SAR</div>
                  </div>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg opacity-20 blur-lg"></div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-cyan-400 flex items-center">
              <GraduationCap className="mr-3" />
              Education
            </h2>
            
            <div className="space-y-6">
              {/* Bachelor's Degree */}
              <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-cyan-400">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">
                    B.E. in Computer Science Engineering
                  </h3>
                  <span className="text-cyan-400 font-medium">2021–2025</span>
                </div>
                <p className="text-gray-300 mb-2">Everest College of Engineering and Technology</p>
                <div className="flex items-center">
                  <Award className="h-4 w-4 text-yellow-400 mr-2" />
                  <span className="text-yellow-400 font-medium">A Grade, No Backlogs</span>
                </div>
              </div>

              {/* HSC */}
              <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-blue-400">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">HSC (Higher Secondary Certificate)</h3>
                  <span className="text-blue-400 font-medium">2021</span>
                </div>
                <p className="text-gray-300 mb-2">Maulana Azad College</p>
                <div className="flex items-center">
                  <Award className="h-4 w-4 text-yellow-400 mr-2" />
                  <span className="text-yellow-400 font-medium">85% - Science Stream (PCB + Math)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Values */}
          <div className="mt-16 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">Core Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⏰</span>
                </div>
                <h3 className="font-semibold text-white mb-2">Discipline</h3>
                <p className="text-gray-400 text-sm">Structured approach to problem-solving</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="font-semibold text-white mb-2">Growth</h3>
                <p className="text-gray-400 text-sm">Continuous learning and improvement</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-semibold text-white mb-2">Focus</h3>
                <p className="text-gray-400 text-sm">Quality over quantity approach</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
