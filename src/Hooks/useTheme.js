import useLocalStorage from "./useLocalStorage";

function useTheme() {

  const [theme, setTheme] = useLocalStorage("theme", "light");

  function toggleTheme() {
    setTheme(prev => prev === "light" ? "dark" : "light" );
  }

  return { theme, toggleTheme };

}

export default useTheme;