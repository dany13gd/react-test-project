export default function TabButton({ label, onSelect, isSelected }) {
  console.count('Tab Button component running');

  return (
    <li>
      <button className={isSelected ? 'active' : ''} onClick={onSelect}>
        {label}
      </button>
    </li>
  );
}
