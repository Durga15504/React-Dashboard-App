import Title from "./Title";
import ThemeToggle from "./ThemeToggle";
import Clock from "./Clock";
import Greeting from "./Greeting";

function Navbar({ theme, toggleTheme }) {

  return (
    <div>

      <Title />
      <Greeting />
      <Clock />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

    </div>
  );

}

export default Navbar;