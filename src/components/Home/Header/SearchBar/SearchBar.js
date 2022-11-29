import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div>
      <button>Serach</button>
      <input
        type="search"
        name="serach"
        id="search"
        placeholder="Enter a keyword"
      />
    </div>
  );
}
