import React, { useState, useEffect } from 'react';
import { Facebook, Github, Linkedin, ArrowLeft, ArrowRight } from 'lucide-react';
import img1 from '../assets/img_1.jpg';
import img15 from '../assets/img_15.jpg';
import img16 from '../assets/img_16.jpg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  const slides = [
    {
      image: img1,
      title: "Hello",
      subtitle: "I'm MD IFta Faisal",
      description: "I specialize in UAV and robotics with deep expertise in drone systems, battery technology, and autonomous machines. My journey has been largely self-taught—driven by relentless curiosity and hands-on learning.",
      buttonText: "Let's Connect",
      email: "iftafaisal759@gmail.com"
    },
    {
      image: img16,
      title: "UIU Mars Rover",
      subtitle: "Communication Sub Team Lead",
      description: "Participated in prestigious international competitions including Anatolian Rover Challenge (ARC) in Turkey and University Rover Challenge (URC) in the United States.",
      buttonText: "Let's Connect",
      email: "iftafaisal759@gmail.com"
    },
    {
      image: img15,
      title: "Executive",
      subtitle: "UIU Robotics Club",
      description: "Leading a dedicated to empowering makers, students, and professionals with high-quality tools for drones, robotics, and across Bangladesh..",
      buttonText: "Let's Connect",
      email: "iftafaisal759@gmail.com"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsHeroVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    const heroElement = document.querySelector('#hero');
    if (heroElement) observer.observe(heroElement);

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const scrollToSection = (id: string) => {
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.warn(`Section with ID '${id}' not found.`);
      }
    }, 100);
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={slide.image} alt={slide.title} className="w-full h-[130vh] object-cover object-center" />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 min-h-screen flex items-center">
        <div className="max-w-2xl">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 absolute'}`}
            >
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-6xl lg:text-8xl font-bold text-white leading-tight">
                    <span className="text-orange-400">{slide.title}</span>
                  </h1>
                  <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">{slide.subtitle}</h2>
                </div>
                <p className="text-lg text-gray-200 leading-relaxed max-w-xl">{slide.description}</p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="px-8 py-4 border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black transition-all duration-300 font-semibold tracking-wide"
                  >
                    {slide.buttonText}
                  </button>
                  <a href={`mailto:${slide.email}`} className="text-white hover:text-orange-400 transition-colors underline text-lg">
                    {slide.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button onClick={prevSlide} className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 p-4 bg-black bg-opacity-30 hover:bg-opacity-50 text-white rounded-full transition-all duration-300 hover:scale-110">
        <ArrowLeft size={24} />
      </button>
      <button onClick={nextSlide} className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 p-4 bg-black bg-opacity-30 hover:bg-opacity-50 text-white rounded-full transition-all duration-300 hover:scale-110">
        <ArrowRight size={24} />
      </button>

      {/* Slide Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-orange-400 scale-125' : 'bg-white bg-opacity-50 hover:bg-opacity-75'}`}
          />
        ))}
      </div>

      {/* Social Icons */}
      <div className={`fixed right-8 top-8 z-50 flex space-x-4 transition-all duration-500 ${isHeroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'}`}>
        <a href="https://www.facebook.com/ifta.faishal.7" className="p-4 bg-gray-800 bg-opacity-80 hover:bg-opacity-100 text-white hover:text-blue-400 rounded-full"><Facebook size={20} /></a>
        <a href="https://github.com/ifta-faisal" className="p-4 bg-gray-800 bg-opacity-80 hover:bg-opacity-100 text-white hover:text-gray-300 rounded-full"><Github size={20} /></a>
        <a href="https://www.linkedin.com/in/ifta-faisal-030738255?" className="p-4 bg-gray-800 bg-opacity-80 hover:bg-opacity-100 text-white hover:text-blue-600 rounded-full"><Linkedin size={20} /></a>
      </div>

      {/* Quick Nav with PROJECT GALLERY */}
      <div className={`absolute bottom-12 left-8 z-20 hidden lg:flex space-x-8 transition-all duration-500 ${isHeroVisible ? 'opacity-100' : 'opacity-0'}`}>
        <button onClick={() => scrollToSection('experience')} className="text-white hover:text-orange-400 font-medium text-sm tracking-wide">EXPERIENCE & EDUCATION</button>
        <button onClick={() => scrollToSection('skills')} className="text-white hover:text-orange-400 font-medium text-sm tracking-wide">SKILLS</button>
        <button onClick={() => scrollToSection('success')} className="text-white hover:text-orange-400 font-medium text-sm tracking-wide">SUCCESS</button>
        <button onClick={() => scrollToSection('project-gallery')} className="text-white hover:text-orange-400 font-medium text-sm tracking-wide">GALLERY</button>
      </div>
    </section>
  );
};

export default Hero;
