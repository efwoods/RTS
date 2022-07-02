import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
       <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
    </div>
  );
}

export function History () {
  return(
    <div>
      <h1>Our History</h1>
    </div>
  )
}

export function About() {
  return(
    <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      <h1>About</h1>
      <Outlet />
    </div>
  );
}

export function Contact() {
  return(
    <div>
      <h1>Contact Us</h1>
    </div>
  );
}


export function App() {
  return <Home />;
}
