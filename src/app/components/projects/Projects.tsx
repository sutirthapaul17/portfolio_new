// // import React, { useState } from "react";
// // import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

// // const Projects: React.FC = () => {
// //   const [currentProject, setCurrentProject] = useState(0);

// //   const projects = [
// //     {
// //       title: "Collaborative Health Platform",
// //       subtitle: "AI + Blockchain Healthcare Solution",
// //       description: "A comprehensive web-based collaborative healthcare platform that connects healthcare providers, NGOs, volunteers, and patients to improve healthcare delivery, especially in underserved regions. The platform integrates AI and blockchain technologies to provide secure, transparent, and data-driven healthcare solutions.",
// //       icon: "🩺",
// //       features: {
// //         main: [
// //           "Centralized Health Hub with resources & campaigns",
// //           "Real-time illness & outbreak reporting with map visualization",
// //           "Telemedicine & mental health support",
// //           "Health campaign tracking & feedback system"
// //         ],
// //         advanced: [
// //           "Neurological Disorder Monitoring with AI digital biomarkers",
// //           "AI Medical Imaging for disease detection & progression prediction",
// //           "Blockchain-secured patient data ownership",
// //           "Decentralized data marketplace for research"
// //         ]
// //       },
// //       impact: [
// //         "Empowers patients with ownership of health data using blockchain technology",
// //         "Provides accessible healthcare services in underserved areas through telemedicine",
// //         "Bridges gaps between providers, NGOs, and patients using AI + Blockchain",
// //         "Demonstrates potential of data-driven, inclusive healthcare systems"
// //       ],
// //       technologies: ["React", "Tailwind CSS", "Node.js", "Express", "Solidity", "Foundry", "Ethers.js", "Python", "TensorFlow", "MongoDB"],
// //       githubUrl: "https://github.com/sutirthapaul17/PulsePoint",
// //       demoUrl: "https://pulse-point-kappa.vercel.app/",
// //       demoAvailable: true
// //     },
// //     {
// //       title: "TSender UI",
// //       subtitle: "Client-Side Interface for ERC-20 Airdrop Management",
// //       description: "TSender UI offers a browser-based frontend allowing users to connect their wallets (like MetaMask or Rabby) and easily manage token airdrops via the underlying TSender contract. It's designed to run entirely on the client side, requiring no backend services, and supports efficient, gas-optimized ERC-20 distributions.",
// //       icon: "📤",
// //       features: {
// //         main: [
// //           "100% Client-Side Architecture – No server component",
// //           "Wallet Integration with MetaMask/Rabby support",
// //           "Gas-Optimized ERC-20 Airdrops via TSender contract",
// //           "Local Test Wallet Support for Anvil network"
// //         ],
// //         advanced: [
// //           "Robust Testing Setup with unit and E2E tests via Playwright",
// //           "TypeScript for type-safe development",
// //           "Next.js framework for optimized performance",
// //           "pnpm for efficient package management"
// //         ]
// //       },
// //       impact: [
// //         "Enables developers to conduct ERC-20 airdrops easily without backend setup",
// //         "Serves as a learning tool for building web3 frontends",
// //         "Facilitates rapid prototyping and secure smart contract interaction",
// //         "Streamlines token distribution workflows in decentralized environments"
// //       ],
// //       technologies: ["Next.js", "TypeScript", "Ethers.js", "Playwright", "pnpm", "Anvil"],
// //       githubUrl: "https://github.com/sutirthapaul17/ts-tsender-ui-cu",
// //       demoUrl: "",
// //       demoAvailable: false
// //     },
// //     {
// //       title: "SOS Alert on Blockchain",
// //       subtitle: "Tamper-Proof Emergency Alert System",
// //       description: "A blockchain-based system for women's safety that records SOS alerts from hardware devices onto the blockchain, ensuring secure, tamper-proof, and verifiable records. The system integrates hardware devices with a full-stack dApp for emergency situations.",
// //       icon: "🚨",
// //       features: {
// //         main: [
// //           "Blockchain-Powered Security with immutable alert storage",
// //           "Express.js Backend Integration for SOS data handling",
// //           "React Frontend Dashboard for real-time monitoring",
// //           "Ethers.js Smart Contract Interaction"
// //         ],
// //         advanced: [
// //           "Tamper-Proof Record Keeping on Ethereum blockchain",
// //           "Hardware Integration for emergency triggers",
// //           "Real-time alert notifications",
// //           "Transparent and verifiable alert history"
// //         ]
// //       },
// //       impact: [
// //         "Provides tamper-proof SOS logging system enhancing trust in safety alerts",
// //         "Demonstrates blockchain application for social good and real-world problems",
// //         "Built a working prototype combining hardware, backend, and blockchain",
// //         "Useful for hackathons and further research in safety technology"
// //       ],
// //       technologies: ["Solidity", "Express.js", "React.js", "Ethers.js", "Ethereum", "Anvil"],
// //       githubUrl: "https://github.com/sutirthapaul17/sos-alert-on-blockchain",
// //       demoUrl: "",
// //       demoAvailable: false
// //     }
// //   ];

