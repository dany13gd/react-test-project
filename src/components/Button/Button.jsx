export default function TabButton({ label, isSelected, ...props }) {
  console.count('Tab Button component running');

  return (
    <li>
      <button className={isSelected ? 'active' : ''} {...props}>
        {label}
      </button>
    </li>
  );
}
