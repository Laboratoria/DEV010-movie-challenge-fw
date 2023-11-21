import React from "react";
import "../styles/navigator.css";

function Navigator() {
  return <nav>
    <ul>
      <li id="searcher">
        <input placeholder="Search">
        </input>
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