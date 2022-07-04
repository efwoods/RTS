import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useRef } from 'react';

function GithubUser({name, location}) {
  return(
    <div>
      <h1>{name}</h1>
      <p>{location}</p> 
    </div>
  );
}

// export function App() {
//     const [data, setData] = useState(null);
//     const url = 'http://hn.algolia.com/api/v1/search?query=';
//     useEffect(() => {
//       fetch(
//         `https://api.github.com/users/moonhighway`
//       )
//         .then((response) => response.json())
//         .then(setData);
//     }, []);

//     if (data)
//       return <GithubUser 
//         name={data.name}
//         location={data.location} />;

//       return <h1>Data</h1>
// }




// Search
// export function Search() {
//   return (
//     <div>
//       <SearchBar />
//       <SearchResult />
//     </div>
//   );
// }

export function Search() {
  const txtTitle = useRef();
  const [data, setData] = useState(null);
  const url = 'http://hn.algolia.com/api/v1/search?query='


  console.log(txtTitle);
  const submit = (e) => {
    e.preventDefault();
    fetch(
      `https://api.github.com/users/moonhighway`
    )
      .then((response) => response.json())
      .then(setData);
    const title = txtTitle.current.value;
    alert(`${title}`);
    txtTitle.current.value = "";

  };
  if(data)
    return (
      <div>
      <form onSubmit={submit}>
        <input
          ref={txtTitle}
          type="text" placeholder='search here...' />
        <button>Search</button>
      </form>
      
      <GithubUser 
        name={data.name}
        location={data.location}/>
      </div>
    );
  else
      return (
        <form onSubmit={submit}>
        <input
          ref={txtTitle}
          type="text" placeholder='search here...' />
        <button>Search</button>
      </form>
      );
  }

// const display_data = [
//   { name: "Name", elevation: 1087 }

// ]

// function List({data, renderItem, renderEmpty}) {
//   return !data.length ? (
//     renderEmpty 
//     ) : ( 
//       <ul>
//         {data.map((item) => (
//           <li key={item.name}>
//             {renderItem(item)}
//           </li>
//         ))}
//       </ul>
//     ); 
// }


// export function DisplayListComponent() {
//   return (
//     <List
//       data={display_data}
//       renderEmpty={<p>This list is empty</p>}
//       renderItem={(item) => (
//         <>
//           {item.name} - {item.elevation} ft.
//         </>
//       )}
//     />
//   )
// }


// export function SearchResult() {
//   const txtTitle = useRef();
//   const [data, setData] = useState(null);
//   const url = 'http://hn.algolia.com/api/v1/search?query=';



//   console.log(txtTitle);
//   if (data) {
//     return <GithubUser
//       name={data.name}
//       location={data.location} />;
//   } else {
//     return <GithubUser
//     name={"no data"}
//     location={"data.location"} />;
//   }
// }




// History 

// export function History(){
//   return (
//   <div>
//     <h1>History</h1>
//   </div>
//   );
// } 















