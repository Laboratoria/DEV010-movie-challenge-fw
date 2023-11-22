//Importaciones de componentes

import SiteId from './components/siteID';
import Navigator from './components/navigator';
import Detail from './components/detail';
import Copyrights from './components/copyrights';
import Pagination from './components/pagination';
import MoviesGrid from './components/moviesGrid';


function App(){
  return (
    <><header>
      <SiteId />
      <Navigator />
    </header>
    <main>
      <MoviesGrid/>
      <Pagination/>
    </main>
    <footer>
      <Copyrights />
    </footer></>
    );
};

export default App;