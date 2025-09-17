import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const journals = [
  {
    title: "Universal Journal of Green SciTech & Management (UJGSM)",
    subtitle: "Science, Technology & Management",
    description:
      "A peer-reviewed journal publishing cutting-edge research in sustainable technologies and management practices.",
    icon: "🔬",
    color: "from-[#2B6CB0] to-[#68D391]",
    href: "http://localhost:5173/",
    target: "_blank",
  },
  {
    title: "Ambedkar’s Legacy: Universal Journal of Humanities, Culture and Social Sciences (AL-UJHSC)",
    subtitle: "Science, Technology & Green Innovations",
    description:
      "Dedicated to innovative solutions for sustainable development and green technology advancements.",
    icon: "🌿",
    color: "from-[#38A169] to-[#68D391]",
    href: "https://rohitagrawal7.github.io/journal-website/gtis",
    target: "_blank",
  },
  {
    title: "Universal Journal of Medical, Pharmaceutical, Sciences and Biotechnology (UJMPB)",
    subtitle: "Medical Research & Healthcare Innovations",
    description:
      "Publishing groundbreaking research in medical sciences and healthcare technologies.",
    icon: "⚕️",
    color: "from-[#68D391] to-[#2B6CB0]",
    href: "https://rohitagrawal7.github.io/journal-website/jams",
    target: "_blank",
  },
  {
    title: "Arts & Cultural Studies Review (ACSR)",
    subtitle: "Interdisciplinary Arts & Cultural Research",
    description:
      "Exploring the intersection of arts, culture, and society through scholarly research.",
    icon: "🎨",
    color: "from-[#2B6CB0] to-[#38A169]",
    href: "https://rohitagrawal7.github.io/journal-website/acsr",
    target: "_blank",
  },
];

const Journals = () => {
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

  // Function to handle journal box click
  const handleJournalClick = (href: string | URL | undefined, target: string) => {
    window.open(href, target || '_self');
  };

  return (
    <motion.section
      id="journals"
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
            Academic Publications
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-[#1A202C] font-serif"
          >
            Journals under UORA
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
              className="bg-white p-6 rounded-xl shadow-sm border border-[#E2E8F0] hover:border-[#68D391]/30 transition-all relative overflow-hidden group cursor-pointer"
              onClick={() => handleJournalClick(journal.href, journal.target)}
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-r ${journal.color}`} />
              
              <div className="flex items-start mb-4">
                <motion.span 
                  className="text-3xl mr-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {journal.icon}
                </motion.span>
                <div>
                  <h3 className="text-xl font-semibold text-[#1A202C] font-serif mb-1">
                    {journal.title}
                  </h3>
                  <p className="text-[#4A5568] text-sm">{journal.subtitle}</p>
                </div>
              </div>
              <p className="text-[#4A5568] leading-relaxed mb-4">{journal.description}</p>
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#2B6CB0] to-[#68D391]"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-xs font-medium text-[#38A169] hover:text-[#68D391] transition-colors inline-flex items-center"
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
          <motion.a
            href="#"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(43, 108, 176, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-gradient-to-r from-[#2B6CB0] to-[#68D391] text-white font-medium py-3 px-8 rounded-full hover:shadow-lg transition-all cursor-pointer"
            aria-label="View all journals"
          >
            View All Journals
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Journals;