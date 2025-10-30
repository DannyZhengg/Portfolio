import './Navbar.css';
import { Sun, Moon } from 'lucide-react';

function Navbar({ toggleTheme, theme }) {
  return (
    <nav className="navbar">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>

      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </nav>
  );
}

export default Navbar;
