import './App.css';
import { PelisList } from './component/pelislist/pelislist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Haciendo pelix con redux y thunks</h1>
      </header>

      <main>
        <PelisList />
      </main>
    </div>
  );
}

export default App;
