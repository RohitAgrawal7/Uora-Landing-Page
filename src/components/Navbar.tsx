import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'vision', 'mission', 'journals', 'editorial', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Vision', href: '#vision', id: 'vision' },
    { name: 'Mission', href: '#mission', id: 'mission' },
    { name: 'Journals', href: '#journals', id: 'journals' },
    { name: 'Editorial', href: '#editorial', id: 'editorial' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full z-50 py-3 px-6 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-teal-500/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-300"
        >
          UORA
        </motion.a>
        
        <ul className="hidden md:flex space-x-1">
          {navItems.map((item, index) => (
            <li key={index}>
              <motion.a
                href={item.href}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? 'text-white'
                    : 'text-blue-100 hover:text-white'
                }`}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                onMouseEnter={() => {}}
              >
                {item.name}
                
                {/* Active indicator */}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-gradient-to-r from-teal-600/30 to-blue-600/30 rounded-full border border-teal-400/30"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                
                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-teal-600/10 to-blue-600/10 rounded-full opacity-0 hover:opacity-100 transition-opacity"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="md:hidden p-2 rounded-lg bg-slate-800/50 text-teal-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </motion.button>
      </div>

      {/* Mobile menu (simplified version) */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        className="md:hidden mt-4 bg-slate-800/95 backdrop-blur-md rounded-xl p-4 border border-teal-500/20"
      >
        <ul className="space-y-2">
          {navItems.map((item, index) => (
            <li key={index}>
              <motion.a
                href={item.href}
                className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-teal-600/30 to-blue-600/30 text-white'
                    : 'text-blue-100 hover:text-white hover:bg-slate-700/50'
                }`}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                {item.name}
              </motion.a>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;