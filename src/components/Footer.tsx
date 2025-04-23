import React from 'react';
import { Link } from 'react-scroll';
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com/Raunit2025', label: 'GitHub' },
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/raunitraj/', label: 'LinkedIn' },
    { icon: <Instagram size={20} />, url: 'https://www.instagram.com/raunit.singh_07/', label: 'Instagram' },
    { icon: <Mail size={20} />, url: 'mailto: raunitraj2336@gmail.com', label: 'Email' },
  ];

  const footerLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <footer className="bg-primary-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Raunit Raj</h3>
            <p className="text-primary-100 mb-4">
              Full-Stack Developer specializing in creating beautiful, functional, and user-friendly applications.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-200 hover:text-white transition-colors duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-primary-200 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <p className="text-primary-200 mb-2">Phagwara, Punjab, India</p>
            <p className="text-primary-200 mb-2">+91 8252812343</p>
            <p className="text-primary-200 mb-2">raunitraj2336@gmail.com</p>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-8 pt-8 text-center">
          <p className="text-primary-300">
            © {currentYear} Raunit Raj. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;