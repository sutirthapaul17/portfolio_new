// 'use client';
// import React, { useState } from 'react';
// import { Menu, X } from 'lucide-react';
// import { NavItem } from '../types';
// import { useActiveSection } from '../hooks/useActiveSection';

// interface NavigationProps {
//   navItems: NavItem[];
//   scrollToSection: (sectionId: string) => void;
// }

// const Navigation: React.FC<NavigationProps> = ({ navItems, scrollToSection }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const activeSection = useActiveSection();

//   const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
//     <button
//       onClick={() => scrollToSection(href)}
//       className={`relative px-4 py-2 text-gray-300 hover:text-blue-400 transition-colors duration-300 ${
//         activeSection === href ? 'text-blue-400' : ''
//       }`}
//     >
//       {children}
//       {activeSection === href && (
//         <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"></div>
//       )}
//     </button>
//   );

//   return (
//     <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md z-50 border-b border-gray-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center py-4">
//           <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//             SP
//           </div>
          
//           {/* Desktop Navigation */}
//           <div className="hidden md:flex space-x-8">
//             {navItems.map((item) => (
//               <NavLink key={item.href} href={item.href}>
//                 {item.label}
//               </NavLink>
//             ))}
//           </div>

//           {/* Mobile menu button */}
//           <button
//             className="md:hidden p-2"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden py-4 space-y-2">
//             {navItems.map((item) => (
//               <button 
//                 key={item.href} 
//                 onClick={() => {
//                   scrollToSection(item.href);
//                   setIsMenuOpen(false);
//                 }} 
//                 className="block w-full text-left px-4 py-2 text-gray-300 hover:text-blue-400"
//               >
//                 {item.label}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navigation;


'use client';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';
import { useActiveSection } from '../hooks/useActiveSection';

interface NavigationProps {
  navItems: NavItem[];
  scrollToSection: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ navItems, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <button
      onClick={() => scrollToSection(href)}
      className={`relative px-4 py-2 text-gray-300 hover:text-blue-400 transition-colors duration-300 ${
        activeSection === href ? 'text-blue-400' : ''
      }`}
    >
      {children}
      {activeSection === href && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"></div>
      )}
    </button>
  );

  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            SP
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navItems.map((item) => (
              <button 
                key={item.href} 
                onClick={() => {
                  scrollToSection(item.href);
                  setIsMenuOpen(false);
                }} 
                className={`block w-full text-left px-4 py-2 transition-colors duration-300 ${
                  activeSection === item.href ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;