import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const journals = [
  {
    title: "Universal Journal of Green SciTech & Management (UJGSM)",
    subtitle: "Science, Technology & Management",
    description:
      "A peer-reviewed journal publishing cutting-edge research in sustainable technologies and management practices.",
    icon: "🔬",
    color: "from-blue-600 to-teal-600",
    href: "https://rohitagrawal7.github.io/journal-website/",
    target: "_blank",
  },
  {
    title: "GreenTech Innovative Society (GTIS)",
    subtitle: "Science, Technology & Green Innovations",
    description:
      "Dedicated to innovative solutions for sustainable development and green technology advancements.",
    icon: "🌿",
    color: "from-teal-600 to-green-600",
    href: "https://rohitagrawal7.github.io/journal-website/gtis",
    target: "_blank",
  },
  {
    title: "Journal of Advanced Medical Sciences (JAMS)",
    subtitle: "Medical Research & Healthcare Innovations",
    description:
      "Publishing groundbreaking research in medical sciences and healthcare technologies.",
    icon: "⚕️",
    color: "from-green-600 to-blue-600",
    href: "https://rohitagrawal7.github.io/journal-website/jams",
    target: "_blank",
  },
  {
    title: "Arts & Cultural Studies Review (ACSR)",
    subtitle: "Interdisciplinary Arts & Cultural Research",
    description:
      "Exploring the intersection of arts, culture, and society through scholarly research.",
    icon: "🎨",
    color: "from-purple-600 to-pink-600",
    href: "https://rohitagrawal7.github.io/journal-website/acsr",
    target: "_blank",
  },
];

const Journals = () => {
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

  // Function to handle journal box click
  const handleJournalClick = (href, target) => {
    window.open(href, target || '_self');
  };

  return (
    <motion.section
      id="journals"
      ref={ref}
      className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-slate-900 to-teal-900"
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
            className="text-xs font-semibold tracking-wider text-teal-300 uppercase inline-block py-1 px-3 rounded-full bg-teal-900/30 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            Academic Publications
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-blue-200"
          >
            Journals under UORA
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            animate={isVisible ? { width: 100 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto rounded-full mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-blue-100 max-w-3xl mx-auto"
          >
            UORA publishes high-quality, peer-reviewed journals across diverse disciplines, 
            promoting innovative research and knowledge dissemination.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {journals.map((journal, index) => (
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
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-teal-400/30 transition-all relative overflow-hidden group cursor-pointer"
              onClick={() => handleJournalClick(journal.href, journal.target)}
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-r ${journal.color}`} />
              
              <div className="flex items-start mb-4">
                <motion.span 
                  className="text-3xl mr-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {journal.icon}
                </motion.span>
                <div>
                  <h3 className="text-xl font-semibold text-teal-200 mb-1">
                    {journal.title}
                  </h3>
                  <p className="text-blue-300 text-sm">{journal.subtitle}</p>
                </div>
              </div>
              <p className="text-blue-100 leading-relaxed mb-4">{journal.description}</p>
              
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-teal-500 to-blue-500"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-xs font-medium text-teal-300 hover:text-teal-200 transition-colors inline-flex items-center"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering the parent onClick
                  handleJournalClick(journal.href, journal.target);
                }}
              >
                View Journal →
              </motion.div>
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
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-gradient-to-r from-teal-600 to-blue-600 text-white font-medium py-3 px-8 rounded-full hover:shadow-lg transition-all cursor-pointer"
            aria-label="View all journals"
          >
            View All Journals
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Journals;