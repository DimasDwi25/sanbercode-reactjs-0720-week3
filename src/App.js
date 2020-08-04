import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TabelDaftarBuah from './Tugas 11/DaftarBuah.js'
import Timer from './Tugas 11/timer'
import Clock from './Tugas 11/clock';


function App() {
  return (
    <div className="App">
      <TabelDaftarBuah />
      <h3 style={{textDecoration:'inline-block'}}>
        <Clock />
        <Timer />
      </h3>
    </div>
  );
}

export default App;
