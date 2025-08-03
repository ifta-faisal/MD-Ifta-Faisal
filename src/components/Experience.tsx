import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
  
    {
      title: "Communication Sub Team Lead",
      company: "UIU Mars Rover Team",
      period: "2024 - 2025",
      location: "Bangladesh",
      description: "Contributed to the team's success in renowned international competitions such as the Anatolian Rover Challenge (ARC) in Turkey and the University Rover Challenge (URC) in the United States.Led the team in prestigious international competitions including Anatolian Rover Challenge (ARC) in Turkey and University Rover Challenge (URC) in the United States."
    },
      {
      title: "Executive",
      company: "UIU Robotics Club",
      period: "2024 - 2025",
      location: "United International University ,Dhaka Bangladesh",
      description: "Active member contributing to the Club."
    },
    {
      title: "Member",
      company: "The Mars Society",
      period: "2024 - Present",
      location: "International",
      description: "Active member contributing to interplanetary systems research and space exploration initiatives."
    }
  ];

  const education = [
    
      {
      degree: "Bachelor of Science in Computer Science & Engineering",
      institution: "United International University",
      period: "2022 - Present",
      location: "Dhaka, Bangladesh"
    },
    
    {
      degree: "Higher Secondary School Certificate",
      institution: "Ishwardi Govt. College",
      period: "2019 - 2020",
      location: "Ishwardi, Pabna"
    },
    {
      degree: "Secondary School Certificate",
      institution: "Govt. Sara Marwari Model School & College",
      period: "2017 - 20218",
      location: "Ishwardi, Pabna"
    }
  
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16">
          Experience & Education
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Award className="mr-3 text-blue-600" size={28} />
              Professional Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-6 pb-8">
                  <h4 className="text-xl font-bold text-gray-900">{exp.title}</h4>
                  <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                  <div className="flex items-center text-gray-600 mt-2 mb-3">
                    <Calendar size={16} className="mr-2" />
                    <span className="mr-4">{exp.period}</span>
                    <MapPin size={16} className="mr-2" />
                    <span>{exp.location}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Award className="mr-3 text-green-600" size={28} />
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-green-600 pl-6 pb-8">
                  <h4 className="text-xl font-bold text-gray-900">{edu.degree}</h4>
                  <p className="text-lg text-green-600 font-semibold">{edu.institution}</p>
                  <div className="flex items-center text-gray-600 mt-2 mb-3">
                    <Calendar size={16} className="mr-2" />
                    <span className="mr-4">{edu.period}</span>
                    <MapPin size={16} className="mr-2" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;