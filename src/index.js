// import React from 'react';
// import './index.css';
// import './style.css';
// import ReactDOM from 'react-dom';
// // import { BrowserRouter } from 'react-router-dom';
// import Main from './Main';

// import reportWebVitals from './reportWebVitals';
// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('root');
// const root = createRoot(container);

// root.render(
//   <React.StrictMode>
//     <Main />
//   </React.StrictMode>);

// reportWebVitals();

//browser router
// ReactDOM.render((
//   <BrowserRouter>
//     <Main />
//   </BrowserRouter>
// ), document.getElementById('root'));

// react dom
// ReactDOM.render(
//   <Main />,
//   document.getElementById("root")
// );

//stack overflow
import React from "react";
import ReactDOM from 'react-dom/client';
import "./index.css";
import "./style.css";
import Main from "./Main";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>

);
reportWebVitals();

