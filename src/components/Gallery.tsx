import React from 'react';

const Gallery = () => {
  const projects = [
    {
      title: "Mars Rover Competition 2024 ",
      image: "img_4.jpg",
      description: "UIU Mars Rover Team competing in international challenges"
    },
    {
      title: "Custom Drone Design",
      image: "img_5.jpg",
      description: "High-performance quadrotor with custom Frame"
    },
    {
      title: "Mars Rover Competition 2025",
      image: "img_6.jpg",
      description: "UIU Mars Rover Team competing in international challenges"
    },
    {
      title: "Custom Drone ",
      image: "img_9.png",
      description: "Custom made Surveillance Drone"
    },
    {
      title: "FPV Drone",
      image: "img_8.jpg",
      description: " Custom Made FPV Drone"
    },
    {
      title: "Competition Success",
      image: "img_7.jpg",
      description: "University Rover Challange 2025 Best Science Team"
    },
     {
      title: "Mars Rover Competition 2024 ",
      image: "img_4.jpg",
      description: "UIU Mars Rover Team competing in international challenges"
    },
    {
      title: "Custom Drone's ",
      image: "img_14.jpg",
      description: "High-performance quadrotors"
    },
    {
      title: "URC 2024",
      image: "img_10.jpg",
      description: "University Rover Challange 2024"
    },
    {
      title: "URC 2024 ",
      image: "img_13.jpg",
      description: "University Rover Challange 2024"
    },
    {
      title: "URC 2025",
      image: "img_12.jpg",
      description: " University Rover Challange 202"
    },
    {
      title: "URC 2025",
      image: "img_11.jpg",
      description: "University Rover Challange 2025 "
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16">
          Project Gallery
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm opacity-90">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;