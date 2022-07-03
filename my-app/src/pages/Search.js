import { useState, useEffect, useRef } from 'react';

export function Search(){
    return(
    <div>
      <h1>Search</h1>
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