import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const highlights = [
  {
    title: 'Multidisciplinary Publishing',
    description: 'Publishes high-quality peer-reviewed journals, books, e-books, and study materials across Science, Technology, Management, Arts, and Medical Sciences.',
    icon: '📚',
    gradient: 'from-blue-600 to-teal-600'
  },
  {
    title: 'Consultancy Services',
    description: 'Provides expert guidance for academic research, project documentation, and comprehensive report preparation for global organizations.',
    icon: '💼',
    gradient: 'from-teal-600 to-blue-600'
  },
  {
    title: 'Ethical Standards',
    description: 'Ensures rigorous peer review and ethical publishing practices, fostering credible and impactful scholarly work.',
    icon: '⚖️',
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    title: 'Global Impact',
    description: 'Serves the worldwide academic and research community through innovation, sustainability, and knowledge sharing.',
    icon: '🌍',
    gradient: 'from-green-600 to-teal-600'
  },
];

const About = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  
  // const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
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

  return (
    <section id="about" ref={ref} className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900">
      {/* Enhanced background with layered gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-slate-900/70 to-slate-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/10 to-blue-900/10"></div>
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      {/* Floating particles with enhanced animation */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 12 + 3}px`,
            height: `${Math.random() * 12 + 3}px`,
            background: i % 4 === 0 ? '#3b82f6' : i % 4 === 1 ? '#10b981' : i % 4 === 2 ? '#8b5cf6' : '#f97316',
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, i % 2 === 0 ? 20 : -20, 0],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 15 + 15,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Animated gradient orbs */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-600/20 to-teal-600/20 blur-3xl"
      />
      <motion.div 
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-teal-600/20 to-blue-600/20 blur-3xl"
      />

      {/* Content */}
      <motion.div 
        className="relative max-w-7xl mx-auto"
        style={{ opacity, scale }}
      >
        <div className="text-center mb-16">
          <motion.span 
            className="text-xs font-semibold tracking-wider text-teal-300 uppercase inline-block py-2 px-4 rounded-full bg-teal-900/30 mb-6 border border-teal-500/20"
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-blue-200"
          >
            About UORA
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            animate={isVisible ? { width: 120 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-blue-500 via-teal-400 to-blue-500 mx-auto rounded-full mb-10"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg max-w-4xl mx-auto text-blue-100 mb-16 text-center leading-relaxed font-light relative"
        >
          <span className="absolute -left-10 top-0 text-6xl opacity-20 text-teal-300 font-serif">"</span>
          <p className="relative z-10">
            Established in May 2025, Universal Oneness in Research Association (UORA) is a multidisciplinary organization
            committed to advancing knowledge across Science, Technology, Management, Arts, Medical Sciences, and allied
            fields. UORA publishes high-quality peer-reviewed journals, print books, e-books, international journals,
            question banks, and study materials, serving the global academic and research community.
          </p>
          <span className="absolute -right-10 bottom-0 text-6xl opacity-20 text-teal-300 font-serif">"</span>
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
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-teal-400/30 transition-all relative overflow-hidden group"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-r ${highlight.gradient}`} />
              
              <div className="flex items-start mb-6">
                <motion.span 
                  className="text-4xl mr-5"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  {highlight.icon}
                </motion.span>
                <h3 className="text-xl font-semibold text-teal-200">{highlight.title}</h3>
              </div>
              <p className="text-blue-100 leading-relaxed">{highlight.description}</p>
              
              {/* Animated underline */}
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-teal-500"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Shine effect on hover */}
              <div className="absolute inset-0 -inset-x-32 -inset-y-10 bg-gradient-to-r from-transparent via-white/5 to-transparent transform rotate-12 scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <motion.a
            href="#"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px -5px rgba(16, 185, 129, 0.5)",
              y: -3
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-gradient-to-r from-teal-600 to-blue-600 text-white font-medium py-4 px-10 rounded-full hover:shadow-lg transition-all"
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