import './App.css';
import Searchbar from './components/Searchbar';
import Title from './components/Title';

function App() {
  return (
    <div className="app">
      <div className="container">
        <Title />
        <Searchbar />
      </div>
    </div>
  );
}

export default App;
