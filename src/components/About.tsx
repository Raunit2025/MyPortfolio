import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import profileImg from '../assets/profile.jpg';
import { Download } from 'lucide-react';

const About = ({
  showProfileInHeader,
  setShowProfileInHeader,
}: {
  showProfileInHeader: boolean;
  setShowProfileInHeader: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
  });

  // Control when to show profile in header
  useEffect(() => {
    setShowProfileInHeader(!inView);
  }, [inView, setShowProfileInHeader]);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-primary-800 mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {!showProfileInHeader && (
            <motion.div
              layoutId="profile-picture"
              className="md:w-1/3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="overflow-hidden rounded-full shadow-xl bg-gradient-to-br from-primary-200 to-primary-50 p-3">
                <img
                  src={profileImg}
                  alt="Raunit Raj"
                  className="w-48 h-48 object-cover rounded-full mx-auto"
                />
              </div>
            </motion.div>
          )}

          <motion.div
            className="md:w-2/3 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-primary-700">Raunit Raj</h3>
            <p className="text-gray-700 leading-relaxed">
            Currently pursuing a Bachelor of Technolgy in Computer Science and Engineering at Lovely Professional University, I am a dedicated developer with a strong expertise in full-stack development, particularly using technologies such as React, Tailwind, and Node.js. Passionate about creating scalable, user-centric applications, my work reflects a commitment to continuous learning and delivering innovative solutions. I have also developed a solid foundation in Artificial Intelligence and Machine Learning, with hands-on experience in data analysis and model deployment gained through online training internships.
            </p>
            
            <div className="pt-4">
              <a
                href="/general_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Download size={18} />
                Download General CV
              </a>
            </div>
            <div className="pt-4">
              <a
                href="/specialized_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Download size={18} />
                Download Specialized CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
