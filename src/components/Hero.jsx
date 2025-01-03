// components/Hero.js
import React from 'react';

const Hero = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      };
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-900 dark:to-purple-900">
      <div className="text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Full Stack Web developer and Coding Enthusiast
        </p>
        <button onClick={() => scrollToSection('projects')}
        className="bg-white text-blue-600 dark:bg-gray-800 dark:text-white px-8 py-3 rounded-full
                          hover:transform hover:-translate-y-1 transition-all duration-200
                          hover:shadow-lg">
          View My Work
        </button>
      </div>
    </section>
  );
};

export default Hero;