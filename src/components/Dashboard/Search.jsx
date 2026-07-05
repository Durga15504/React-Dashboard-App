
import { useState, useEffect } from "react";
import useDebounce from "../../Hooks/useDebounce";
import Input from "../UI/Input";

function Search({ onSearch }) {

  const [username, setUsername] = useState("");
  const debouncedUsername = useDebounce(username, 1000);

  useEffect(() => {
    onSearch(debouncedUsername);
  }, [debouncedUsername, onSearch]);

  return (
    <div>
      <h2>Search GitHub User</h2>
      <Input placeholder="GitHub Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
      <p>Typing: {username}</p>
      <p>Debounced: {debouncedUsername}</p>
    </div>
  );
}

export default Search;