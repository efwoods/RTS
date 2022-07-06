import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useRef } from 'react';

function GithubUser({ name, location }) {
  return (
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


function List({ data_l, renderItem, renderEmpty }) {
  return !data_l.length ? (
    renderEmpty
  ) : (
    <ul>
      {data_l.map((item) => (
        <li key={item.username}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );

}

export function Search() {
  const [query, setQuery] = useState("foo");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(false);
  const [history, setHistory] = useState("");
  const url = 'http://hn.algolia.com/api/v1/search?query='

  // const opts = {
  //   method: "GET",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(query)
  // }

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    let req = url.concat(query);
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
      <pre>{JSON.stringify(data, null, 2)}</pre>

    </div>

  )

};


{/* <List
data_l={data}
renderEmpty={<p>This list is empty...</p>}
renderItem={(item) => (
  <>
    {item.username} - {item.karma}</>
)
} /> */}

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