// //   const nextProject = () => {
// //     setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
// //   };

// //   const prevProject = () => {
// //     setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
// //   };

// //   const project = projects[currentProject];

// //   return (
// //     <section id="projects" className="py-20 bg-gray-800/50">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="text-center mb-16">
// //           <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
// //             Featured Projects
// //           </h2>
// //           <p className="text-xl text-gray-300 mb-4">
// //             Project {currentProject + 1} of {projects.length}
// //           </p>
// //           <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
// //         </div>

// //         <div className="max-w-6xl mx-auto">
// //           <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
// //             {/* Navigation Arrows */}
// //             <div className="flex justify-between items-center mb-6">
// //               <button
// //                 onClick={prevProject}
// //                 className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
// //                 aria-label="Previous project"
// //               >
// //                 <ChevronLeft size={24} />
// //               </button>

// //               <div className="flex items-start space-x-6">
// //                 <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-full">
// //                   <span className="text-3xl">{project.icon}</span>
// //                 </div>
// //                 <div>
// //                   <h3 className="text-3xl font-bold mb-2">
// //                     {project.title}
// //                   </h3>
// //                   <p className="text-xl text-blue-400 mb-4">
// //                     {project.subtitle}
// //                   </p>
// //                 </div>
// //               </div>

// //               <button
// //                 onClick={nextProject}
// //                 className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
// //                 aria-label="Next project"
// //               >
// //                 <ChevronRight size={24} />
// //               </button>
// //             </div>

// //             <p className="text-lg text-gray-300 mb-6 leading-relaxed">
// //               {project.description}
// //             </p>

// //             <div className="grid md:grid-cols-2 gap-8 mb-8">
// //               <div>
// //                 <h4 className="text-xl font-semibold mb-4 text-blue-400">
// //                   🔑 Key Features
// //                 </h4>
// //                 <ul className="space-y-2 text-gray-300">
// //                   {project.features.main.map((feature, index) => (
// //                     <li key={index}>• {feature}</li>
// //                   ))}
// //                 </ul>
// //               </div>
// //               <div>
// //                 <h4 className="text-xl font-semibold mb-4 text-purple-400">
// //                   🧠 Advanced Features
// //                 </h4>
// //                 <ul className="space-y-2 text-gray-300">
// //                   {project.features.advanced.map((feature, index) => (
// //                     <li key={index}>• {feature}</li>
// //                   ))}
// //                 </ul>
// //               </div>
// //             </div>

// //             <div className="mb-8">
// //               <h4 className="text-xl font-semibold mb-4 text-green-400">
// //                 💡 Impact
// //               </h4>
// //               <div className="grid md:grid-cols-2 gap-4">
// //                 {project.impact.map((item, index) => (
// //                   <div key={index} className="bg-gray-800/50 p-4 rounded-lg">
// //                     <p className="text-gray-300">{item}</p>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             <div className="flex flex-wrap gap-3 mb-6">
// //               {project.technologies.map((tech) => (
// //                 <span
// //                   key={tech}
// //                   className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-4 py-2 rounded-full text-sm font-medium border border-gray-600"
// //                 >
// //                   {tech}
// //                 </span>
// //               ))}
// //             </div>

// //             <div className="flex space-x-4">
// //               <a
// //                 href={project.githubUrl}
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="flex items-center space-x-2 bg-gray-800 px-6 py-3 rounded-full hover:bg-gray-700 transition-colors"
// //               >
// //                 <Github size={20} />
// //                 <span>View Code</span>
// //               </a>
// //               {project.demoAvailable && (
// //                 <a
// //                   href={project.demoUrl}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                 >
// //                   <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
// //                     <ExternalLink size={20} />
// //                     <span>Live Demo</span>
// //                   </button>
// //                 </a>
// //               )}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Project Indicators */}
// //         <div className="flex justify-center mt-8 space-x-2">
// //           {projects.map((_, index) => (
// //             <button
// //               key={index}
// //               onClick={() => setCurrentProject(index)}
// //               className={`w-3 h-3 rounded-full ${currentProject === index ? 'bg-blue-500' : 'bg-gray-600'}`}
// //               aria-label={`Go to project ${index + 1}`}
// //             />
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Projects;

