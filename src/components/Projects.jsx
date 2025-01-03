// components/Projects.js
import React, { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Job Hunt",
      category: "web",
      image: "/projects/jobhunt.png",
      description: "A comprehensive job portal application",
      tags: ["Reactjs", "TailwindCSS", "postgreSQL", "ShadCN", "Supabase", "Vercel"],
      liveLink: "https://job-hunt-sooty.vercel.app/"
    },
    {
      id: 2,
      title: "Password Generator",
      category: "web",
      image: "/projects/passwordgen.png",
      description: "Secure password generation tool",
      tags: ["React", "Firebase", "Strings"],
      liveLink: "https://password-generator-24427.web.app/"
    },
    {
      id: 3,
      title: "Crypto Tracker",
      category: "web",
      image: "/projects/crypto.png",
      description: "Real-time cryptocurrency tracking application",
      tags: ["ReactJs", "Axios", "Bootstrap"],
      liveLink: "https://crypto-app-d7439.web.app/"
    },
    {
      id: 4,
      title: "QR Code Generator",
      category: "other",
      image: "/projects/qrcode.png",
      description: "Generate QR codes for any text or URL",
      tags: ["React", "File-saver", "Axios"],
      liveLink: "https://qr-code-generator-e1e2e.web.app/"
    }
  ];

  const filterButtons = [
    { name: 'All', value: 'all' },
    { name: 'Web Development', value: 'web' },
    { name: 'Design', value: 'design' },
    { name: 'Other', value: 'other' }
  ];

  const filteredProjects = projects.filter(project => 
    filter === 'all' ? true : project.category === filter
  );

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filterButtons.map(button => (
            <button
              key={button.value}
              onClick={() => setFilter(button.value)}
              className={`px-4 py-2 rounded-full transition-all duration-300
                ${filter === button.value 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
            >
              {button.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg
                         hover:transform hover:scale-[1.02] transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags && project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 
                               dark:text-blue-200 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;