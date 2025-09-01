import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const Vision = () => {
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
      id="vision"
      ref={ref}
      className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-blue-900/90 to-teal-900/90"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{ y: backgroundY }}
      >
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #10b981 2px, transparent 0),
                              radial-gradient(circle at 75% 75%, #3b82f6 2px, transparent 0)`,
            backgroundSize: '60px 60px',
          }}
        />
      </motion.div>

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
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
            className="text-xs font-semibold tracking-wider text-teal-300 uppercase inline-block py-1 px-3 rounded-full bg-teal-900/30 mb-4"
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
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-blue-200"
          >
            Vision
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            animate={isVisible ? { width: 100 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto rounded-full mb-8"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="absolute -left-4 top-0 text-6xl opacity-20 text-teal-300 font-serif">"</div>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto text-center leading-relaxed italic font-light">
            To become a leading global organization fostering knowledge creation, innovation, and academic excellence 
            across multidisciplinary fields, while promoting ethical research, sustainability, and inclusive development.
          </p>
          <div className="absolute -right-4 bottom-0 text-6xl opacity-20 text-teal-300 font-serif">"</div>
        </motion.div>

        {/* Supporting points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto"
        >
          {[
            { 
              title: "Knowledge Creation", 
              icon: "📚",
              description: "Fostering innovative research and scholarly work across diverse disciplines."
            },
            { 
              title: "Ethical Research", 
              icon: "⚖️",
              description: "Promoting integrity, transparency, and ethical standards in all academic endeavors."
            },
            { 
              title: "Global Impact", 
              icon: "🌍",
              description: "Creating sustainable solutions with worldwide reach and significance."
            }
          ].map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-teal-400/30 transition-all"
            >
              <div className="text-3xl mb-4">{point.icon}</div>
              <h3 className="text-lg font-semibold text-teal-200 mb-2">{point.title}</h3>
              <p className="text-blue-100 text-sm">{point.description}</p>
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
            href="#"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-gradient-to-r from-teal-600 to-blue-600 text-white font-medium py-3 px-8 rounded-full hover:shadow-lg transition-all"
            aria-label="Learn more about our vision"
          >
            Our Mission
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