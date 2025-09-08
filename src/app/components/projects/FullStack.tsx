import React, { useState } from "react";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const FullStack: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "Collaborative Health Platform",
      subtitle: "AI + Blockchain Healthcare Solution",
      description: "A comprehensive web-based collaborative healthcare platform that connects healthcare providers, NGOs, volunteers, and patients to improve healthcare delivery, especially in underserved regions. The platform integrates AI and blockchain technologies to provide secure, transparent, and data-driven healthcare solutions.",
      icon: "🩺",
      features: {
        main: [
          "Centralized Health Hub with resources & campaigns",
          "Real-time illness & outbreak reporting with map visualization",
          "Telemedicine & mental health support",
          "Health campaign tracking & feedback system"
        ],
        advanced: [
          "Neurological Disorder Monitoring with AI digital biomarkers",
          "AI Medical Imaging for disease detection & progression prediction",
          "Blockchain-secured patient data ownership",
          "Decentralized data marketplace for research"
        ]
      },
      impact: [
        "Empowers patients with ownership of health data using blockchain technology",
        "Provides accessible healthcare services in underserved areas through telemedicine",
        "Bridges gaps between providers, NGOs, and patients using AI + Blockchain",
        "Demonstrates potential of data-driven, inclusive healthcare systems"
      ],
      technologies: ["React", "Tailwind CSS", "Node.js", "Express", "Solidity", "Foundry", "Ethers.js", "Python", "TensorFlow", "MongoDB"],
      githubUrl: "https://github.com/sutirthapaul17/PulsePoint",
      demoUrl: "https://pulse-point-kappa.vercel.app/",
      demoAvailable: true
    },
    {
      title: "SOS Alert on Blockchain",
      subtitle: "Tamper-Proof Emergency Alert System",
      description: "A blockchain-based system for women's safety that records SOS alerts from hardware devices onto the blockchain, ensuring secure, tamper-proof, and verifiable records. The system integrates hardware devices with a full-stack dApp for emergency situations.",
      icon: "🚨",
      features: {
        main: [
          "Blockchain-Powered Security with immutable alert storage",
          "Express.js Backend Integration for SOS data handling",
          "React Frontend Dashboard for real-time monitoring",
          "Ethers.js Smart Contract Interaction"
        ],
        advanced: [
          "Tamper-Proof Record Keeping on Ethereum blockchain",
          "Hardware Integration for emergency triggers",
          "Real-time alert notifications",
          "Transparent and verifiable alert history"
        ]
      },
      impact: [
        "Provides tamper-proof SOS logging system enhancing trust in safety alerts",
        "Demonstrates blockchain application for social good and real-world problems",
        "Built a working prototype combining hardware, backend, and blockchain",
        "Useful for hackathons and further research in safety technology"
      ],
      technologies: ["Solidity", "Express.js", "React.js", "Ethers.js", "Ethereum", "Anvil"],
      githubUrl: "https://github.com/sutirthapaul17/sos-alert-on-blockchain",
      demoUrl: "",
      demoAvailable: false
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const project = projects[currentProject];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <button 
          onClick={prevProject}
          className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
          aria-label="Previous project"
        >
          <ChevronLeft size={24} />
        </button>
        
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Full Stack Projects</h3>
          <p className="text-lg text-gray-300 mb-4">
            Project {currentProject + 1} of {projects.length}
          </p>
        </div>
        
        <button 
          onClick={nextProject}
          className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
          aria-label="Next project"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
        <div className="flex items-start space-x-6 mb-6">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-full">
            <span className="text-3xl">{project.icon}</span>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-2">
              {project.title}
            </h3>
            <p className="text-xl text-blue-400 mb-4">
              {project.subtitle}
            </p>
          </div>
        </div>

        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          {project.description}
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="text-xl font-semibold mb-4 text-blue-400">
              🔑 Key Features
            </h4>
            <ul className="space-y-2 text-gray-300">
              {project.features.main.map((feature, index) => (
                <li key={index}>• {feature}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-purple-400">
              🧠 Advanced Features
            </h4>
            <ul className="space-y-2 text-gray-300">
              {project.features.advanced.map((feature, index) => (
                <li key={index}>• {feature}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <h4 className="text-xl font-semibold mb-4 text-green-400">
            💡 Impact
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            {project.impact.map((item, index) => (
              <div key={index} className="bg-gray-800/50 p-4 rounded-lg">
                <p className="text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-4 py-2 rounded-full text-sm font-medium border border-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-gray-800 px-6 py-3 rounded-full hover:bg-gray-700 transition-colors"
          >
            <Github size={20} />
            <span>View Code</span>
          </a>
          {project.demoAvailable && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                <ExternalLink size={20} />
                <span>Live Demo</span>
              </button>
            </a>
          )}
        </div>
      </div>

      {/* Project Indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentProject(index)}
            className={`w-3 h-3 rounded-full ${currentProject === index ? 'bg-blue-500' : 'bg-gray-600'}`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FullStack;