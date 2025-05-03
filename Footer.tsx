import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                Avika Pancholi
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4 max-w-xs">
                Building exceptional digital experiences with a focus on performance,
                accessibility, and beautiful design.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/avika8696?tab=repositories" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/avika-pancholi-624138256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-slate-800 dark:text-white mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-slate-800 dark:text-white mb-4">
                Contact Info
              </h3>
              <address className="not-italic space-y-2 text-slate-600 dark:text-slate-400">
                <p>Chennai,TamilNadu</p>
                <p>
                  <a href="ap8583@srmist.edu.in" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  ap8583@srmist.edu.in
                  </a>
                </p>
                <p>
                  <a href="tel:+919509968455" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  +919509968455
                  </a>
                </p>
              </address>
            </div>
          </div>
          
          <div className="border-t border-slate-200 dark:border-slate-800 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-slate-600 dark:text-slate-400 mb-4 sm:mb-0">
              &copy; {currentYear} Avika Pancholi. All rights reserved.
            </p>
            <p className="flex items-center text-slate-600 dark:text-slate-400">
              Built with 
              <Heart size={16} className="text-red-500 mx-1 fill-current" />
              using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;