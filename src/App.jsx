import { Header } from '../src/components/Header/Header';
import { CORE_CONCEPTS, EXAMPLES } from './data';
import CoreConcept from '../src/components/CoreConcept/CoreConcept';
import TabButton from './components/Button/Button';
import { useState } from 'react';

function App() {
  const [selectedTopic, setSelectedTopic] = useState('components');
  function handleSelect(selectedBtn) {
    setSelectedTopic(selectedBtn);
  }
  return (
    <div>
      <Header id="core-concepts" />
      <main>
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept key={concept.id} {...concept} />
            ))}
          </ul>
        </section>
        <h2>Time to get started!</h2>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              onSelect={() => handleSelect('components')}
              label="components"
            ></TabButton>
            <TabButton
              onSelect={() => handleSelect('jsx')}
              label="JSX"
            ></TabButton>
            <TabButton
              onSelect={() => handleSelect('props')}
              label="Props"
            ></TabButton>
            <TabButton
              onSelect={() => handleSelect('state')}
              label="State"
            ></TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
