
  const Mail = (item, key) => (
    <li key={`li_${item}`}>
      <a key={`a_${key}`} aria-label={`link ${key}`} href={`mailto:${key}`}>
        {item[key]}
      </a>
    </li>
);
  export default Mail