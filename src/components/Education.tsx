// import React from 'react';
import universityLogo from '../assets/University.jpg'; // Replace with your actual image path

const Education = () => {
  return (
    <section id="education" className="py-20 bg-secondary-50">
      <div className="container mx-auto px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-primary-800 text-center mb-6">Education</h2>
          <div className="flex flex-col md:flex-row justify-start items-center gap-8">
            {/* University Logo */}
            <img
              src={universityLogo}
              alt="Lovely Professional University"
              className="w-48 h-48 md:w-64 md:h-64 object-contain" // Adjusted size
            />
            {/* Education Info */}
            <div className="text-left max-w-xl">
              <h3 className="text-2xl font-semibold text-primary-700">Lovely Professional University</h3>
              <p className="text-gray-700 mt-2">
                Bachelor of Technolgy in Computer Science and Engineering<br />
                2022 - 2026
              </p>
              <a
                href="https://www.lpu.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-primary-600 hover:underline font-medium"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
