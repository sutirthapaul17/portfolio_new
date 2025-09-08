import React from 'react';
import { GraduationCap, BookOpen, School } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* BTech Education */}
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-2xl border border-gray-700">
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                <GraduationCap size={32} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Bachelor of Technology (BTech)</h3>
                <p className="text-lg text-blue-400 mb-2">Computer Science with Specialization in IoT & Cyber Security Including Blockchain Technology</p>
                <p className="text-gray-400 mb-4">Currently in 3rd Year • Expected Passout: 2027 </p>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <p className="text-gray-300">
                    <span className="font-semibold text-purple-400">Focus Areas:</span> Internet of Things, Cyber Security, Blockchain Technology, Machine Learning, Web Development
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Higher Secondary Education */}
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-2xl border border-gray-700">
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                <BookOpen size={32} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Higher Secondary (HS)</h3>
                <p className="text-lg text-blue-400 mb-2">PCMB (Physics, Chemistry, Mathematics, Biology)</p>
                <p className="text-gray-400 mb-4">Barrackpore A.B Model High School • 2020-2022</p>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <p className="text-gray-300">
                    <span className="font-semibold text-purple-400">Curriculum:</span> Comprehensive study of science with focus on Physics, Chemistry, Mathematics, and Biology
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Education */}
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-2xl border border-gray-700">
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                <School size={32} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Secondary Education (10th)</h3>
                <p className="text-lg text-blue-400 mb-2">General Education</p>
                <p className="text-gray-400 mb-4">Barrackpore A.B Model High School • 2019-2020</p>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <p className="text-gray-300">
                    <span className="font-semibold text-purple-400">Foundation:</span> Comprehensive secondary education covering all core subjects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;