import { useState, useEffect } from "react";

export default function useFetchData(URL) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(URL);
        const movies = await response.json();
        setData(movies.data);
      } catch (err) {
        alert(err);
      }
    }

    fetchMovies();
  }, [URL]);

  return data;
}
