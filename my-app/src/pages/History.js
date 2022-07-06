import { useState } from 'react';

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

export function HistoryPage (){
  const [query, setQuery] = useState("");
    const submit = (e) => {
    e.preventDefault();
    history.push(query);
    searchHistoryObjects = history.map(
      (historicalItem, i) => ({
        id: i,
        title: historicalItem
      })
    );
    console.log(searchHistoryObjects.length);
    setQuery("")
  };
  return(
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
  </div>
  )
};