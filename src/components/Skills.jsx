// components/Skills.js
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "React.js",
        "Next.js",
        "JavaScript (ES6+)",
        "TailwindCSS",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "Material UI"
      ]
    },
    {
      title: "Backend Development",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "REST APIs",
        "Authentication",
        "Database Design",
        "API Integration"
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        "Git & GitHub",
        "VS Code",
        "Postman",
        "npm/yarn",
        "Firebase Tools",
        "Vercel",
        "Netlify",
        "Chrome DevTools"
      ]
    },
    {
      title: "Professional Skills",
      skills: [
        "Problem Solving",
        "Clean Code",
        "Code Review",
        "Team Collaboration",
        "Version Control",
        "Agile/Scrum",
        "Technical Writing",
        "Testing"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg
                         hover:transform hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex items-center space-x-2"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;