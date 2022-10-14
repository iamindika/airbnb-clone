import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CardList from './components/CardList';
import data from './api/data';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CardList data={data} />
    </div>
  )
}

export default App;
