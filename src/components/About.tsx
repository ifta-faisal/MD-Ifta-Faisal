import React from 'react';

const About = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(/img_2.jpg)'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h2 className="text-5xl lg:text-6xl font-bold text-white mb-12">
          ABOUT MY JOURNEY
        </h2>
        
        <div className="max-w-5xl mx-auto space-y-8 text-white">
          <p className="text-lg lg:text-xl leading-relaxed">
            I'm MD Ifta Faisal , A passionate UAV and robotics specialist with a strong foundation in autonomous systems, power electronics, and hands-on innovation.

Driven by curiosity and self-learning, my journey in robotics has led me to lead the UIU Mars Rover Team in globally renowned competitions like the Anatolian Rover Challenge (Turkey) and the University Rover Challenge (USA). These international platforms not only sharpened my technical and leadership skills but also deepened my passion for space robotics and interplanetary exploration—further fueled by my involvement with The Mars Society.

In parallel, I’ve designed and built award-winning UAV platforms—from endurance-optimized quadcopters to heavy-lift X8 drones—with a strong focus on performance, reliability, and real-world application. I also engineer custom lithium battery packs specifically for robotics and aerial systems, prioritizing high-discharge capability and extended efficiency.

As the founder of Robotonbd, I aim to bridge the gap between advanced tech and emerging talent—equipping makers, students, and professionals with the tools and resources to innovate in drones, robotics, and STEM education. Whether it’s building a rover, powering a long-range UAV, or mentoring future engineers—I’m committed to creating meaningful impact through engineering.

 </p>
          
          <p className="text-lg lg:text-xl leading-relaxed">
           As the Communication Sub-Team Lead of the UIU Mars Rover Team, I had the privilege of contributing to prestigious international competitions such as the Anatolian Rover Challenge (ARC) in Turkey and the University Rover Challenge (URC) in the United States. These experiences enhanced my expertise in communication systems and team collaboration, while immersing me in the forefront of robotics, autonomous systems, and space exploration. I'm also a proud member of The Mars Society, which continues to inspire my passion for interplanetary technology and innovation</p>
          
          <p className="text-lg lg:text-xl leading-relaxed">
            Alongside robotics, I've achieved notable success in the UAV domain—designing and building drones that have won multiple national competitions. From high-endurance quadrotors to heavy-lift X8 platforms, my designs emphasize innovation, reliability, and real-world performance. I also specialize in custom battery pack design tailored for robotics and drone applications—balancing high-discharge rates with long runtime efficiency.
          </p>
          
          
        </div>
      </div>
    </section>
  );
};

export default About;