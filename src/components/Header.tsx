import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const Header = ({ showProfileInHeader }: { showProfileInHeader: boolean }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Education', to: 'education' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Certificates', to: 'certificates'},
    { name: 'Achievements', to: 'achievements' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Link to="hero" smooth offset={-70} duration={500} className="cursor-pointer">
            <h1
              className={`text-2xl font-bold transition-all duration-300 ${
                scrolled ? 'text-primary-800' : 'text-primary-700'
              }`}
            >
              Raunit Raj
            </h1>
          </Link>

          {showProfileInHeader && (
            <motion.img
              layoutId="profile-picture"
              src={profileImg}
              alt="Raunit Raj"
              className="w-10 h-10 rounded-full border-2 border-primary-500"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
            />
          )}
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.to}
              smooth
              offset={-70}
              duration={500}
              className="cursor-pointer font-medium text-gray-800 hover:text-primary-600"
              activeClass="text-primary-600"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full py-4 px-6 flex flex-col space-y-4">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.to}
              smooth
              offset={-70}
              duration={500}
              className="text-gray-800 font-medium py-2 hover:text-primary-600"
              activeClass="text-primary-600"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
