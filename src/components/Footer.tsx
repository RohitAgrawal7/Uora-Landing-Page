import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(2025);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
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

  // Professional SVG icons for social links
  const socialIcons = [
    {
      name: 'Twitter',
      url: '#',
      icon: (
        <svg className="w-6 h-6 text-[#4A3728]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: '#',
      icon: (
        <svg className="w-6 h-6 text-[#4A3728]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      url: '#',
      icon: (
        <svg className="w-6 h-6 text-[#4A3728]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      url: '#',
      icon: (
        <svg className="w-6 h-6 text-[#4A3728]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
  ];

  return (
    <motion.footer 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative py-12 px-6 overflow-hidden bg-gradient-to-br from-[#F5F7FA] via-[#C6F6D5] to-[#F5F7FA] border-t border-[#C6F6D5]/20"
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
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Registration Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-bold mb-4 text-[#1A202C] font-serif">
              Registration & Compliance
            </h3>
            <ul className="space-y-2">
              <motion.li 
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center md:justify-start text-[#4A5568]"
              >
                <span className="text-[#38A169] mr-2">•</span>
                <span>UDYAM: UDYAM-MH-04-0237577</span>
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center md:justify-start text-[#4A5568]"
              >
                <span className="text-[#38A169] mr-2">•</span>
                <span>GSTN: 27AAIFU8304M1ZO</span>
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center md:justify-start text-[#4A5568]"
              >
                <span className="text-[#38A169] mr-2">•</span>
                <span>Shop Act Number: 2541500320009408</span>
              </motion.li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-xl font-bold mb-4 text-[#1A202C] font-serif">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Journals', 'Editorial', 'Contact'].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-[#4A5568] hover:text-[#68D391] transition-colors"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <h3 className="text-xl font-bold mb-4 text-[#1A202C] font-serif">
              Contact Info
            </h3>
            <div className="space-y-2 text-[#4A5568]">
              <p>E-1/8 Mathura Nagar, N-6, Cidco</p>
              <p>Chhatrapati Sambhajinagar, Maharashtra 431003, India</p>
              <p>+91 9766930707</p>
              <motion.a
                href="mailto:contact@uora.org"
                whileHover={{ color: '#68D391' }}
                className="text-[#2A7B3F] block transition-colors"
              >
                contact@uora.org
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-6 mb-8"
        >
          {socialIcons.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              aria-label={social.name}
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-[#E2E8F0] hover:border-[#2A7B3F] transition-all"
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center border-t border-[#C6F6D5]/20 pt-6"
        >
          <p className="text-[#4A5568]">
            &copy; {currentYear} Universal Oneness in Research Association (UORA). All rights reserved.
          </p>
          <p className="text-[#4A5568]/70 text-sm mt-2">
            Advancing knowledge through multidisciplinary research and publications.
          </p>
        </motion.div>

        {/* Back to Top */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="absolute right-6 bottom-6"
        >
          <motion.a
            href="#"
            aria-label="Back to top"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-[#2B6CB0] to-[#68D391] flex items-center justify-center shadow-lg hover:shadow-[#68D391]/20 transition-all"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;