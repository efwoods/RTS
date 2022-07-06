import { useState } from 'react';

export function Search() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(false);
  const url = 'http://hn.algolia.com/api/v1/search?query='

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
  if (!data) return <div>
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
  </div>;
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


