import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: {
      name?: string;
      email?: string;
      message?: string;
    } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const res = await fetch("https://formspree.io/f/mgvldrld", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (res.ok) {
          setIsSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
        } else {
          console.error("Formspree submission failed");
        }
      } catch (err) {
        console.error("Error submitting form:", err);
      } finally {
        setIsSubmitting(false);
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      }
    }
  };

  // Research-themed SVG icons
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

  return (
    <motion.section
      id="contact"
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
            Get In Touch
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-[#1A202C] font-serif"
          >
            Contact Us
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
            For any inquiries, submissions, or collaboration opportunities, please reach out to us.
            We'd love to hear from you and will respond as soon as possible.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-[#1A202C] font-serif mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="text-[#4A3728] mr-4 mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-[#1A202C] font-medium">Publisher</p>
                  <p className="text-[#4A5568]">Universal Oneness in Research Association (UORA)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-[#4A3728] mr-4 mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-[#1A202C] font-medium">Office Address</p>
                  <p className="text-[#4A5568]">E-1/8 Mathura Nagar, N-6, Cidco, Chhatrapati Sambhajinagar, Maharashtra 431003, India</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-[#4A3728] mr-4 mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-[#1A202C] font-medium">Phone</p>
                  <motion.a 
                    href="tel:+919766930707"
                    whileHover={{ color: '#68D391' }}
                    className="text-[#2A7B3F] block transition-colors"
                  >
                    +91 9766930707
                  </motion.a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-[#4A3728] mr-4 mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-[#1A202C] font-medium">Email</p>
                  <motion.a 
                    href="mailto:contact@uorapublications.org"
                    whileHover={{ color: '#68D391' }}
                    className="text-[#2A7B3F] block transition-colors"
                  >
                    contact@uorapublications.com
                  </motion.a>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <h4 className="text-lg font-semibold text-[#1A202C] font-serif mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'linkedin', 'instagram'].map((platform) => (
                  <motion.a
                    key={platform}
                    href="#"
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-[#E2E8F0] hover:border-[#2A7B3F] transition-all"
                    aria-label={`Follow us on ${platform}`}
                  >
                    <span className="text-[#4A3728]">{
                      platform === 'facebook' ? '📘' : 
                      platform === 'twitter' ? '🐦' : 
                      platform === 'linkedin' ? '💼' : '📸'
                    }</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="pt-6">
              <h4 className="text-lg font-semibold text-[#1A202C] font-serif mb-4">Quick Links</h4>
              <div className="flex flex-col space-y-2">
                {[
                  { text: 'Submit a Paper', href: '#submit' },
                  { text: 'Join Our Team', href: '#careers' }
                ].map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    whileHover={{ x: 5, color: '#68D391' }}
                    className="text-[#2A7B3F] font-medium transition-colors"
                  >
                    {link.text}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-white p-8 rounded-xl shadow-sm border border-[#E2E8F0]"
          >
            <h3 className="text-2xl font-semibold text-[#1A202C] font-serif mb-6">Send us a Message</h3>
            
            <AnimatePresence>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="p-4 bg-[#C6F6D5]/50 border border-[#68D391]/30 rounded-lg text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                    className="text-4xl mb-2 text-[#2A7B3F]"
                  >
                    🌱
                  </motion.div>
                  <h4 className="text-[#1A202C] font-semibold mb-2">Message Sent Successfully!</h4>
                  <p className="text-[#4A5568]">Thank you for contacting us. We'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-[#1A202C] mb-2">Name</label>
                    <motion.input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full p-3 bg-white border rounded-lg focus:ring-2 focus:outline-none ${errors.name ? 'border-red-400 focus:ring-red-400/30' : 'border-[#E2E8F0] focus:ring-[#68D391]/30'} text-[#4A5568]`}
                      placeholder="Your name"
                      whileFocus={{ boxShadow: '0 0 8px rgba(104, 211, 145, 0.3)' }}
                    />
                    {errors.name && <p className="mt-1 text-red-400 text-sm">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-[#1A202C] mb-2">Email</label>
                    <motion.input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full p-3 bg-white border rounded-lg focus:ring-2 focus:outline-none ${errors.email ? 'border-red-400 focus:ring-red-400/30' : 'border-[#E2E8F0] focus:ring-[#68D391]/30'} text-[#4A5568]`}
                      placeholder="Your email address"
                      whileFocus={{ boxShadow: '0 0 8px rgba(104, 211, 145, 0.3)' }}
                    />
                    {errors.email && <p className="mt-1 text-red-400 text-sm">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-[#1A202C] mb-2">Message</label>
                    <motion.textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full p-3 bg-white border rounded-lg focus:ring-2 focus:outline-none ${errors.message ? 'border-red-400 focus:ring-red-400/30' : 'border-[#E2E8F0] focus:ring-[#68D391]/30'} text-[#4A5568]`}
                      placeholder="Your message"
                      whileFocus={{ boxShadow: '0 0 8px rgba(104, 211, 145, 0.3)' }}
                    ></motion.textarea>
                    {errors.message && <p className="mt-1 text-red-400 text-sm">{errors.message}</p>}
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ 
                      scale: isSubmitting ? 1 : 1.05,
                      boxShadow: isSubmitting ? 'none' : '0 10px 25px -5px rgba(43, 108, 176, 0.3)',
                    }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                    className={`w-full bg-gradient-to-r from-[#2B6CB0] to-[#68D391] text-white font-medium py-3 px-8 rounded-lg hover:shadow-lg transition-all ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;