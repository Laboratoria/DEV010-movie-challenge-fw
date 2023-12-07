import React from "react";
import "../styles/navigator.css";
import { SearchMovie } from "./search";

function Navigator() {
  return <nav>
    <ul id="navUl">
      <li id="searcher">
        <SearchMovie/>
      </li>
      <li id="genrSelector">
        <select id="genreSelect" name="genre">
          <option value="comedy">Genre</option>
          <option value="comedy">Comedy</option>
          <option value="animation">Animation</option>
          <option value="terror">Terror</option>
        </select>
      </li>
      <li id="orderSelector">
        <select id="orderSelect" name="order">
        <option value="nothing">Order by...</option>
          <option value="A-Z">A-Z</option>
          <option value="Date">Date</option>
        </select>
      </li>
    </ul>
  </nav>
  }

  //TODO Funcionalidades de los selectores y del buscador

  export default Navigator;
  