import logo from './logo.svg';
import './App.css';

function App() {
   const ty=45;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <form>
          <input id="firstName" type="text" />
          <label>First Name</label>
          </form>
    </div>
  );
}

export default App;
