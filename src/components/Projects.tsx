import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
  category: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'LocalE-Shop – Online E-Shop for Local Retailers',
    description: 'Developed a user-friendly frontend interface for an online e-shop. Used React and Bootstrap to build a responsive, intuitive design.',
    image: 'project1.png',
    tags: ['React', 'Bootstrap', 'HTML', 'CSS'],
    demoLink: 'https://regal-gelato-dc7727.netlify.app/',
    codeLink: 'https://github.com/Raunit2025/E-shop',
    category: 'frontend',
  },
  {
    id: 2,
    title: 'Playen – Random Story Teller',
    description: 'Created a backend system using Python, MySQL and PHP APIs to generate unique stories and store data persistently.',
    image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Python', 'MySQL', 'PHP'],
    demoLink: '#',
    codeLink: 'https://github.com/Raunit2025/Random-story-teller',
    category: 'backend',
  },
  {
    id: 3,
    title: 'Analyzing Weather Data',
    description: 'Analyzed weather trends and visualized insights using Python libraries. Cleaned data and shared insights via Google Colab.',
    image: 'project3.png',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    demoLink: 'https://colab.research.google.com/drive/1OZOU4pSViC9_PRnQ2mF3e3ivP6gM2K7-?usp=sharing',
    codeLink: 'https://github.com/Raunit2025/Weather_Data_Analyzing',
    category: 'ai',
  },
];


const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

    const categories = [
      { id: 'all', name: 'All Projects' },
      { id: 'frontend', name: 'Frontend' },
      { id: 'backend', name: 'Backend' },
      { id: 'ai', name: 'AI/ML' },
    ];
    

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="projects" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-primary-800 mb-2">My Projects</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-8"></div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden group h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary-800 bg-opacity-70 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
                  <a
                    href={project.demoLink}
                    target="https://regal-gelato-dc7727.netlify.app/"
                    rel="noopener noreferrer"
                    className="bg-white text-primary-700 p-2 rounded-full hover:bg-primary-100 transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-primary-700 p-2 rounded-full hover:bg-primary-100 transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium bg-secondary-100 text-secondary-800 px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;