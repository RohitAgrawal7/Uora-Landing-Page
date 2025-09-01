import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const missions = [
  {
    text: 'To publish high-quality peer-reviewed journals, books, and study materials across Science, Technology, Management, Arts, Medical Sciences, and allied disciplines.',
    icon: '📚'
  },
  {
    text: 'To provide consultancy services in academic research, project documentation, and comprehensive report preparation for organizations and institutions.',
    icon: '💼'
  },
  {
    text: 'To ensure ethical publishing practices, rigorous peer-review standards, and dissemination of credible scholarly work.',
    icon: '⚖️'
  },
  {
    text: 'To support researchers, educators, and institutions in generating impactful knowledge and promoting lifelong learning.',
    icon: '🎓'
  },
  {
    text: 'To contribute to the global academic and research community through collaboration, innovation, and knowledge sharing.',
    icon: '🌍'
  },
];

const Mission = () => {
  const ref = useRef(null);
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

  return (
    <motion.section
      id="mission"
      ref={ref}
      className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-slate-900 to-blue-900"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{ y: backgroundY }}
      >
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 0),
                              radial-gradient(circle at 75% 75%, #10b981 2px, transparent 0)`,
            backgroundSize: '60px 60px',
          }}
        />
      </motion.div>

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 8 + 4}px`,
            height: `${Math.random() * 8 + 4}px`,
            background: i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#10b981' : '#8b5cf6',
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, i % 2 === 0 ? 10 : -10, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: Math.random() * 6 + 6,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Content */}
      <motion.div 
        className="relative max-w-7xl mx-auto"
        style={{ opacity }}
      >
        <div className="text-center mb-12">
          <motion.span 
            className="text-xs font-semibold tracking-wider text-blue-300 uppercase inline-block py-1 px-3 rounded-full bg-blue-900/30 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            Our Commitment
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-teal-200"
          >
            Mission
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            animate={isVisible ? { width: 100 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto rounded-full mb-8"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {missions.map((mission, index) => (
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
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-blue-400/30 transition-all relative overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 w-20 h-20 rounded-full opacity-5" 
                   style={{ background: index % 2 === 0 ? '#3b82f6' : '#10b981' }} />
              
              <div className="flex items-start mb-4">
                <motion.span 
                  className="text-3xl mr-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {mission.icon}
                </motion.span>
                <h3 className="text-lg font-semibold text-blue-200">Mission {index + 1}</h3>
              </div>
              <p className="text-blue-100 leading-relaxed">{mission.text}</p>
              
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-teal-500"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="#"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-teal-600 text-white font-medium py-3 px-8 rounded-full hover:shadow-lg transition-all"
            aria-label="Learn more about our mission"
          >
            Join Our Mission
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Mission;