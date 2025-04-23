// import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Skill {
  name: string;
  level: number;
  color: string;
}

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const frontendSkills: Skill[] = [
    { name: 'React', level: 90, color: 'bg-blue-500' },
    { name: 'JavaScript', level: 85, color: 'bg-yellow-500' },
    { name: 'HTML/CSS', level: 95, color: 'bg-orange-500' },
    { name: 'Tailwind CSS', level: 85, color: 'bg-teal-500' },
  ];

  const backendSkills: Skill[] = [
    { name: 'Node.js', level: 80, color: 'bg-green-600' },
    { name: 'Laravel', level: 75, color: 'bg-gray-700' },
    { name: 'SQL', level: 65, color: 'bg-blue-700' },
    
  ];
  const languageSkills: Skill[] = [
    { name: 'Java', level: 85, color: 'bg-yellow-600' },
    { name: 'C++', level: 70, color: 'bg-green-600' },
    { name: 'Python', level: 75, color: 'bg-gray-700' },
    { name: 'C', level: 65, color: 'bg-blue-700' },
    
  ];
  const SoftSkills: Skill[] = [
    { name: 'Communication Skills', level: 75, color: 'bg-yellow-600' },
    { name: 'Problem Solving Skills', level: 70, color: 'bg-green-600' },
    { name: 'Team Player', level: 75, color: 'bg-blue-700' },
    { name: 'Adaptability', level: 85, color: 'bg-gray-700' },
    
  ];

  const toolsSkills: Skill[] = [
    { name: 'Git', level: 85, color: 'bg-gray-600' },
    { name: 'Docker', level: 65, color: 'bg-blue-600' },
    { name: 'VS Code', level: 90, color: 'bg-purple-600' },
    { name: 'Linux', level: 80, color: 'bg-green-600' },
  ];

  const SkillBar = ({ skill }: { skill: Skill }) => (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 font-medium">{skill.name}</span>
        <span className="text-gray-600">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-2.5 rounded-full ${skill.color}`}
        ></motion.div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-secondary-50">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-primary-800 mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-bold text-primary-700 mb-4">Frontend Development</h3>
            {frontendSkills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-bold text-primary-700 mb-4">Backend Development</h3>
            {backendSkills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-bold text-primary-700 mb-4">Programming Languages</h3>
            {languageSkills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-bold text-primary-700 mb-4">Tools & Technologies</h3>
            {toolsSkills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-bold text-primary-700 mb-4">Soft Skills</h3>
            {SoftSkills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;