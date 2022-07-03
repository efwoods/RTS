import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useRef } from 'react';



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


















