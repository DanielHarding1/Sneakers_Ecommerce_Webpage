import React, {useState} from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Header.css";

const Header = ({performSearch}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchTerm.trim().length > 0) {
      performSearch(searchTerm.trim());
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mt-2">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <ul className="nav-menu">
              <li>
                <Link to="/">Brand Developers</Link>
              </li>
              <li>
                <Link to="/">Shoe Size</Link>
              </li>
              <li>
                <Link to="/">Colour</Link>
              </li>
              <li>
                <Link to="/">Price Range</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleSearch}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
