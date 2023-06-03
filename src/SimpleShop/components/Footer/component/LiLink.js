import { NavLink } from "react-router-dom";

const LiLink = (item, key) => (
  <li key={`li_${item}`}>
    <NavLink
      to={`/${key}`}
      key={`a_${item}`}
      aria-label={`link ${key}`}
      href={key}
    >
      {item[key]}
    </NavLink>
  </li>
);
export default LiLink;
