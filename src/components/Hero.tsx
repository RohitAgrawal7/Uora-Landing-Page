import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Parallax background effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = document.querySelector('.parallax-bg') as HTMLElement | null;
      if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Research-themed SVG icons for background
  const researchIcons = [
    // Book icon
    <svg key="book" className="w-8 h-8 text-[#68D391]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>,
    // Molecule icon
    <svg key="molecule" className="w-8 h-8 text-[#2B6CB0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m3.375 0V9.75M9 5.25H5.625m0 0H2.25m3.375 0v3.375m0 0v3.375M2.25 5.25v3.375m0 0h3.375M5.625 8.625h3.375M9 8.625v3.375m0 0H5.625m3.375 0V16.875" />
    </svg>,
    // Graph icon
    <svg key="graph" className="w-8 h-8 text-[#38A169]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>,
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-bl from-[#F5F7FA] via-[#C6F6D5] to-[#F5F7FA]"
    >
      {/* Animated background elements */}
      <div className="parallax-bg absolute inset-0 opacity-15">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, #C6F6D5 10%, transparent 50%)',
          }}
        />
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, i % 2 === 0 ? 15 : -15, 0],
              opacity: [0, 0.4, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            {researchIcons[i % researchIcons.length]}
          </motion.div>
        ))}
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5F7FA]/20 to-[#C6F6D5]/30"></div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.span
            className="text-xs font-semibold tracking-wider text-[#38A169] uppercase inline-block py-1 px-3 rounded-full bg-[#C6F6D5]/50 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Welcome to UORA
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-serif text-[#1A202C]"
          >
            Universal Oneness
            <br />
            Research Association
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={isVisible ? { width: 180 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-1 bg-gradient-to-r from-[#2B6CB0] to-[#68D391] mx-auto rounded-full mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-[#4A5568] max-w-3xl mx-auto leading-relaxed mb-10"
          >
            Pioneering Peer-Reviewed Research in Science, Technology, Management, Arts, and Medical Sciences for a Sustainable Future.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="https://rohitagrawal7.github.io/journal-website/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 25px -5px rgba(43, 108, 176, 0.3)',
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#2B6CB0] to-[#68D391] text-white font-medium py-3 px-8 rounded-full hover:shadow-lg transition-all flex items-center"
            >
              Explore Our Journals
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.a>

            <motion.a
              href="#contactus"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 25px -5px rgba(104, 211, 145, 0.3)',
              }}
              whileTap={{ scale: 0.95 }}
              className="border border-[#38A169] text-[#38A169] font-medium py-3 px-8 rounded-full hover:bg-[#C6F6D5]/20 transition-all"
            >
              Contact Us
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
        >
          {[
            { value: '50+', label: 'Journals' },
            { value: '100+', label: 'Publications' },
            { value: '25+', label: 'Fields' },
            { value: 'Global', label: 'Reach' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, backgroundColor: '#C6F6D5' }}
              className="bg-white p-4 rounded-lg shadow-sm border border-[#E2E8F0]"
            >
              <div className="text-2xl md:text-3xl font-bold text-[#2B6CB0] ">{stat.value}</div>
              <div className="text-sm text-[#4f5250] mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[#4A5568] flex flex-col items-center"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;