// import React, { useState } from "react";
// import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

// // Project data
// const projectsData = {
//   blockchain: [
//     {
//       title: "TSender UI",
//       subtitle: "Client-Side Interface for ERC-20 Airdrop Management",
//       description: "TSender UI offers a browser-based frontend allowing users to connect their wallets (like MetaMask or Rabby) and easily manage token airdrops via the underlying TSender contract. It's designed to run entirely on the client side, requiring no backend services, and supports efficient, gas-optimized ERC-20 distributions.",
//       icon: "📤",
//       features: {
//         main: [
//           "100% Client-Side Architecture – No server component",
//           "Wallet Integration with MetaMask/Rabby support",
//           "Gas-Optimized ERC-20 Airdrops via TSender contract",
//           "Local Test Wallet Support for Anvil network"
//         ],
//         advanced: [
//           "Robust Testing Setup with unit and E2E tests via Playwright",
//           "TypeScript for type-safe development",
//           "Next.js framework for optimized performance",
//           "pnpm for efficient package management"
//         ]
//       },
//       impact: [
//         "Enables developers to conduct ERC-20 airdrops easily without backend setup",
//         "Serves as a learning tool for building web3 frontends",
//         "Facilitates rapid prototyping and secure smart contract interaction",
//         "Streamlines token distribution workflows in decentralized environments"
//       ],
//       technologies: ["Next.js", "TypeScript", "Ethers.js", "Playwright", "pnpm", "Anvil"],
//       githubUrl: "https://github.com/sutirthapaul17/ts-tsender-ui-cu",
//       demoUrl: "",
//       demoAvailable: false
//     }
//   ],
//   fullStack: [
//     {
//       title: "Collaborative Health Platform",
//       subtitle: "AI + Blockchain Healthcare Solution",
//       description: "A comprehensive web-based collaborative healthcare platform that connects healthcare providers, NGOs, volunteers, and patients to improve healthcare delivery, especially in underserved regions. The platform integrates AI and blockchain technologies to provide secure, transparent, and data-driven healthcare solutions.",
//       icon: "🩺",
//       features: {
//         main: [
//           "Centralized Health Hub with resources & campaigns",
//           "Real-time illness & outbreak reporting with map visualization",
//           "Telemedicine & mental health support",
//           "Health campaign tracking & feedback system"
//         ],
//         advanced: [
//           "Neurological Disorder Monitoring with AI digital biomarkers",
//           "AI Medical Imaging for disease detection & progression prediction",
//           "Blockchain-secured patient data ownership",
//           "Decentralized data marketplace for research"
//         ]
//       },
//       impact: [
//         "Empowers patients with ownership of health data using blockchain technology",
//         "Provides accessible healthcare services in underserved areas through telemedicine",
//         "Bridges gaps between providers, NGOs, and patients using AI + Blockchain",
//         "Demonstrates potential of data-driven, inclusive healthcare systems"
//       ],
//       technologies: ["React", "Tailwind CSS", "Node.js", "Express", "Solidity", "Foundry", "Ethers.js", "Python", "TensorFlow", "MongoDB"],
//       githubUrl: "https://github.com/sutirthapaul17/PulsePoint",
//       demoUrl: "https://pulse-point-kappa.vercel.app/",
//       demoAvailable: true
//     },
//     {
//       title: "SOS Alert on Blockchain",
//       subtitle: "Tamper-Proof Emergency Alert System",
//       description: "A blockchain-based system for women's safety that records SOS alerts from hardware devices onto the blockchain, ensuring secure, tamper-proof, and verifiable records. The system integrates hardware devices with a full-stack dApp for emergency situations.",
//       icon: "🚨",
//       features: {
//         main: [
//           "Blockchain-Powered Security with immutable alert storage",
//           "Express.js Backend Integration for SOS data handling",
//           "React Frontend Dashboard for real-time monitoring",
//           "Ethers.js Smart Contract Interaction"
//         ],
//         advanced: [
//           "Tamper-Proof Record Keeping on Ethereum blockchain",
//           "Hardware Integration for emergency triggers",
//           "Real-time alert notifications",
//           "Transparent and verifiable alert history"
//         ]
//       },
//       impact: [
//         "Provides tamper-proof SOS logging system enhancing trust in safety alerts",
//         "Demonstrates blockchain application for social good and real-world problems",
//         "Built a working prototype combining hardware, backend, and blockchain",
//         "Useful for hackathons and further research in safety technology"
//       ],
//       technologies: ["Solidity", "Express.js", "React.js", "Ethers.js", "Ethereum", "Anvil"],
//       githubUrl: "https://github.com/sutirthapaul17/sos-alert-on-blockchain",
//       demoUrl: "",
//       demoAvailable: false
//     }
//   ],
//   machineLearning: [],
//   cyberSecurity: []
// };

