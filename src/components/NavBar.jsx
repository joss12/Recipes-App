
import { Link } from 'react-router-dom';

import './NavBar.css'
import SearchBar from './SearchBar/SearchBar';
const NavBar = () => {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
            <h1>EGS Recipe-App</h1>
        </Link>
        <SearchBar />
        <Link to="/create">
            <h1>Create a Recipe</h1>
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;
