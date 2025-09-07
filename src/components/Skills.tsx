import React from "react";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        {
          name: "React",
          icon: <FaReact className="text-2xl text-[#01ADEB]" />,
          level: 75,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-2xl text-[#01ADEB]" />,
          level: 50,
        },
        {
          name: "JavaScript",
          icon: <FaJs className="text-2xl text-[#01ADEB]" />,
          level: 80,
        },
        {
          name: "HTML5",
          icon: <FaHtml5 className="text-2xl text-[#01ADEB]" />,
          level: 90,
        },
        {
          name: "CSS3",
          icon: <FaCss3Alt className="text-2xl text-[#01ADEB]" />,
          level: 85,
        },
        {
          name: "TailwindCSS",
          icon: <SiTailwindcss className="text-2xl text-[#01ADEB]" />,
          level: 75,
        }
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        {
          name: "Git",
          icon: <FaGitAlt className="text-2xl text-[#01ADEB]" />,
          level: 75,
        },
        {
          name: "Figma",
          icon: <FaFigma className="text-2xl text-[#01ADEB]" />,
          level: 60,
        },
      ],
    },
  ];

  const experiences = [
    {
      title: "Web Development Student",
      company: "Scoala Informala de IT",
      period: "2025 (6 months)",
      description:
        "Completed a comprehensive 6-month Web Development course covering modern technologies including React, Node.js, databases, and best practices. Gained hands-on experience with real-world projects and industry-standard development workflows.",
    },
    {
      title: "Self-Taught Developer",
      company: "Personal Projects",
      period: "2025 (8 months)",
      description:
        "Dedicated 8 months to self-directed learning and building personal projects. Focused on frontend development with React, TypeScript, and modern CSS frameworks. Created multiple portfolio projects to showcase growing skills.",
    },
    {
      title: "Continuous Learning",
      company: "Online Resources & Practice",
      period: "Ongoing",
      description:
        "Committed to continuous improvement through online courses, documentation study, and building increasingly complex projects. Actively participating in developer communities and staying updated with latest web technologies.",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-[#030712]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="text-[#01ADEB]">Experience</span>
          </h2>
          <p className="text-xl text-[#4A5565] max-w-3xl mx-auto">
            The skills shown in the graph represent my current skill set. I am
            continuously learning and highly motivated to expand my knowledge
            further, exploring as many technologies and tools as possible.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">
            Technical <span className="text-[#01ADEB]">Skills</span>
          </h3>

            <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-[#032236] p-6 rounded-xl">
                <h4 className="text-xl font-semibold text-white mb-6 text-center">
                  {category.title}
                </h4>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          {skill.icon}
                          <span className="text-white font-medium">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[#01ADEB] font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-[#4A5565]/30 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-[#01ADEB] to-[#4A5565] h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-12 text-center">
            Work <span className="text-[#01ADEB]">Experience</span>
          </h3>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-[#032236] p-6 rounded-xl hover:bg-[#032236]/80 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-1">
                      {exp.title}
                    </h4>
                    <p className="text-[#01ADEB] font-medium">{exp.company}</p>
                  </div>
                  <span className="text-[#616e83] font-medium mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-[#4A5565] leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