// // Project Card Component
// const ProjectCard = ({ project, category }) => {
//   return (
//     <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 h-full">
//       <div className="flex items-start space-x-6 mb-6">
//         <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-full">
//           <span className="text-3xl">{project.icon}</span>
//         </div>
//         <div>
//           <h3 className="text-3xl font-bold mb-2">
//             {project.title}
//           </h3>
//           <p className="text-xl text-blue-400 mb-4">
//             {project.subtitle}
//           </p>
//           <span className="inline-block bg-gray-700 text-sm px-3 py-1 rounded-full">
//             {category}
//           </span>
//         </div>
//       </div>

//       <p className="text-lg text-gray-300 mb-6 leading-relaxed">
//         {project.description}
//       </p>

//       <div className="grid md:grid-cols-2 gap-8 mb-8">
//         <div>
//           <h4 className="text-xl font-semibold mb-4 text-blue-400">
//             🔑 Key Features
//           </h4>
//           <ul className="space-y-2 text-gray-300">
//             {project.features.main.map((feature, index) => (
//               <li key={index}>• {feature}</li>
//             ))}
//           </ul>
//         </div>
//         <div>
//           <h4 className="text-xl font-semibold mb-4 text-purple-400">
//             🧠 Advanced Features
//           </h4>
//           <ul className="space-y-2 text-gray-300">
//             {project.features.advanced.map((feature, index) => (
//               <li key={index}>• {feature}</li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       <div className="mb-8">
//         <h4 className="text-xl font-semibold mb-4 text-green-400">
//           💡 Impact
//         </h4>
//         <div className="grid md:grid-cols-2 gap-4">
//           {project.impact.map((item, index) => (
//             <div key={index} className="bg-gray-800/50 p-4 rounded-lg">
//               <p className="text-gray-300">{item}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="flex flex-wrap gap-3 mb-6">
//         {project.technologies.map((tech) => (
//           <span
//             key={tech}
//             className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-4 py-2 rounded-full text-sm font-medium border border-gray-600"
//           >
//             {tech}
//           </span>
//         ))}
//       </div>

//       <div className="flex space-x-4">
//         <a
//           href={project.githubUrl}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center space-x-2 bg-gray-800 px-6 py-3 rounded-full hover:bg-gray-700 transition-colors"
//         >
//           <Github size={20} />
//           <span>View Code</span>
//         </a>
//         {project.demoAvailable && (
//           <a
//             href={project.demoUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
//               <ExternalLink size={20} />
//               <span>Live Demo</span>
//             </button>
//           </a>
//         )}
//       </div>
//     </div>
//   );
// };

// // Blockchain Projects Component
// const BlockchainProjects = () => {
//   const [currentProject, setCurrentProject] = useState(0);
//   const projects = projectsData.blockchain;

//   const nextProject = () => {
//     setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
//   };

//   const prevProject = () => {
//     setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
//   };

//   if (projects.length === 0) {
//     return (
//       <div className="text-center py-12">
//         <h3 className="text-2xl font-bold mb-4">Blockchain Projects</h3>
//         <p className="text-gray-400">No blockchain projects to display yet.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="mb-16">
//       <div className="flex items-center justify-between mb-8">
//         <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//           Blockchain Projects
//         </h3>
//         <div className="flex space-x-2">
//           <button
//             onClick={prevProject}
//             className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
//             aria-label="Previous project"
//           >
//             <ChevronLeft size={24} />
//           </button>
//           <button
//             onClick={nextProject}
//             className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
//             aria-label="Next project"
//           >
//             <ChevronRight size={24} />
//           </button>
//         </div>
//       </div>

//       <div className="mb-6">
//         <p className="text-xl text-gray-300 mb-4">
//           Project {currentProject + 1} of {projects.length}
//         </p>
//         <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div>
//       </div>

//       <ProjectCard project={projects[currentProject]} category="Blockchain" />

