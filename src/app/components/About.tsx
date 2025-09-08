// import React from 'react';
// import { User } from 'lucide-react';
// import { Skill } from '../types';

// const About: React.FC = () => {
//   const skills: Skill[] = [
//     { name: 'Blockchain' },
//     { name: 'Web3' },
//     { name: 'Solidity' },
//     { name: 'React.js' },
//     { name: 'Next.js' },
//     { name: 'Node.js' },
//     { name: 'Express.js' },
//     { name: 'MongoDB' },
//     { name: 'Foundry' },
//     { name: 'Git & GitHub' },
//     { name: 'Machine Learning' },
//     { name: 'Cyber Security' }
//   ];

//   return (
//     <section id="about" className="py-20 bg-gray-800/50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//             About Me
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div>
//             <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-2xl border border-gray-700">
//               <User className="text-blue-400 mb-4" size={48} />
//               <p className="text-lg text-gray-300 leading-relaxed mb-6">
//                 I'm Sutirtha Paul, a passionate <span className="text-blue-400 font-semibold">Web and Blockchain Developer</span> with experience in building modern, scalable, and user-friendly applications. I enjoy working with <span className="text-purple-400 font-semibold">React, Solidity, and smart contract development</span>, and I'm continuously exploring new technologies like AI and Web3 to create impactful digital solutions.
//               </p>
//               <p className="text-lg text-gray-300 leading-relaxed">
//                 My goal is to combine creativity and technical expertise to build products that make a difference.
//               </p>
//               <div className="mt-6 text-gray-400">
//                 <p className="flex items-center"><span className="font-semibold text-blue-400">📍</span> Barrackpore, Kolkata</p>
//                 <p className="flex items-center mt-2"><span className="font-semibold text-purple-400">🎓</span> 3rd Year BTech Student</p>
//               </div>
//             </div>
//           </div>

//           <div>
//             <h3 className="text-2xl font-bold mb-6 text-center">Technical Skills</h3>
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//               {skills.map((skill, index) => (
//                 <div key={index} className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-4 py-3 rounded-lg text-center border border-gray-700 hover:border-blue-500/50 transition-colors duration-300 hover:scale-105 transform">
//                   <span className="text-sm font-medium">{skill.name}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;



import React from 'react';
import { User } from 'lucide-react';
import { Skill } from '../types';
import Image from 'next/image';

const About: React.FC = () => {
  const skills: Skill[] = [
    { name: 'Blockchain' },
    { name: 'Web3' },
    { name: 'Solidity' },
    { name: 'React.js' },
    { name: 'Next.js' },
    { name: 'Node.js' },
    { name: 'Express.js' },
    { name: 'MongoDB' },
    { name: 'Foundry' },
    { name: 'Git & GitHub' },
    { name: 'Machine Learning' },
    { name: 'Cyber Security' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-2xl border border-gray-700">
              <User className="text-blue-400 mb-4" size={48} />
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I&apos;m Sutirtha Paul, a passionate <span className="text-blue-400 font-semibold">Web and Blockchain Developer</span> with experience in building modern, scalable, and user-friendly applications. I enjoy working with <span className="text-purple-400 font-semibold">React, Solidity, and smart contract development</span>, and I&apos;m continuously exploring new technologies like AI and Web3 to create impactful digital solutions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My goal is to combine creativity and technical expertise to build products that make a difference.
              </p>
              <div className="mt-6 text-gray-400">
                <p className="flex items-center"><span className="font-semibold text-blue-400">📍</span> Barrackpore, Kolkata</p>
                <p className="flex items-center mt-2"><span className="font-semibold text-purple-400">🎓</span> 3rd Year BTech Student</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 relative overflow-hidden rounded-2xl border-4 border-blue-500/30 shadow-2xl shadow-blue-500/20">
                <Image
                  src="/Sutirtha-paul.jpg" // Update with your image path
                  alt="Sutirtha Paul"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl -z-10 blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl"></div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Technical Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-4 py-3 rounded-lg text-center border border-gray-700 hover:border-blue-500/50 transition-colors duration-300 hover:scale-105 transform">
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;