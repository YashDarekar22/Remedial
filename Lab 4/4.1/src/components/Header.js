import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1>Task Manager</h1>
      <nav>
        {/* NavLink adds an "active" class to the current page link */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
}

export default Header;