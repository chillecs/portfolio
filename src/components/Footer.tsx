import React from 'react';
import { FaGithub, FaLinkedin, FaHeart, FaArrowUp } from 'react-icons/fa';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quick: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Projects', href: '#projects' },
      { name: 'Skills', href: '#skills' },
      { name: 'Contact', href: '#contact' }
    ],
    social: [
      { name: 'GitHub', icon: <FaGithub />, href: 'https://github.com/chillecs' },
      { name: 'LinkedIn', icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/cristian-mircea-552b7335a/' }
    ]
  };

  return (
    <footer className="bg-[#030712] border-t border-[#4A5565]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-3xl font-bold text-white">
                <span className="text-[#01ADEB]">Port</span>folio
              </span>
            </div>
            <p className="text-[#4A5565] leading-relaxed mb-6 max-w-md">
              I hope you enjoy my portfolio. If you have any questions, feel free to contact me.
            </p>
            <div className="flex space-x-4">
              {footerLinks.social.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-[#032236] hover:bg-[#01ADEB] text-[#4A5565] hover:text-white p-3 rounded-lg transition-all duration-300 transform hover:scale-110 cursor-pointer" target="_blank"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.quick.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#4A5565] hover:text-[#01ADEB] transition-colors duration-300 cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3 text-[#4A5565]">
              <p>+49 15214177462</p>
              <p>Cluj-Napoca, Romania</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#4A5565]/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-[#4A5565] mb-4 md:mb-0">
            <span>© {currentYear} Mircea-Cristian Miga. Made with</span>
            <FaHeart className="text-[#F6339A] animate-pulse" />
            <span>and lots of energy drinks.</span>
          </div>
          
          <button
            onClick={scrollToTop}
            className="bg-[#01ADEB] hover:bg-[#01ADEB]/80 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 cursor-pointer"
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
