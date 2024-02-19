import TabButton from '../Button/Button';
import Section from '../Section/Section';
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
    <Section title="Examples" id="examples">
      <menu>
        <TabButton
          onClick={() => handleSelect('components')}
          label="Components"
          isSelected={selectedTopic === 'components'}
        ></TabButton>
        <TabButton
          onClick={() => handleSelect('jsx')}
          label="JSX"
          isSelected={selectedTopic === 'jsx'}
        ></TabButton>
        <TabButton
          onClick={() => handleSelect('props')}
          label="Props"
          isSelected={selectedTopic === 'props'}
        ></TabButton>
        <TabButton
          onClick={() => handleSelect('state')}
          label="State"
          isSelected={selectedTopic === 'state'}
        ></TabButton>
      </menu>
      {tabContent}
    </Section>
  );
}
