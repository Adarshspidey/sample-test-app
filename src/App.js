import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import MovieList from "./Screen/MovieList";
import MovieDescription from "./Screen/MovieDescription";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [click, setClick] = useState();
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=all`)
      .then((response) => response.json())
      .then((record) => setData(record))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout
            data={data}
            popup={popup}
            setPopup={setPopup}
            click={click}
          />
        }
      >
        <Route index element={<MovieList setClick={setClick} data={data} />} />
        <Route
          path="movie"
          element={
            <MovieDescription click={click} data={data} setPopup={setPopup} />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
