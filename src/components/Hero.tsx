import React from 'react';
import { Facebook,Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight">
              MD Ifta Faisal
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              A self-driven UAV and robotics enthusiast with international exposure through Mars rover competitions, specializing in high-performance drones, custom battery packs, and STEM-focused innovation
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/ifta.faishal.7" 
                className="p-3 border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://github.com/ifta-faisal" 
                className="p-3 border-2 border-gray-300 hover:border-red-600 hover:text-red-600 transition-colors duration-300"
                aria-label="Github "
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/ifta-faisal-030738255?" 
                className="p-3 border-2 border-gray-300 hover:border-blue-700 hover:text-blue-700 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="img_3.jpg" 
                alt="MD Ifta Faisal at Zion Park"
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;