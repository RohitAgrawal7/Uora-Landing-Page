import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const Vision = () => {
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

  // Quote icon for vision statement
  const quoteIcon = (
    <svg className="w-12 h-12 text-[#2A7B3F]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 11c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.76-2.24 5-5 5-1.1 0-2.11-.36-2.93-1M7 11c0 2.76 2.24 5 5 5s5-2.24 5-5M7 11H3m14 0h4" />
    </svg>
  );

  // Professional SVG icons for supporting points
  const visionPoints = [
    {
      title: 'Knowledge Creation',
      icon: (
        <svg className="w-8 h-8 text-[#4A3728]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      ),
      description: 'Fostering innovative research and scholarly work across diverse disciplines.',
    },
    {
      title: 'Ethical Research',
      icon: (
        <svg className="w-8 h-8 text-[#4A3728]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: 'Promoting integrity, transparency, and ethical standards in all academic endeavors.',
    },
    {
      title: 'Global Impact',
      icon: (
        <svg className="w-8 h-8 text-[#4A3728]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012-2v-1a2 2 0 012-2h2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: 'Creating sustainable solutions with worldwide reach and significance.',
    },
  ];

  return (
    <motion.section
      id="vision"
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
            Our Guiding Principle
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-[#1A202C] font-serif"
          >
            Our Vision
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            animate={isVisible ? { width: 100 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-[#2B6CB0] to-[#68D391] mx-auto rounded-full mb-8"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative p-6 bg-[#C6F6D5]/50 rounded-xl border border-[#68D391]/30 max-w-4xl mx-auto"
          whileHover={{ 
            scale: 1.02, 
            boxShadow: '0 8px 20px rgba(43, 108, 176, 0.1)',
            transition: { duration: 0.2 }
          }}
        >
          <motion.div
            className="absolute -left-4 top-0"
            whileHover={{ scale: 1.2, rotate: 15 }}
            transition={{ duration: 0.3 }}
            aria-label="Quote start"
          >
            {quoteIcon}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center justify-center mb-4"
          >
            <svg className="w-10 h-10 text-[#4A3728]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </motion.div>
          <p className="text-xl md:text-2xl text-[#4A5568] max-w-4xl mx-auto text-center leading-relaxed italic font-light">
            To become a leading global organization fostering knowledge creation, innovation, and academic excellence 
            across multidisciplinary fields, while promoting ethical research, sustainability, and inclusive development.
          </p>
          <motion.div
            className="absolute -right-4 bottom-0"
            whileHover={{ scale: 1.2, rotate: 15 }}
            transition={{ duration: 0.3 }}
            aria-label="Quote end"
          >
            {quoteIcon}
          </motion.div>
        </motion.div>

        {/* Supporting points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto"
        >
          {visionPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="bg-white p-6 rounded-xl shadow-sm border border-[#E2E8F0] hover:border-[#68D391]/30 transition-all relative overflow-hidden group"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-r from-[#2B6CB0] to-[#68D391]" />
              <motion.div
                className="mb-4"
                whileHover={{ scale: 1.2, rotate: 15 }}
                transition={{ duration: 0.3 }}
                aria-label={`Icon for ${point.title}`}
              >
                {point.icon}
              </motion.div>
              <h3 className="text-lg font-semibold text-[#2B6CB0] font-serif mb-2">{point.title}</h3>
              <p className="text-[#4A5568] text-sm">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto"
        >
          {[
            { value: '20+', label: 'Disciplines Covered' },
            { value: '10+', label: 'Years of Impact' },
            { value: '100+', label: 'Global Collaborations' },
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
          className="mt-12 text-center"
        >
          <motion.a
            href="#mission"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(43, 108, 176, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-gradient-to-r from-[#2B6CB0] to-[#68D391] text-white font-medium py-3 px-8 rounded-full hover:shadow-lg transition-all"
            aria-label="Explore our mission"
          >
            Explore Our Mission
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Vision;