// import React from 'react';
import { motion } from 'framer-motion';

const achievements = [
  {
    title: 'Letter of appreciation from Wayspire team',
    description:
      'Received letter for outstanding performance in project delivery during my Online Training at Wayspire as Artificial Intelligence Intern',
    image: 'letter.png',
    href: 'letter.png',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-primary-800 mb-2">Achievements</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>

        <motion.div
          className="space-y-6 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievements.map((achieve, index) => (
            <motion.a
              key={index}
              href={achieve.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="block bg-white shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-xl transition duration-300"
            >
              <img
                src={achieve.image}
                alt={achieve.title}
                className="w-full h-60 object-contain mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold text-primary-700 mb-2">{achieve.title}</h3>
              <p className="text-gray-700 text-sm">{achieve.description}</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
