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