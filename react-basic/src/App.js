import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let nombre="Felipe";
  let auth=true;
  let estaciones=["Primavera", "Verano", "Otoño", "Invierno"];
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label htmlFor="nombre">nombre</label>
        <h1>{nombre}</h1>
        <input type='text' id='nombre'></input>
        <p>{auth ? "El usuario esta logeado":"El usuario no esta logueado"} </p>
        <p>{2+1}</p>
        <ul>
          {estaciones.map((el, index)=>(

            <li key={index}>{el}</li>
          ))}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    <div></div>
  </>
  );
}

export default App;