//       {/* Project Indicators */}
//       <div className="flex justify-center mt-8 space-x-2">
//         {projects.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentProject(index)}
//             className={`w-3 h-3 rounded-full ${currentProject === index ? 'bg-blue-500' : 'bg-gray-600'}`}
//             aria-label={`Go to project ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// // Full Stack Projects Component
// const FullStackProjects = () => {
//   const [currentProject, setCurrentProject] = useState(0);
//   const projects = projectsData.fullStack;

//   const nextProject = () => {
//     setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
//   };

//   const prevProject = () => {
//     setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
//   };

//   if (projects.length === 0) {
//     return (
//       <div className="text-center py-12">
//         <h3 className="text-2xl font-bold mb-4">Full Stack Projects</h3>
//         <p className="text-gray-400">No full stack projects to display yet.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="mb-16">
//       <div className="flex items-center justify-between mb-8">
//         <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//           Full Stack Projects
//         </h3>
//         <div className="flex space-x-2">
//           <button
//             onClick={prevProject}
//             className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
//             aria-label="Previous project"
//           >
//             <ChevronLeft size={24} />
//           </button>
//           <button
//             onClick={nextProject}
//             className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
//             aria-label="Next project"
//           >
//             <ChevronRight size={24} />
//           </button>
//         </div>
//       </div>

//       <div className="mb-6">
//         <p className="text-xl text-gray-300 mb-4">
//           Project {currentProject + 1} of {projects.length}
//         </p>
//         <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div>
//       </div>

//       <ProjectCard project={projects[currentProject]} category="Full Stack" />

//       {/* Project Indicators */}
//       <div className="flex justify-center mt-8 space-x-2">
//         {projects.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentProject(index)}
//             className={`w-3 h-3 rounded-full ${currentProject === index ? 'bg-blue-500' : 'bg-gray-600'}`}
//             aria-label={`Go to project ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// // Machine Learning Projects Component
// const MachineLearningProjects = () => {
//   const projects = projectsData.machineLearning;

//   if (projects.length === 0) {
//     return (
//       <div className="text-center py-12">
//         <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//           Machine Learning Projects
//         </h3>
//         <p className="text-gray-400">No machine learning projects to display yet. Check back soon!</p>
//       </div>
//     );
//   }

//   return (
//     <div className="mb-16">
//       <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//         Machine Learning Projects
//       </h3>
//       <div className="grid md:grid-cols-2 gap-8">
//         {projects.map((project, index) => (
//           <ProjectCard key={index} project={project} category="Machine Learning" />
//         ))}
//       </div>
//     </div>
//   );
// };

// // Cyber Security Projects Component
// const CyberSecurityProjects = () => {
//   const projects = projectsData.cyberSecurity;

//   if (projects.length === 0) {
//     return (
//       <div className="text-center py-12">
//         <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//           Cyber Security Projects
//         </h3>
//         <p className="text-gray-400">No cyber security projects to display yet. Check back soon!</p>
//       </div>
//     );
//   }

//   return (
//     <div className="mb-16">
//       <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//         Cyber Security Projects
//       </h3>
//       <div className="grid md:grid-cols-2 gap-8">
//         {projects.map((project, index) => (
//           <ProjectCard key={index} project={project} category="Cyber Security" />
//         ))}
//       </div>
//     </div>
//   );
// };

// // Main Projects Component
// const Projects: React.FC = () => {
//   return (
//     <section id="projects" className="py-20 bg-gray-800/50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//             Featured Projects
//           </h2>
//           <p className="text-xl text-gray-300 mb-4">
//             Explore my work across different domains
//           </p>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
//         </div>

//         <div className="max-w-6xl mx-auto">
//           <BlockchainProjects />
//           <FullStackProjects />
//           <MachineLearningProjects />
//           <CyberSecurityProjects />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

import React, { useState } from "react";
import Blockchain from "./Blockchain";
import FullStack from "./FullStack";
import MachineLearning from "./MachineLearning";
import CyberSecurity from "./CyberSecurity";

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState("blockchain");

  const tabs = [
    { id: "blockchain", label: "Blockchain", component: <Blockchain /> },
    { id: "fullstack", label: "Full Stack", component: <FullStack /> },
    {
      id: "machinelearning",
      label: "Machine Learning",
      component: <MachineLearning />,
    },
    {
      id: "cybersecurity",
      label: "Cyber Security",
      component: <CyberSecurity />,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            Explore my work across different domains
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          {tabs.find((tab) => tab.id === activeTab)?.component}
        </div>
      </div>
    </section>
  );
};

export default Projects;
