import { useState, useEffect, useReducer, useRef } from 'react';
import { History } from './History';

var history = [];

var searchHistoryObjects = history.map(
  (historicalItem, i) => ({
    id: i,
    title: historicalItem
  })
);

export function History({history}){
  return(
  <div>
    <ul>
      {history.map((historicalItem) => (
        <li key={historicalItem.id}>
          {historicalItem.title}
        </li>
      ))}
    </ul>
  </div>
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

export function Search() {
  const [query, setQuery] = useState("foo");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(false);
  const url = 'http://hn.algolia.com/api/v1/search?query='

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    let req = url.concat(query);
    history.push(query);
    searchHistoryObjects = history.map(
      (historicalItem, i) => ({
        id: i,
        title: historicalItem
      })
    );
    console.log(searchHistoryObjects.length);
    fetch(
      req
    )
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
    setQuery("")
  };

  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>JSON.stringify(error)</pre>;
  // if (!data) return null;
  return (
    <div>
      <form onSubmit={submit}>
        <input
          value={query}
          onChange={(event) =>
            setQuery(event.target.value)
          }
          type="text"
          placeholder='Enter Search Query'
        />
        <button>Search</button>
      </form>
      <p>History Searches Below</p>
      <History history={searchHistoryObjects}></History>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
};


