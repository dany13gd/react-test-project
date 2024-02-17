import TabButton from '../Button/Button';
import { useState } from 'react';
import { EXAMPLES } from '../../data';

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();
  let tabContent = <p>Please select a topic.</p>;

  function handleSelect(selectedBtn) {
    setSelectedTopic(selectedBtn);
  }
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
  );
}
