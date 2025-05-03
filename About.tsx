import React from 'react';
import SectionTitle from './SectionTitle';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <SectionTitle>About Me</SectionTitle>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1">
            <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/10 flex items-center justify-center">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-lg">
                <img 
      
                />
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-4 text-slate-700 dark:text-slate-300">
            <p className="text-lg leading-relaxed">
            Hello! My name is Avika Pancholi, and I am an aspiring AI and Machine Learning Engineer currently pursuing my B.Tech in Computer Science and Engineering at SRM Institute of Science and Technology. With a strong foundation in artificial intelligence and machine learning, I am passionate about leveraging technology to solve complex problems and create innovative solutions.
            </p>
            
            <p className="text-lg leading-relaxed">
            In addition to my specialization in AI and ML, I have also developed skills in web development, where I have successfully completed several projects that showcase my ability to integrate front-end and back-end technologies. My hands-on experience includes working with various programming languages and frameworks, allowing me to build dynamic and user-friendly applications.
            </p>
            
            <p className="text-lg leading-relaxed">
            Recently, I had the honor of being the 2nd runner-up in a hackathon, where my team and I developed a project that demonstrated our technical skills and creativity under pressure. This experience not only enhanced my problem-solving abilities but also reinforced my passion for collaborative work and innovation.
            </p>
            
            <div className="pt-6">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;