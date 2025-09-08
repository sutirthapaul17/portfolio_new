import React from "react";

const MachineLearning: React.FC = () => {
  return (
    <div className="text-center py-12">
      <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-12 rounded-2xl border border-gray-700">
        <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Machine Learning Projects
        </h3>
        <p className="text-xl text-gray-300 mb-8">
          Machine learning projects coming soon! Check back later for updates.
        </p>
        <div className="text-6xl mb-6">🤖</div>
        <p className="text-gray-400">
          I'm currently working on some exciting ML projects that will be added here soon.
        </p>
      </div>
    </div>
  );
};

export default MachineLearning;