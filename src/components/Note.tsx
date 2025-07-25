import React from 'react';
import { Trash2 } from 'lucide-react';

interface NoteProps {
  id: number;
  title: string;
  content: string;
  onDelete: (id: number) => void;
}

const Note: React.FC<NoteProps> = ({ id, title, content, onDelete }) => {
  const colors = [
    'bg-yellow-100 border-yellow-200',
    'bg-green-100 border-green-200',
    'bg-blue-100 border-blue-200',
    'bg-pink-100 border-pink-200',
    'bg-purple-100 border-purple-200',
    'bg-orange-100 border-orange-200',
  ];

  const colorClass = colors[id % colors.length];

  return (
    <div className={`${colorClass} rounded-lg border-2 p-4 transition-all duration-300 hover:shadow-lg hover:scale-105 group`}>
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-gray-800 text-lg leading-tight pr-2">
          {title}
        </h3>
        <button
          onClick={() => onDelete(id)}
          className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 hover:bg-red-50 p-1 rounded transition-all duration-200"
          aria-label="Delete note"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
      {content && (
        <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">
          {content}
        </p>
      )}
    </div>
  );
};

export default Note;