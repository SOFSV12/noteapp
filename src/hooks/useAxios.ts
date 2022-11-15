import React from "react";
import axios from "axios";
import { userNote } from "../models/models";

axios.defaults.baseURL = "https://react-http-4d9f4-default-rtdb.firebaseio.com";

interface axiosParams {
  method: string;
  url: string;
  data?: object;
}

const useAxios = ({ method, url, data }: axiosParams) => {
  const [notes, setNotes] = React.useState<userNote[]>([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  const fetchNotes = React.useCallback(async () => {
    await axios({ method, url, data })
      .then((res) => {
        console.log(res.data);
        const arr = [];

        for (const noteProp in res.data) {
          arr.push({
            baseId: noteProp,
            id: res.data[noteProp].id,
            text: res.data[noteProp].text,
            date: res.data[noteProp].date,
          });
        }

        setNotes(arr);
        console.log(res);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  React.useEffect(() => {
    fetchNotes();
  }, [fetchNotes, notes, url]);

  return { notes, error, loading };
};

export default useAxios;
