import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

interface NoteFormProps {
  onAddNote: (title: string, content: string) => void;
  onShowAlert: (message: string) => void;
}

const NoteForm: React.FC<NoteFormProps> = ({ onAddNote, onShowAlert }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() && !content.trim()) {
      onShowAlert('Please add a title or content to create a note');
      return;
    }

    if (!title.trim()) {
      onShowAlert('Please add a title for your note');
      return;
    }

    onAddNote(title.trim(), content.trim());
    setTitle('');
    setContent('');
    setIsExpanded(false);
  };

  const handleCancel = () => {
    setTitle('');
    setContent('');
    setIsExpanded(false);
  };

  return (
    <div className="max-w-lg mx-auto mb-8">
      <form onSubmit={handleSubmit}>
        <div className={`bg-white rounded-lg shadow-md border transition-all duration-300 ${
          isExpanded ? 'shadow-lg border-blue-200' : 'shadow-sm border-gray-200'
        }`}>
          {isExpanded && (
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="w-full px-4 py-3 text-lg font-medium border-none outline-none rounded-t-lg"
              autoFocus
            />
          )}
          
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onClick={() => setIsExpanded(true)}
            placeholder={isExpanded ? "Take a note..." : "Take a note..."}
            className={`w-full px-4 py-3 border-none outline-none resize-none transition-all duration-200 ${
              isExpanded ? 'min-h-[120px] rounded-b-lg' : 'h-12 rounded-lg'
            }`}
          />
          
          {isExpanded && (
            <div className="flex justify-between items-center px-4 py-3 bg-gray-50 rounded-b-lg">
              <button
                type="button"
                onClick={handleCancel}
                className="flex items-center space-x-1 px-3 py-1 text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded transition-colors duration-200"
              >
                <X className="h-4 w-4" />
                <span>Cancel</span>
              </button>
              <button
                type="submit"
                className="flex items-center space-x-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <Plus className="h-4 w-4" />
                <span>Add Note</span>
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default NoteForm;