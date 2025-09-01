import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const editorialTeam = [
  {
    role: 'Editor-in-Chief',
    name: 'Prof. Pawan D. Somavanshi (Ph.D. Mechanical)',
    affiliation: 'Research Scholar, Government College of Engineering Aurangabad, MH, India',
    email: 'pawansomavanshi.PhD@geca.ac.in, pawansomavanshi5jan@gmail.com',
    phone: '+91 90964 99989',
    icon: '👨‍💼',
    color: 'from-blue-600 to-teal-600'
  },
  {
    role: 'Managing Editor',
    name: 'Dr. Swapnil N. Dhole (Ph.D. Mechanical)',
    affiliation: 'Training and Placement Officer, MSS\'s College of Engineering and Technology, Jalna, MH, India',
    email: 'dholeswapnil25@gmail.com',
    phone: '+91 89832 45607',
    icon: '👨‍🎓',
    color: 'from-teal-600 to-blue-600'
  }
];

const Editorial = () => {
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
      id="editorial"
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
            Get In Touch
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-teal-200"
          >
            Editorial Inquiries
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            animate={isVisible ? { width: 100 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto rounded-full mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-blue-100 max-w-3xl mx-auto"
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
              className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-blue-400/30 transition-all relative overflow-hidden group"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-r ${member.color}`} />
              
              <div className="flex items-center mb-6">
                <motion.span 
                  className="text-4xl mr-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {member.icon}
                </motion.span>
                <div>
                  <h3 className="text-xl font-semibold text-blue-200">{member.role}</h3>
                  <p className="text-teal-300 font-medium">{member.name}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-blue-100 text-sm mb-1">Affiliation</p>
                  <p className="text-blue-200">{member.affiliation}</p>
                </div>
                
                <div>
                  <p className="text-blue-100 text-sm mb-1">Email</p>
                  <motion.a
                    href={`mailto:${member.email.split(',')[0]}`}
                    whileHover={{ color: '#7dd3fc' }}
                    className="text-teal-300 block transition-colors"
                  >
                    {member.email}
                  </motion.a>
                </div>
                
                <div>
                  <p className="text-blue-100 text-sm mb-1">Phone</p>
                  <motion.a
                    href={`tel:${member.phone.replace(/\s/g, '')}`}
                    whileHover={{ color: '#7dd3fc' }}
                    className="text-teal-300 block transition-colors"
                  >
                    {member.phone}
                  </motion.a>
                </div>
              </div>
              
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-teal-500"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 p-6 bg-blue-900/30 backdrop-blur-sm rounded-xl border border-blue-500/20 max-w-4xl mx-auto"
        >
          <h3 className="text-xl font-semibold text-blue-200 mb-4 text-center">Submission Guidelines</h3>
          <p className="text-blue-100 text-center">
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
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-teal-600 text-white font-medium py-3 px-8 rounded-full hover:shadow-lg transition-all"
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