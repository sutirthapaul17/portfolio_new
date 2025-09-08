// 'use client';
// import { useState } from 'react';
// import Navigation from './components/Navigation';
// import Hero from './components/Hero';
// import About from './components/About';
// import Education from './components/Education';
// import Projects from './components/projects/Projects';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import { NavItem } from './types';

// export default function Home() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navItems: NavItem[] = [
//     { href: 'hero', label: 'Home' },
//     { href: 'about', label: 'About' },
//     { href: 'education', label: 'Education' },
//     { href: 'projects', label: 'Projects' },
//     { href: 'contact', label: 'Contact' }
//   ];

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//     setIsMenuOpen(false);
//   };

//   return (
//     <div className="bg-gray-900 text-white min-h-screen">
//       <Navigation 
//         navItems={navItems} 
//         scrollToSection={scrollToSection} 
//       />
//       <Hero scrollToSection={scrollToSection} />
//       <About />
//       <Education />
//       <Projects />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }


'use client';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/projects/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { NavItem } from './types';

export default function Home() {
  // Remove the unused state
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { href: 'hero', label: 'Home' },
    { href: 'about', label: 'About' },
    { href: 'education', label: 'Education' },
    { href: 'projects', label: 'Projects' },
    { href: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Remove this line since isMenuOpen state is removed
    // setIsMenuOpen(false);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navigation 
        navItems={navItems} 
        scrollToSection={scrollToSection} 
      />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}