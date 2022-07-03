import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App, DisplayListComponent} from './App';
import {History} from './pages/History'
import {Search} from './pages/Search'
import {BrowserRouter,Routes,Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<DisplayListComponent />} />
      <Route path="/search" element={<Search />} />
      <Route path="/history" element={<History />} /> 
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
