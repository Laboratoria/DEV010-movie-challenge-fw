import logo from "../images/logo.png"
import "../styles/siteId.css";


function SiteId({reload}) {
  return <article id="siteIdArticle">
    <img onClick={reload} src={logo} alt="logo vertigo's Hichtcock icon" id="logoSite"/>
    <h1>FALL 4 MOVIES</h1>
  </article>
}

export default SiteId;
