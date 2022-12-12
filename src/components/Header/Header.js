import NavBar from "./NavBar/NavBar";
import "./Header.css";

export default function Header({ ...props }) {
  return (
    <header>
      <div className="center-page">
        <h1>
          <span>FakeKedu</span>
        </h1>
        <NavBar {...props} />
      </div>
    </header>
  );
}
