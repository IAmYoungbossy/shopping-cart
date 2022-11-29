import NavBar from "./NavBar/NavBar";
import SearchBar from "./SearchBar/SearchBar";

export default function Header() {
  return (
    <header>
      <h1>FakeStore</h1>
      <SearchBar />
      <NavBar />
    </header>
  );
}
