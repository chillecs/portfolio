import React from 'react';
import { FaCode, FaPalette, FaRocket, FaUsers } from 'react-icons/fa';

const About: React.FC = () => {
  const stats = [
    { number: '4', label: 'Personal Projects' },
    { number: '8', label: 'Months Learning' },
    { number: '6', label: 'Months Course' },
    { number: '100%', label: 'Passion & Dedication' }
  ];

  const services = [
    {
      icon: <FaCode className="text-3xl text-[#01ADEB]" />,
      title: 'Web Development',
      description: 'I build responsive and accessible web applications using modern web technologies and best practices.'
    },
    {
      icon: <FaPalette className="text-3xl text-[#01ADEB]" />,
      title: 'UI/UX Design',
      description: 'I create intuitive and user-friendly interfaces that enhance user experience and engagement.'
    },
    {
      icon: <FaRocket className="text-3xl text-[#01ADEB]" />,
      title: 'Performance Optimization',
      description: 'I focus on building efficient and scalable web applications that deliver optimal performance, has clean and readable code and is easy to maintain.'
    },
    {
      icon: <FaUsers className="text-3xl text-[#01ADEB]" />,
      title: 'Team Collaboration',
      description: 'I believe in the power of collaboration and teamwork. I enjoy working with others to create amazing web applications and learn from them.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#030712]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-[#01ADEB]">Me</span>
          </h2>
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">
              Junior Developer & Lifelong Learner
            </h3>
            <p className="text-[#4A5565] leading-relaxed">
              I'm a passionate junior web developer with 8 months of hands-on experience building personal projects. I recently completed a comprehensive 6-month Web Development course at Scoala Informala de IT, a prestigious Romanian coding school that provided me with a solid foundation in modern web technologies.
            </p>
            <p className="text-[#4A5565] leading-relaxed">
              My journey in web development has been driven by curiosity and a genuine love for solving problems. Having the ability to create something that is useful and can help people is what drives me.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-[#01ADEB]/20 text-[#01ADEB] px-4 py-2 rounded-full text-sm font-medium">
                React.js
              </span>
              <span className="bg-[#01ADEB]/20 text-[#01ADEB] px-4 py-2 rounded-full text-sm font-medium">
                TypeScript
              </span>
              <span className="bg-[#01ADEB]/20 text-[#01ADEB] px-4 py-2 rounded-full text-sm font-medium">
                JavaScript
              </span>
              <span className="bg-[#01ADEB]/20 text-[#01ADEB] px-4 py-2 rounded-full text-sm font-medium">
                TailwindCSS
              </span>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-[#01ADEB] to-[#4A5565] p-1 rounded-2xl">
              <div className="bg-[#030712] rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-[#01ADEB] mb-2">
                        {stat.number}
                      </div>
                      <div className="text-[#4A5565] text-sm">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-[#032236] p-6 rounded-xl hover:bg-[#032236]/80 transition-all duration-300 transform hover:scale-105">
              <div className="mb-4">
                {service.icon}
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h4>
              <p className="text-[#758aa8] text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
