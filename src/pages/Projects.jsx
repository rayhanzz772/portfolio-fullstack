import React from 'react';

function Projects() {
  return (
    <section
      id="projects"
      className="h-screen flex items-center justify-center bg-black"
    >
      <div className="text-center px-6">
        <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
        <p className="text-lg text-gray-300 max-w-xl">
          Here's a collection of works I've built, including full-stack web applications, design prototypes, and more.
        </p>
      </div>
    </section>
  );
}

export default Projects;
