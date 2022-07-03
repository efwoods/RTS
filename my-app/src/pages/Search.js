import { useState, useEffect, useReducer, useRef } from 'react';

export function Search(){
    return <SearchBar />;
  } 



function SearchBar() {
  const txtTitle = useRef();

  console.log(txtTitle);
  const submit = (e) => {
    e.preventDefault();
    const title = txtTitle.current.value;
    alert(`${title}`);
    txtTitle.current.value = "";
  };
  return (
    <form onSubmit={submit}>
      <input 
      ref={txtTitle}
      type="text" placeholder='search here...' />
      <button>Search</button>
    </form>
  );
}

// History

export function History(){
    return (
    <div>
      <h1>History</h1>
    </div>
    );
  } 