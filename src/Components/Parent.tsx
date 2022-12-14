import React, { useEffect } from "react";
import axios from "axios";
import { nanoid } from "nanoid";
import useAxios from "../hooks/useAxios";
import Header from "./Header";
import Search from "./Search";
import NotesList from "./NoteList";
import LoadingSpinner from "../UI/LoadingSpinner";
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = "https://react-http-4d9f4-default-rtdb.firebaseio.com";

const Parent = () => {
  let navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/notes");
    }

    if (!authToken) {
      navigate("/");
    }
  }, []);

  const { notes, error, loading } = useAxios({
    method: "get",
    url: "/notes.json",
  });

  const [searchText, setSearchText] = React.useState("");
  const [darkMode, setDarkMode] = React.useState<boolean>(false);

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const addNoteHandler = async (text: string) => {
    const date = new Date();
    try {
      const response = await axios.post("/notes.json", {
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
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        {loading && <LoadingSpinner />}
        {notes.length === 0 && <h4>No entries found, Add a Note</h4>}
        {error && (
          <h1 className={`${darkMode && "info"}`}>Something went wrong</h1>
        )}
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
};

export default Parent;
