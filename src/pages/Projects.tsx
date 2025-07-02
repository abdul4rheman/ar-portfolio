
import React from 'react';
import Navigation from '@/components/Navigation';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Sales Data Analysis',
      description: 'Comprehensive analysis of sales data with interactive Power BI dashboard showing trends, patterns, and key performance indicators.',
      tools: ['Python', 'Power BI', 'Pandas', 'NumPy'],
      category: 'Data Analysis',
      image: '/api/placeholder/400/250',
      status: 'Completed'
    },
    {
      title: 'Netflix Data Analysis',
      description: 'Deep dive into Netflix content data to identify viewing trends, content patterns, and regional preferences using Python.',
      tools: ['Python', 'Matplotlib', 'Seaborn', 'Pandas'],
      category: 'Data Analysis',
      image: '/api/placeholder/400/250',
      status: 'Completed'
    },
    {
      title: 'Uber Data Analysis',
      description: 'Exploration of Uber ride patterns, surge pricing analysis, and geographical trend identification for business insights.',
      tools: ['Python', 'Folium', 'Pandas', 'Plotly'],
      category: 'Data Analysis',
      image: '/api/placeholder/400/250',
      status: 'Completed'
    },
    {
      title: 'PYQ Bank',
      description: 'Dynamic student web platform for accessing previous year questions with user authentication and content management system.',
      tools: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      category: 'Web Development',
      image: '/api/placeholder/400/250',
      status: 'Completed'
    },
    {
      title: 'Real World School Website',
      description: 'Fully responsive static website for educational institution with modern design and optimized performance.',
      tools: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      category: 'Web Development',
      image: '/api/placeholder/400/250',
      status: 'Completed'
    }
  ];

  const categories = ['All', 'Data Analysis', 'Web Development'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-cyan-400">Projects</span>
            </h1>
            <p className="text-xl text-gray-400">Showcasing my work and achievements</p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-4 bg-gray-800 p-2 rounded-lg">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                    activeCategory === category
                      ? 'bg-cyan-500 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={index} 
                className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center">
                  <div className="text-4xl font-bold text-cyan-400">{project.title.charAt(0)}</div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-cyan-400 bg-cyan-500/20 px-2 py-1 rounded">
                      {project.category}
                    </span>
                    <span className="text-xs text-green-400">{project.status}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Tools */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((tool, toolIndex) => (
                      <span 
                        key={toolIndex}
                        className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="bg-cyan-500 hover:bg-cyan-600 text-white flex-1"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View More
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6 text-center">Project Statistics</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">5+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">8+</div>
                <div className="text-gray-400">Technologies Used</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">2</div>
                <div className="text-gray-400">Main Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
                <div className="text-gray-400">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
