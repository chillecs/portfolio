import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from 'react-icons/fa';
import profile from '../assets/profile.png';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#030712] via-[#032236] to-[#030712] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#01ADEB] rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-[#F6339A] rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-[#4A5565] rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          {/* Profile Image Placeholder */}
          <div className="mx-auto w-48 h-48 rounded-full bg-gradient-to-br from-[#01ADEB] to-[#4A5565] p-1">
            <div className="w-full h-full rounded-full bg-[#030712] flex items-center justify-center">
              <img src={profile} alt="Profile" className="w-full h-full rounded-full object-cover" />
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              Hi, I'm <span className="text-[#01ADEB]">Mircea-Cristian Miga</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#4A5565] max-w-3xl mx-auto">
              Junior Web Developer & Lifelong Learner
            </p>
            <p className="text-lg text-[#4A5565] max-w-2xl mx-auto leading-relaxed">
              I'm 18-year-old from Romania who really likes to learn new things and create something that is useful and can help people.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-[#01ADEB] hover:bg-[#01ADEB]/80 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center gap-2">
              <FaDownload />
              Download CV
            </button>
            <button className="border-2 border-[#01ADEB] text-[#01ADEB] hover:bg-[#01ADEB] hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 cursor-pointer">
              View My Work
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <a href="https://github.com/chillecs" className="text-[#4A5565] hover:text-[#01ADEB] transition-colors duration-300 cursor-pointer" target="_blank">
              <FaGithub size={28} />
            </a>
            <a href="https://www.linkedin.com/in/cristian-mircea-552b7335a/" className="text-[#4A5565] hover:text-[#01ADEB] transition-colors duration-300 cursor-pointer" target="_blank">
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#4A5565] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#01ADEB] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
