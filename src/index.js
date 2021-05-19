import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import { FormHook } from './FormHook';
import { EjemploUno } from './EjemploUno';
// import { EjemploMui } from './EjemploMui';

ReactDOM.render(
  <React.StrictMode>
    {/* <FormHook /> */}
    <EjemploUno />
    {/* <EjemploMui /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
