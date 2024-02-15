import { Header } from '../src/components/Header/Header';
import { CORE_CONCEPTS, EXAMPLES } from './data';
import CoreConcept from '../src/components/CoreConcept/CoreConcept';
import TabButton from './components/Button/Button';
import { useState } from 'react';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedBtn) {
    setSelectedTopic(selectedBtn);
  }
  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <div>
      <Header id="core-concepts" />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept key={concept.title} {...concept} />
            ))}
          </ul>
        </section>
        <h2>Time to get started!</h2>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              onSelect={() => handleSelect('components')}
              label="Components"
              isSelected={selectedTopic === 'components'}
            ></TabButton>
            <TabButton
              onSelect={() => handleSelect('jsx')}
              label="JSX"
              isSelected={selectedTopic === 'jsx'}
            ></TabButton>
            <TabButton
              onSelect={() => handleSelect('props')}
              label="Props"
              isSelected={selectedTopic === 'props'}
            ></TabButton>
            <TabButton
              onSelect={() => handleSelect('state')}
              label="State"
              isSelected={selectedTopic === 'state'}
            ></TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
