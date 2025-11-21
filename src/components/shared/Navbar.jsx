import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex gap-8 font-semibold">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/mentee">Mentee</NavLink>
        </li>
        <li>
          <NavLink to="/mentor">Mentor</NavLink>
        </li>
        <li>
          <NavLink to="/feedback">Feedback</NavLink>
        </li>
      </ul>
    </nav>
  );
}
