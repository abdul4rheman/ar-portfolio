
import React from 'react';
import Navigation from '@/components/Navigation';
import { BarChart3, Globe, Database, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Web Design & Development',
      description: 'Create responsive, user-friendly websites with modern design principles and optimal performance.',
      features: [
        'Responsive Design',
        'Modern UI/UX',
        'Performance Optimization',
        'Cross-browser Compatibility',
        'SEO Friendly'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL']
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Data Analysis & Insights',
      description: 'Transform complex datasets into actionable insights that drive informed business decisions.',
      features: [
        'Statistical Analysis',
        'Data Cleaning & Preprocessing',
        'Trend Identification',
        'Predictive Modeling',
        'Business Intelligence'
      ],
      technologies: ['Python', 'R', 'Pandas', 'NumPy', 'SciPy']
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Dashboard Development',
      description: 'Build interactive, clean dashboards using Power BI and Excel for real-time data monitoring.',
      features: [
        'Interactive Visualizations',
        'Real-time Data Updates',
        'KPI Monitoring',
        'Custom Reports',
        'Data Integration'
      ],
      technologies: ['Power BI', 'Excel', 'Matplotlib', 'Plotly', 'Seaborn']
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Business Intelligence',
      description: 'Provide comprehensive BI solutions to help organizations make data-driven strategic decisions.',
      features: [
        'Data Strategy Consulting',
        'Performance Metrics',
        'Market Analysis',
        'Competitive Intelligence',
        'ROI Optimization'
      ],
      technologies: ['SQL', 'MongoDB', 'Power BI', 'Python', 'R']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'Understanding your requirements and defining project scope'
    },
    {
      step: '02',
      title: 'Data Collection & Analysis',
      description: 'Gathering relevant data and performing initial analysis'
    },
    {
      step: '03',
      title: 'Development & Implementation',
      description: 'Building solutions using appropriate tools and technologies'
    },
    {
      step: '04',
      title: 'Testing & Optimization',
      description: 'Ensuring quality and optimizing for performance'
    },
    {
      step: '05',
      title: 'Delivery & Support',
      description: 'Final delivery with documentation and ongoing support'
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
              My <span className="text-cyan-400">Services</span>
            </h1>
            <p className="text-xl text-gray-400">Solutions I offer to help your business grow</p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gray-800 rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400 mr-4 group-hover:bg-cyan-500/30 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-8 text-center">My Process</h2>
            <div className="grid md:grid-cols-5 gap-4">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-cyan-400 font-bold text-lg">{step.step}</span>
                  </div>
                  <h3 className="font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and how I can help transform your data into actionable insights.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                Start a Project
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;
