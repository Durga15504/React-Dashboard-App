import Button from "../UI/Button";


function ThemeToggle({ theme, toggleTheme }) {

  return (
    <div>
        <p>Current Theme: {theme}</p>
       
        <Button onClick={toggleTheme}> Switch Theme </Button>
    </div>
  );

}

export default ThemeToggle;