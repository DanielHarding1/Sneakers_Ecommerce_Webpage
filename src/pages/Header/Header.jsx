import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import axios from "axios";

const Header = () => {
  const options = {
    method: "GET",
    url: "https://asos2.p.rapidapi.com/products/v2/list",
    params: {
      store: "US",
      offset: "0",
      categoryId: "12703",
      limit: "6",
      country: "US",
      sort: "freshness",
      currency: "USD",
      sizeSchema: "US",
      lang: "en-US",
      q: "nike shoes",
    },
    headers: {
      "X-RapidAPI-Key": "de2f7235a1msh51b406813c90eb3p167ae7jsnc2746392f895",
      "X-RapidAPI-Host": "asos2.p.rapidapi.com",
    },
  };

  async function dataCollection() {
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  dataCollection();

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
            <form className="d-flex">
              <input
                className="seachbar form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setSearch}
              />
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
