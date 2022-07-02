import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

function GithubUser({name, location}) {
  return(
    <div>
      <h1>{name}</h1>
      <p>{location}</p> 
    </div>
  );
}

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      `https://api.github.com/users/moonhighway`
    )
      .then((response) => response.json())
      .then(setData);
  }, []);
  if (data)
    return <GithubUser 
      name={data.name}
      location={data.location} />;
      //<pre>{JSON.stringify(data, null, 2)}</pre>
    
    return <h1>Data</h1>

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
