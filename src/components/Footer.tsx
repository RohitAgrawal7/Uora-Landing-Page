import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(2025);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative py-12 px-6 overflow-hidden bg-gradient-to-br from-slate-900 to-blue-900 border-t border-teal-500/20"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #10b981 1px, transparent 0),
                              radial-gradient(circle at 75% 75%, #3b82f6 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

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
            <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-300">
              Registration & Compliance
            </h3>
            <ul className="space-y-2">
              <motion.li 
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center md:justify-start"
              >
                <span className="text-teal-400 mr-2">•</span>
                <span>UDYAM: UDYAM-MH-04-0237577</span>
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center md:justify-start"
              >
                <span className="text-teal-400 mr-2">•</span>
                <span>GSTN: 27AAIFU8304M1ZO</span>
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center md:justify-start"
              >
                <span className="text-teal-400 mr-2">•</span>
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
            <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-300">
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
                    className="text-blue-100 hover:text-teal-300 transition-colors"
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
            <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-300">
              Contact Info
            </h3>
            <div className="space-y-2">
              <p className="text-blue-100">E-1/8 Mathura Nagar, N-6, Cidco</p>
              <p className="text-blue-100">Chhatrapati Sambhajinagar, Maharashtra 431003, India</p>
              <p className="text-blue-100">+91 9766930707</p>
              <motion.a
                href="mailto:contact@uora.org"
                whileHover={{ color: '#7dd3fc' }}
                className="text-teal-300 block transition-colors"
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
          {[
            { name: 'Twitter', icon: '🐦', url: '#' },
            { name: 'LinkedIn', icon: '💼', url: '#' },
            { name: 'Facebook', icon: '📘', url: '#' },
            { name: 'Instagram', icon: '📸', url: '#' },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              aria-label={social.name}
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:border-teal-400/30 transition-all"
            >
              <span className="text-lg">{social.icon}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center border-t border-white/10 pt-6"
        >
          <p className="text-blue-100">
            &copy; {currentYear} Universal Oneness in Research Association (UORA). All rights reserved.
          </p>
          <p className="text-blue-200/70 text-sm mt-2">
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
            className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-600 to-blue-600 flex items-center justify-center shadow-lg hover:shadow-teal-500/20 transition-all"
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