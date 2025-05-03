import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'design';
}

const Skills: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const skills: Skill[] = [
    // Frontend
    { name: 'React.js', level: 95, category: 'frontend' },
    { name: 'TypeScript', level: 90, category: 'frontend' },
    { name: 'JavaScript', level: 95, category: 'frontend' },
    { name: 'HTML/CSS', level: 90, category: 'frontend' },
    { name: 'Tailwind CSS', level: 85, category: 'frontend' },
    { name: 'Next.js', level: 85, category: 'frontend' },
    
    // Backend
    { name: 'Node.js', level: 85, category: 'backend' },
    { name: 'Express', level: 80, category: 'backend' },
    { name: 'MongoDB', level: 75, category: 'backend' },
    { name: 'PostgreSQL', level: 70, category: 'backend' },
    { name: 'GraphQL', level: 65, category: 'backend' },
    
    // Tools
    { name: 'Git', level: 90, category: 'tools' },
    { name: 'Docker', level: 75, category: 'tools' },
    { name: 'Jest', level: 80, category: 'tools' },
    { name: 'Webpack', level: 70, category: 'tools' },
    
    // Design
    { name: 'Figma', level: 80, category: 'design' },
    { name: 'UI/UX', level: 75, category: 'design' },
    { name: 'Responsive Design', level: 85, category: 'design' },
  ];
  
  const filteredSkills = filter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === filter);
  
  const categories = [
    { id: 'all', label: 'All' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'tools', label: 'Tools' },
    { id: 'design', label: 'Design' },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <SectionTitle>Skills & Technologies</SectionTitle>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category.id
                    ? 'bg-blue-600 dark:bg-blue-500 text-white'
                    : 'bg-white dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {filteredSkills.map((skill, index) => (
              <div key={skill.name} className="bg-white dark:bg-slate-700 rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-medium text-slate-800 dark:text-white">
                    {skill.name}
                  </h3>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full h-2 bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;