import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const editorialTeam = [
  {
    role: 'Editor-in-Chief',
    name: 'Prof. Pawan D. Somavanshi (Ph.D. Mechanical)',
    affiliation: 'Research Scholar, Government College of Engineering Aurangabad, MH, India',
    email: 'pawansomavanshi.PhD@geca.ac.in, pawansomavanshi5jan@gmail.com',
    phone: '+91 90964 99989',
    icon: (
      <svg className="w-8 h-8 text-[#4A3728]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.121 18.364A9 9 0 1118.364 5.121M15 9l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ), // Professional editor icon (book with arrow)
    social: { linkedin: '#', twitter: '#' },
  },
  {
    role: 'Managing Editor',
    name: 'Dr. Swapnil N. Dhole (Ph.D. Mechanical)',
    affiliation: 'Training and Placement Officer, MSS\'s College of Engineering and Technology, Jalna, MH, India',
    email: 'dholeswapnil25@gmail.com',
    phone: '+91 89832 45607',
    icon: (
      <svg className="w-8 h-8 text-[#4A3728]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ), // Professional managing icon (document)
    social: { linkedin: '#', twitter: '#' },
  },
];

const Editorial = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // Research-themed SVG icons for background
  const researchIcons = [
    <svg key="book" className="w-8 h-8 text-[#2A7B3F]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>,
    <svg key="molecule" className="w-8 h-8 text-[#2B6CB0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m3.375 0V9.75M9 5.25H5.625m0 0H2.25m3.375 0v3.375m0 0v3.375M2.25 5.25v3.375m0 0h3.375M5.625 8.625h3.375M9 8.625v3.375m0 0H5.625m3.375 0V16.875" />
    </svg>,
    <svg key="graph" className="w-8 h-8 text-[#38A169]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>,
  ];

  // Leaf icon for nature-inspired animation
  const leafIcon = (
    <svg className="w-6 h-6 text-[#2A7B3F]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8v6a9 9 0 0018 0V8m-9 12V8m0 0c-2.2 0-4-1.8-4-4h8c0 2.2-1.8 4-4 4z" />
    </svg>
  );

  return (
    <motion.section
      id="editorial"
      ref={ref}
      className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-[#F5F7FA] via-[#C6F6D5] to-[#F5F7FA]"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-15"
        style={{ y: backgroundY }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, #C6F6D5 10%, transparent 50%)',
          }}
        />
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`research-${i}`}
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
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`leaf-${i}`}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              y: [0, 30, 0],
              rotate: [0, 15, -15, 0],
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeInOut',
            }}
          >
            {leafIcon}
          </motion.div>
        ))}
      </motion.div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5F7FA]/20 to-[#C6F6D5]/30"></div>

      {/* Content */}
      <motion.div 
        className="relative max-w-7xl mx-auto"
        style={{ opacity }}
      >
        <div className="text-center mb-12">
          <motion.span 
            className="text-xs font-semibold tracking-wider text-[#38A169] uppercase inline-block py-1 px-3 rounded-full bg-[#C6F6D5]/50 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            Editorial Team
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-[#1A202C] font-serif"
          >
            Editorial Inquiries
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            animate={isVisible ? { width: 100 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-[#2B6CB0] to-[#68D391] mx-auto rounded-full mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-[#4A5568] max-w-3xl mx-auto"
          >
            Contact our editorial team for inquiries about manuscript submissions, peer review, 
            or any other questions related to our publications.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {editorialTeam.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
              whileHover={{ 
                y: -5, 
                scale: 1.02, 
                transition: { duration: 0.2 } 
              }}
              className="bg-white p-8 rounded-xl shadow-sm border border-[#E2E8F0] hover:border-[#68D391]/30 transition-all relative overflow-hidden group"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-r from-[#2B6CB0] to-[#68D391]" />
              
              <div className="flex items-center mb-6">
                <motion.div 
                  className="mr-4"
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  transition={{ duration: 0.3 }}
                  aria-label={`Icon for ${member.role}`}
                >
                  {member.icon}
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1A202C] font-serif">{member.role}</h3>
                  <p className="text-[#4A5568] font-medium">{member.name}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-[#1A202C] text-sm mb-1 font-medium">Affiliation</p>
                  <p className="text-[#4A5568]">{member.affiliation}</p>
                </div>
                
                <div>
                  <p className="text-[#1A202C] text-sm mb-1 font-medium">Email</p>
                  <motion.a
                    href={`mailto:${member.email.split(',')[0]}`}
                    whileHover={{ color: '#68D391' }}
                    className="text-[#2A7B3F] block transition-colors"
                  >
                    {member.email}
                  </motion.a>
                </div>
                
                <div>
                  <p className="text-[#1A202C] text-sm mb-1 font-medium">Phone</p>
                  <motion.a
                    href={`tel:${member.phone.replace(/\s/g, '')}`}
                    whileHover={{ color: '#68D391' }}
                    className="text-[#2A7B3F] block transition-colors"
                  >
                    {member.phone}
                  </motion.a>
                </div>

                <div className="flex space-x-4 pt-4">
                  {Object.entries(member.social).map(([platform, href]) => (
                    <motion.a
                      key={platform}
                      href={href}
                      whileHover={{ y: -5, scale: 1.1 }}
                      className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-[#E2E8F0] hover:border-[#2A7B3F] transition-all"
                      aria-label={`Follow ${member.name} on ${platform}`}
                    >
                      <span className="text-[#4A3728]">
                        {platform === 'linkedin' ? '💼' : '🐦'}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
              
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#2B6CB0] to-[#68D391]"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Quick Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto"
        >
          {[
            { value: '2+', label: 'Editors' },
            { value: '20+', label: 'Years Experience' },
            { value: '500+', label: 'Publications Reviewed' },
            { value: 'Global', label: 'Reach' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, backgroundColor: '#C6F6D5' }}
              className="bg-white p-4 rounded-lg shadow-sm border border-[#E2E8F0]"
            >
              <div className="text-2xl md:text-3xl font-bold text-[#2B6CB0]">{stat.value}</div>
              <div className="text-sm text-[#4A5568] mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Submission Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 p-6 bg-[#C6F6D5]/50 rounded-xl border border-[#68D391]/30 max-w-4xl mx-auto"
          whileHover={{ 
            scale: 1.02, 
            boxShadow: '0 8px 20px rgba(43, 108, 176, 0.1)',
            transition: { duration: 0.2 }
          }}
        >
          <h3 className="text-xl font-semibold text-[#1A202C] font-serif mb-4 text-center">Submission Guidelines</h3>
          <p className="text-[#4A5568] text-center">
            For manuscript submissions, please ensure your work follows our guidelines and ethical standards. 
            All submissions undergo a rigorous peer-review process to maintain the highest academic quality.
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(43, 108, 176, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-gradient-to-r from-[#2B6CB0] to-[#68D391] text-white font-medium py-3 px-8 rounded-full hover:shadow-lg transition-all"
            aria-label="Contact editorial team"
          >
            Contact Editorial Team
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Editorial;