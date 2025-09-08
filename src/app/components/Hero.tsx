
'use client';
import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { SocialLink } from '../types';
import Image from 'next/image';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const socialLinks: SocialLink[] = [
    {
      href: 'https://github.com/sutirthapaul17',
      icon: Github,
      label: 'GitHub'
    },
    {
      href: 'https://www.linkedin.com/in/sutirtha-paul-396794293/',
      icon: Linkedin,
      label: 'LinkedIn'
    },
    {
      href: 'mailto:sutirthapaul58@gmail.com',
      icon: Mail,
      label: 'Email'
    }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Profile Photo */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-40 h-40 md:w-48 md:h-48 relative overflow-hidden rounded-full border-4 border-blue-500/30 shadow-2xl shadow-blue-500/20">
              <Image
                src="/Sutirtha-paul.jpg" // Update with your image path
                alt="Sutirtha Paul"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full -z-10 blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl"></div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent animate-pulse">
          Sutirtha Paul
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Blockchain Developer & Full Stack Engineer
        </p>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          Currently exploring ML and Cyber Security • Building the future with Web3 and AI
        </p>
        
        <div className="flex justify-center space-x-6 mb-12">
          {socialLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href} 
              target={link.label !== 'Email' ? '_blank' : undefined}
              rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
            >
              <link.icon width={24} height={24} />
            </a>
          ))}
        </div>

        <button 
          onClick={() => scrollToSection('about')}
          className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
        >
          Explore My Work
        </button>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;