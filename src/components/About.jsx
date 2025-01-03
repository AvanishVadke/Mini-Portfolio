// components/About.js
import React from 'react';

const About = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Full Stack React Developer
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Specialized in building modern web applications using React, Firebase, and various frontend technologies. 
              With experience in creating applications ranging from authentication systems to cryptocurrency trackers.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-blue-600 text-white px-6 py-2 rounded-full
                         hover:transform hover:-translate-y-1 transition-all duration-200"
              >
                View Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full
                         hover:bg-blue-50 dark:hover:bg-blue-900 transition-all duration-200"
              >
                Contact Me
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="font-bold mb-2">Frontend</h3>
              <ul className="space-y-2">
                <li>React.js</li>
                <li>TailwindCSS</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="font-bold mb-2">Backend</h3>
              <ul className="space-y-2">
                <li>Firebase</li>
                <li>Authentication</li>
                <li>Database</li>
                <li>Express</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;