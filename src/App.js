import React, { Component } from 'react';
import Routes from './Tugas15/routes'
import logo from './logo.svg';
import './App.css';
import ListDataBuah from './Tugas13/DaftarBuah'
import Timer from './Tugas13/timer'
import SimpleHooks from './Tugas14/hooks'
import { BrowserRouter as Router } from "react-router-dom";
import Lists from './Tugas13/list'



function App() {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
      {/*<TabelDaftarBuah />
      <Timer />*/}
      {/*<ListDataBuah />*/}

    </div>
  );
}

export default App;
