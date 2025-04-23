// import React from 'react';
import { motion } from 'framer-motion';

const certificates = [
  {
    title: 'Data Structure and Algorithms',
    issuer: 'GeeksforGeeks',
    image: 'GFGcertificate.png',
    link: 'GFGcertificate.png',
  },
  {
    title: 'Machine Learning',
    issuer: 'Wayspire',
    image: 'MLcertificate.png',
    link: 'MLcertificate.png',
  },
  {
    title: 'Generative AI',
    issuer: 'Google Cloud (Coursera)',
    image: 'GoogleCertificate.png',
    link: 'GoogleCertificate.png',
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-primary-800 mb-2">Certificates</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <motion.a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.1, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="block bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition duration-300 overflow-hidden"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-primary-700 mb-1">{cert.title}</h3>
                <p className="text-gray-600 text-sm">Issued by: {cert.issuer}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
