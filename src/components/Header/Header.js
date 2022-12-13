import NavBar from "./NavBar/NavBar";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header({ ...props }) {
  return (
    <header>
      <div className="center-page">
        <h1>
          <span>
            <Link to="/">FakeKedu</Link>
          </span>
        </h1>
        <NavBar {...props} />
      </div>
    </header>
  );
}
