import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useRef } from 'react';

export function Search(){
  return(
  <div>
    <h1>Search</h1>
  </div>
  );
} 

export function History(){
  return (
  <div>
    <h1>History</h1>
  </div>
  );
} 

function GithubUser({name, location}) {
  return(
    <div>
      <h1>{name}</h1>
      <p>{location}</p> 
    </div>
  );
}

function SearchBar() {
  const txtTitle = useRef();
  const hexColor = useRef();

  console.log(txtTitle);

  const submit = (e) => {
    e.preventDefault();
    const title = txtTitle.current.value;
    const color = hexColor.current.value;
    alert(`${title}, ${color}`);
    txtTitle.current.value = "";
    hexColor.current.value = "";
  };
  return (
    <form onSubmit={submit}>
      <input 
      ref={txtTitle}
      type="text" placeholder='color title...' />
      <input ref={hexColor} type="color" />
      <button>ADD</button>
    </form>
  );
}

export function App() {
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
      
      return <h1>Data</h1>
}


const display_data = [
  { name: "Name", elevation: 1087 }

]

function List({data, renderItem, renderEmpty}) {
  return !data.length ? (
    renderEmpty 
    ) : ( 
      <ul>
        {data.map((item) => (
          <li key={item.name}>
            {renderItem(item)}
          </li>
        ))}
      </ul>
    ); 
}


export function DisplayListComponent() {
  return (
    <List
      data={display_data}
      renderEmpty={<p>This list is empty</p>}
      renderItem={(item) => (
        <>
          {item.name} - {item.elevation} ft.
        </>
      )}
    />
  )
}


















