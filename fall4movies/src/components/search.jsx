import "../styles/navigator.css";
import { FaSearch } from "react-icons/fa";

export function SearchMovie({searchText, setSearchText}){

  const handleSubmit = (e) =>{
    e.preventDefault();
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