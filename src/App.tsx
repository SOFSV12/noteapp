import React from 'react';

import { nanoid } from 'nanoid';

import axios from 'axios';
import Header from './Components/Header';
import Search from './Components/Search';
import NotesList from './Components/NoteList';
import LoadingSpinner from './UI/LoadingSpinner';
import useAxios from './hooks/useAxios';

axios.defaults.baseURL = 'https://react-http-4d9f4-default-rtdb.firebaseio.com';

function App() {
  const { notes, error, loading } = useAxios({
    method: 'get',
    url: '/notes.json',
  });

  const [searchText, setSearchText] = React.useState('');
  const [darkMode, setDarkMode] = React.useState<boolean>(false);

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const addNoteHandler = async (text: string) => {
    const date = new Date();
    try {
      const response = await axios.post('/notes.json', {
        text: text,
        id: nanoid(),
        date: date.toLocaleDateString(),
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteNoteHandler = (baseId: string) => {
    try {
      const response = axios.delete(`/notes/${baseId}.json`);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        {loading && <LoadingSpinner />}
        {notes.length === 0 && <h4>No entries found, Add a Note</h4>}
        {error && <h1>Something went wrong</h1>}
        <Header handleToggleDarkMode={handleToggleDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText),
          )}
          onAddNote={addNoteHandler}
          onDeleteNote={deleteNoteHandler}
        />
      </div>
    </div>
  );
}

export default App;
