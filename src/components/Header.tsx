import React from 'react';
import { BookOpen } from 'lucide-react';

interface HeaderProps {
  noteCount: number;
}

const Header: React.FC<HeaderProps> = ({ noteCount }) => {
  return (
    <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <BookOpen className="h-8 w-8" />
            <h1 className="text-2xl md:text-3xl font-bold">Keeper App</h1>
          </div>
          <div className="text-sm md:text-base opacity-90">
            {noteCount} {noteCount === 1 ? 'note' : 'notes'}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;