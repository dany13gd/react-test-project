import { Header } from '../src/components/Header/Header';
import Examples from './components/Examples/Examples';
import CoreConcepts from './components/CoreConcept/CoreConcepts';

function App() {
  console.count('App component running');

  return (
    <>
      <Header id="core-concepts" />
      <main>
        <CoreConcepts />
        <h2>Time to get started!</h2>
        <Examples />
      </main>
    </>
  );
}

export default App;
