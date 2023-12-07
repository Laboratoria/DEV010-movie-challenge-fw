import { useState } from "react";
import "../styles/navigator.css";
import { FaSearch } from "react-icons/fa";
//import { useNavigate } from "react-router-dom";


export function SearchMovie({onSearchSubmit}){
  const [searchText, setSearchText] = useState('');
  // const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault();
    const path = `/?search=${searchText}`;
     console.log(path); //Ahora como saco esto de aqui
     // navigate(path);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        placeholder="Search" 
        type="text" 
        value={searchText} 
        onChange= { (e) => setSearchText(e.target.value)}>
      </input>
      <button 
        className="searchButton" 
        type="submit">
        <FaSearch size={10} />
      </button> 
    </form> 
  );
}