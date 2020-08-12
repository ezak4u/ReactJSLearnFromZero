import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App.js';

//ReactDOM.render(<App />, document.getElementById('app'));

const name = 'Esakkimuthu';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
    element,
    document.getElementById('root')
  );