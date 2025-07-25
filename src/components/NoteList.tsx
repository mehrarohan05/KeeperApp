import React from 'react';
import Note from './Note';
import { FileText } from 'lucide-react';

interface NoteData {
  id: number;
  title: string;
  content: string;
}

interface NoteListProps {
  notes: NoteData[];
  onDeleteNote: (id: number) => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, onDeleteNote }) => {
  if (notes.length === 0) {
    return (
      <div className="text-center py-16">
        <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-gray-500 mb-2">No notes yet</h2>
        <p className="text-gray-400">Create your first note to get started</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          onDelete={onDeleteNote}
        />
      ))}
    </div>
  );
};

export default NoteList;