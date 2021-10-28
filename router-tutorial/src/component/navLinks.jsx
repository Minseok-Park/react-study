import { NavLink } from "react-router-dom";

const activeStyle = {
  color: "green",
};

export default function NavLinks() {
  return (
    <ul>
      <li>
        <NavLink to="/" activeStyle={activeStyle} exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile" activeStyle={activeStyle} exact>
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile/1" activeStyle={activeStyle}>
          Profile/1
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          activeStyle={activeStyle}
          isActive={(match, location) => {
            console.log(location);
            return match !== null && location.search === "";
          }}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about?name=mark"
          activeStyle={activeStyle}
          isActive={(match, location) => {
            return match !== null && location.search !== "";
          }}
        >
          About?name=mark
        </NavLink>
      </li>
    </ul>
  );
}
