
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Contact } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';

const Index = () => {
  const handleDownloadResume = () => {
    // Convert Google Drive view link to direct download link
    const driveUrl = 'https://drive.google.com/file/d/1xAgkcU4-_sbZh1wpZLMw-bjOv4-dEnCI/view?usp=sharing';
    const fileId = driveUrl.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
    if (fileId) {
      const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
      window.open(downloadUrl, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <main className="container mx-auto px-6 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Turning Data into{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Decisions
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-300">
                I'm <span className="text-cyan-400 font-semibold">Shaikh Abdul Rheman Mohsin</span>,
                <br />a Data Analyst & Web Developer
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl">
                Skilled in Python, Power BI, and building impactful dashboards that drive business decisions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                asChild 
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <Link to="/projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button 
                onClick={handleDownloadResume}
                variant="outline" 
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              
              <Button 
                asChild
                variant="ghost" 
                className="text-gray-300 hover:text-white hover:bg-gray-800 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                <Link to="/contact">
                  <Contact className="mr-2 h-4 w-4" />
                  Contact Me
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400">4+</div>
                <div className="text-sm text-gray-400">Years of Study</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400">5+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400">3+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400">1</div>
                <div className="text-sm text-gray-400">Internship</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full p-1">
                <div className="w-full h-full bg-gray-800 rounded-full overflow-hidden">
                  <img 
                    src="/src/assets/profile-circular.png" 
                    alt="Shaikh Abdul Rheman Mohsin" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
