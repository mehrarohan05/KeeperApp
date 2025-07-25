import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import Alert from './components/Alert';

interface NoteData {
  id: number;
  title: string;
  content: string;
}

const App: React.FC = () => {
  const [notes, setNotes] = useState<NoteData[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const addNote = (title: string, content: string) => {
    const newNote: NoteData = {
      id: Date.now(),
      title,
      content,
    };
    setNotes(prevNotes => [newNote, ...prevNotes]);
  };

  const deleteNote = (id: number) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  };

  const showAlertMessage = (message: string) => {
    setAlertMessage(message);
    setShowAlert(true);
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  const filteredNotes = useMemo(() => {
    if (!searchTerm.trim()) return notes;
    
    return notes.filter(note =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [notes, searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header noteCount={notes.length} />
      
      <main className="container mx-auto px-4 py-8">
        <SearchBar 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
        
        <NoteForm 
          onAddNote={addNote}
          onShowAlert={showAlertMessage}
        />
        
        <NoteList 
          notes={filteredNotes}
          onDeleteNote={deleteNote}
        />
      </main>

      <Alert
        message={alertMessage}
        onClose={closeAlert}
        isVisible={showAlert}
      />
    </div>
  );
};

export default App;