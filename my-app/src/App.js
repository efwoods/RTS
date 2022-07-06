import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useRef } from 'react';

var history = [];

var searchHistoryObjects = history.map(
  (historicalItem, i) => ({
    id: i,
    title: historicalItem
  })
);

export function History({history}){
  return(
  <section>
    <ul>
      {history.map((historicalItem) => (
        <li key={historicalItem.id}>
          {historicalItem.title}
        </li>
      ))}
    </ul>
  </section>
  );
} 

export function HistoryPage ({searchHistoryObjects}){
  console.log(searchHistoryObjects.length);
  return(
  <div>
    <p>My History</p>
    <History history={searchHistoryObjects}></History>
  </div>
  )
};