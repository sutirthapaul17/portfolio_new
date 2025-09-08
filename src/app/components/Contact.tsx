import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { SocialLink } from '../types';

const Contact: React.FC = () => {
  const contactMethods: SocialLink[] = [
    {
      href: 'mailto:sutirthapaul58@gmail.com',
      icon: Mail,
      label: 'Email'
    },
    {
      href: 'https://www.linkedin.com/in/sutirtha-paul-396794293/',
      icon: Linkedin,
      label: 'LinkedIn'
    },
    {
      href: 'https://github.com/sutirthapaul17',
      icon: Github,
      label: 'GitHub'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            I'm always excited to discuss new opportunities, innovative projects, or collaborate on cutting-edge blockchain and AI solutions. Let's build something amazing together!
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method) => (
              <a 
                key={method.label}
                href={method.href} 
                target={method.label !== 'Email' ? '_blank' : undefined}
                rel={method.label !== 'Email' ? 'noopener noreferrer' : undefined}
                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group"
              >
                <method.icon className="text-blue-400 mb-4 mx-auto group-hover:scale-110 transition-transform" size={48} />
                <h3 className="text-xl font-semibold mb-2">{method.label}</h3>
                <p className="text-gray-400">
                  {method.label === 'Email' 
                    ? 'sutirthapaul58@gmail.com' 
                    : method.label === 'LinkedIn' 
                    ? 'Connect with me' 
                    : 'Check out my code'}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;