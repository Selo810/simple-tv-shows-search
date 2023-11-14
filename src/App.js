import React, { useState, useEffect, useCallback } from "react";

import './App.css';
import { AppContext } from "./lib/contextLib";
import Routes from "./Routes";
import {
  getTvShows
} from "./services/tvshows";

function App() {
  const [tvShows, setTvShows] = useState([]);
  const [actions] = useState({

    onUpdateTvShows: (data) => {
      setTvShows(data);
    }

  });

  // useEffect(() => {
  //   async function  fetchData() {
     
  //     const response =  await getTvShows('boys');
  //     setTvShows(response);

  //   }
  //   fetchData();
  // }, []); 

  return (
    <div className="App">
     

      <AppContext.Provider
        value={{
          tvShows,
          actions
        }}
      >
        <Routes />
      </AppContext.Provider>

    </div>
  );
}

export default App;
