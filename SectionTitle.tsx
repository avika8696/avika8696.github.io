import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white relative inline-block">
        {children}
        <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
      </h2>
    </div>
  );
};

export default SectionTitle;