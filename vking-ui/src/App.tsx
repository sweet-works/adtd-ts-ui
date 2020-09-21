import React from 'react';
// import logo from './logo.svg';
import './styles/index.scss';

function App() {
  let a = '123';
  if (a === '123') {
    console.log(123);
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>hello world</h1>
        <h2>hello world</h2>
        <h3>hello world</h3>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
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
  );
}

export default App;
