import React from "react";

// Importacion de componentes
import Detail from "../components/detail"
import SiteId from "../components/siteID";
import Navigator from "../components/navigator";
import Copyrights from "../components/copyrights";

function MovieDetail(){
    const reload = () => {
        window.location.href = '/';
      }
      
      const [searchText, setSearchText] = React.useState("");
      console.log(React.useState)

    return(
        <>
        <header>
      <SiteId 
      reload={reload}/>
      <Navigator searchText={searchText} setSearchText = {setSearchText}/>
    </header>
     <main>
      <Detail/>
     </main>
    <footer>
      <Copyrights />
    </footer></>
    );
}

export default MovieDetail;