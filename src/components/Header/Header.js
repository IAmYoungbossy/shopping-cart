import NavBar from "./NavBar/NavBar";
import "./Header.css";

export default function Header({...props}) {
  return (
    <header>
      <h1><span>FakeKedu</span></h1>
      <NavBar {...props} />
    </header>
  );
}
