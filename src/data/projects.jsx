import React from 'react';

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A modern e-commerce platform built with React and Node.js",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Full Stack",
    github: "https://github.com",
    link: "https://demo.com",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my work",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    technologies: ["React", "TailwindCSS", "Framer Motion"],
    category: "Frontend",
    github: "https://github.com",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task management application",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    technologies: ["React", "Firebase", "Material-UI"],
    category: "Full Stack",
    link: "https://demo.com",
  },
];

const ProjectList = () => {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <img src={project.image} alt={project.title} className="project-image" />
          <h2 className="project-title">{project.title}</h2>
          <p className="project-description">{project.description}</p>
          <p className="project-category">Category: {project.category}</p>
          <ul className="project-technologies">
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
          <div className="project-links">
            {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">Live Demo</a>}
            {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
