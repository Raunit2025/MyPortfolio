// import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 animate-gradientLoop bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"></div>

      {/* Floating Blobs */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary-200 rounded-full opacity-20 blur-3xl animate-ping"></div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-medium text-white">Hello, I'm</h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            <span className="inline-block">Raunit Raj</span>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto"
          >
            Computer Science & Engineering | Tech Enthusiast
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="pt-8 flex justify-center space-x-4"
          >
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              className="bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              View My Work
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              className="bg-white hover:bg-gray-100 text-primary-700 font-medium px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-200 cursor-pointer"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-white cursor-pointer"
        >
          <ChevronDown size={32} />
        </Link>
      </div>

      <style>{`
        @keyframes gradientLoop {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradientLoop {
          background-size: 400% 400%;
          animation: gradientLoop 10s ease infinite;
        }

        header nav a {
          position: relative;
          padding: 0.5rem 1rem;
          transition: all 0.3s ease;
        }

        header nav a::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: white;
          border-radius: 0.5rem;
          z-index: -1;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        header nav a:hover::before {
          transform: scaleX(1);
        }

        header nav a:hover {
          color: #1D4ED8; /* Tailwind primary-700 */
        }
      `}</style>
    </section>
  );
};

export default Hero;
