import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaReact, FaJs, FaHtml5, FaCss3Alt, FaExpand} from 'react-icons/fa';
// Images
// -- Quotely
import quotelyImage from '../assets/quotelyImages/quotely-project.png';
// -- Marketplace
import marketplaceImage1 from '../assets/marketplaceImages/marketplaceImage1.png';
import marketplaceImage2 from '../assets/marketplaceImages/marketplaceImage2.png';
import marketplaceImage3 from '../assets/marketplaceImages/marketplaceImage3.png';
import marketplaceImage4 from '../assets/marketplaceImages/marketplaceImage4.png';
import marketplaceImage5 from '../assets/marketplaceImages/marketplaceImage5.png';
import marketplaceImage6 from '../assets/marketplaceImages/marketplaceImage6.png';
import marketplaceImage7 from '../assets/marketplaceImages/marketplaceImage7.png';
import marketplaceImage8 from '../assets/marketplaceImages/marketplaceImage8.png';
// -- Dragon Game
import dragonImage1 from '../assets/dragonGameImages/dragonImage1.png';
import dragonImage2 from '../assets/dragonGameImages/dragonImage2.png';
import dragonImage3 from '../assets/dragonGameImages/dragonImage3.png';
// -- Todo List App
import todoImage1 from '../assets/todoAppImages/todoImage1.png';
// --
import ProjectModal from './ProjectModal';

const Projects: React.FC = () => {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    images: string[];
    title: string;
  }>({
    isOpen: false,
    images: [],
    title: ''
  });

  const projects = [
    {
      title: 'Marketplace',
      description: 'This is a very complex project that i made while learning React. It is a marketplace for buying and selling products. With full CRUD functionality and authentication. Users can register, login, add products to the marketplace, buy products and view their profile. Edit and delete their own products. Also there is a search bar and a filter for the products. There are categories and subcategories for the products. Sadly i can not publish it on Github for live server because it is too big and complex.',
      images: [marketplaceImage1, marketplaceImage2, marketplaceImage3, marketplaceImage4, marketplaceImage5, marketplaceImage6, marketplaceImage7, marketplaceImage8],
      technologies: ['React', 'TypeScript', 'TailwindCSS', 'JSON-Server', 'JSON-Server-Auth', 'React-Router'],
      icons: [<FaReact key="react" />, <FaCss3Alt key="css" />],
      github: 'https://github.com/chillecs/marketplace',
      live: '#',
      isLarge: true
    },
    {
      title: 'Dragon Fight Arena Game',
      description: 'This is also a pretty complex project that i made while learning React. It is a game mortal-kombat style. You have to choose from 10 dragons only 2 and fight with them. After you choose 2 dragons to fight with you go to the arena and fight with them. The attack system is a turn based system. This project also has full CRUD functionality and authentication. Users can register, login, change email, change password and delete their account. Sadly i also can not publish it on Github for live server because it is too big and complex.',
      images: [dragonImage1, dragonImage2, dragonImage3],
      technologies: ['React', 'TailwindCSS', 'JSON-Server', 'JSON-Server-Auth', 'React-Router'],
      icons: [<FaReact key="react" />, <FaCss3Alt key="css" />],
      github: 'https://github.com/chillecs/react-dragon-game/',
      live: '#',
      isLarge: false
    },
    {
      title: 'Quotely',
      description: 'This project i made while learning JavaScript. It is a simple quote generator that requests quotes from my own API published on Github. It also has a nice UI and dark/light mode.',
      images: [quotelyImage],
      technologies: ['JavaScript', 'HTML', 'CSS'],
      icons: [<FaJs key="javascript" />, <FaHtml5 key="html" />, <FaCss3Alt key="css" />],
      github: 'https://github.com/chillecs/quotely',
      live: 'https://chillecs.github.io/quotely/',
      isLarge: false
    },
    {
      title: 'Todo List App',
      description: 'This project i have made while learning JavaScript. It is a simple todo list app that you can add, edit and delete tasks. It also has a nice UI and Drag and Drop functionality. I have implemented a simple login system with localStorage. If you wanna visit this: username: admin and password: admin123',
      images: [todoImage1],
      technologies: ['JavaScript', 'HTML', 'CSS'],
      icons: [<FaJs key="javascript" />, <FaHtml5 key="html" />, <FaCss3Alt key="css" />],
      github: 'https://github.com/chillecs/todoapp',
      live: 'https://chillecs.github.io/todoapp/',
      isLarge: false
    }
  ];

  const openModal = (images: string[], title: string) => {
    setModalState({
      isOpen: true,
      images,
      title
    });
  };

  const closeModal = () => {
    setModalState({
      isOpen: false,
      images: [],
      title: ''
    });
  };

  return (
    <section id="projects" className="py-20 bg-[#032236]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-[#01ADEB]">Projects</span>
          </h2>
          <p className="text-xl text-[#4A5565] max-w-3xl mx-auto">
            Here are my top 4 projects that i have made while learning React, TypeScript, JavaScript, HTML, CSS, TailwindCSS. Some of them are pretty complex and some are simple. Besides these projects i have made some other projects that i have not published on Github because they are not big enough or not complex enough.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-[#030712] rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-[#01ADEB] to-[#4A5565] overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <div 
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  onClick={() => openModal(project.images, project.title)}
                >
                  <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <FaExpand className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
                  </div>
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <a href={project.github} className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 cursor-pointer" target="_blank">
                    <FaGithub size={16} />
                  </a>
                  <a href={project.live} className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 cursor-pointer" target="_blank">
                    <FaExternalLinkAlt size={16} />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#01ADEB] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[#4A5565] text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-[#01ADEB]/20 text-[#01ADEB] px-3 py-1 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        images={modalState.images}
        title={modalState.title}
      />
    </section>
  );
};

export default Projects;