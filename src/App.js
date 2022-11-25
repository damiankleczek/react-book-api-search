import './App.css';
import searchIcon from './search.svg';

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="title">
          <h1>Book API Search App</h1>
        </div>
        <div className="search">
          <input type="text" placeholder="Search a book..." />
          <img src={searchIcon} alt="search icon" />
        </div>
      </div>
    </div>
  );
}

export default App;
