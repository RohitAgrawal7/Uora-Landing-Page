import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const highlights = [
  {
    title: 'Multidisciplinary Publishing',
    description:
      'Publishes high-quality peer-reviewed journals, books, e-books, and study materials across Science, Technology, Management, Arts, and Medical Sciences.',
    icon: (
      <svg
        className="w-8 h-8 text-[#4A3728]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
    gradient: 'from-[#2B6CB0] to-[#68D391]',
  },
  {
    title: 'Consultancy Services',
    description:
      'Provides expert guidance for academic research, project documentation, and comprehensive report preparation for global organizations.',
    icon: (
      <svg
        className="w-8 h-8 text-[#4A3728]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    gradient: 'from-[#38A169] to-[#68D391]',
  },
  {
    title: 'Ethical Standards',
    description:
      'Ensures rigorous peer review and ethical publishing practices, fostering credible and impactful scholarly work.',
    icon: (
      <svg
        className="w-8 h-8 text-[#4A3728]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    gradient: 'from-[#2B6CB0] to-[#38A169]',
  },
  {
    title: 'Global Impact',
    description:
      'Serves the worldwide academic and research community through innovation, sustainability, and knowledge sharing.',
    icon: (
      <svg
        className="w-8 h-8 text-[#4A3728]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012-2v-1a2 2 0 012-2h2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    gradient: 'from-[#68D391] to-[#2B6CB0]',
  },
];

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.95]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
    <svg key="book" className="w-8 h-8 text-[#68D391]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>,
    <svg key="molecule" className="w-8 h-8 text-[#2B6CB0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m3.375 0V9.75M9 5.25H5.625m0 0H2.25m3.375 0v3.375m0 0v3.375M2.25 5.25v3.375m0 0h3.375M5.625 8.625h3.375M9 8.625v3.375m0 0H5.625m3.375 0V16.875" />
    </svg>,
    <svg key="graph" className="w-8 h-8 text-[#38A169]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>,
  ];

  return (
    <section id="about" ref={ref} className="relative py-24 px-6 overflow-hidden bg-gradient-to-bl from-[#F5F7FA] via-[#C6F6D5] to-[#F5F7FA]">
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
      </motion.div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5F7FA]/20 to-[#C6F6D5]/30"></div>

      {/* Content */}
      <motion.div 
        className="relative max-w-7xl mx-auto"
        style={{ opacity, scale }}
      >
        <div className="text-center mb-16">
          <motion.span 
            className="text-xs font-semibold tracking-wider text-[#38A169] uppercase inline-block py-2 px-4 rounded-full bg-[#C6F6D5]/50 mb-6 border border-[#C6F6D5]/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            About Our Organization
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#1A202C] font-serif"
          >
            About UORA
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            animate={isVisible ? { width: 120 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-[#2B6CB0] to-[#68D391] mx-auto rounded-full mb-10"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg max-w-4xl mx-auto text-[#4A5568] mb-16 text-center leading-relaxed font-light relative"
          whileHover={{ 
            scale: 1.02, 
            boxShadow: '0 8px 20px rgba(43, 108, 176, 0.1)',
            transition: { duration: 0.2 }
          }}
        >
          <span className="absolute -left-10 top-0 text-6xl opacity-20 text-[#38A169] font-serif">"</span>
          <p className="relative z-10">
            Established in May 2025, Universal Oneness in Research Association (UORA) is a multidisciplinary organization
            committed to advancing knowledge across Science, Technology, Management, Arts, Medical Sciences, and allied
            fields. UORA publishes high-quality peer-reviewed journals, print books, e-books, international journals,
            question banks, and study materials, serving the global academic and research community.
          </p>
          <span className="absolute -right-10 bottom-0 text-6xl opacity-20 text-[#38A169] font-serif">"</span>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
              whileHover={{ 
                y: -8, 
                scale: 1.03, 
                transition: { duration: 0.2 } 
              }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-[#E2E8F0] hover:border-[#68D391]/30 transition-all relative overflow-hidden group"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-r ${highlight.gradient}`} />
              
              <div className="flex items-start mb-6">
                <motion.span 
                  className="text-4xl mr-5"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  {highlight.icon}
                </motion.span>
                <h3 className="text-xl font-semibold text-[#2B6CB0] font-serif">{highlight.title}</h3>
              </div>
              <p className="text-[#4A5568] leading-relaxed">{highlight.description}</p>
              
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#2B6CB0] to-[#68D391]"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="absolute inset-0 -inset-x-32 -inset-y-10 bg-gradient-to-r from-transparent via-[#C6F6D5]/10 to-transparent transform rotate-12 scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Quick Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
        >
          {[
            { value: '2025', label: 'Founded' },
            { value: '100+', label: 'Publications' },
            { value: '25+', label: 'Disciplines' },
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

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 text-center"
        >
          <motion.a
            href="#"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px -5px rgba(43, 108, 176, 0.3)",
              y: -3
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-gradient-to-r from-[#2B6CB0] to-[#68D391] text-white font-medium py-4 px-10 rounded-full hover:shadow-lg transition-all"
            aria-label="Learn more about UORA"
          >
            Discover More
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;