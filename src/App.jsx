import Dashboard from "./components/Dashboard/Dashboard";
import useTheme from "./Hooks/useTheme";
import './App.css'
import Navbar from "./components/Navbar/Navbar";

function App() {
  const {theme, toggleTheme} = useTheme();
  return (
    <div className={theme}>

      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Dashboard />

    </div>
  );
}

export default App;