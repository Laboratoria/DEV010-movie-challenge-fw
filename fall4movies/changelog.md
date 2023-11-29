## <1.2> - <6-12-2023>

### Sprint learnings


### Added


### Changed

* Se cambió el nombre de la carpeta Others, por "functions", y se actualizó su ruta en todos los componentes que lo requerían
* Se cambió el nombre de la función year, por getYear y se actualizó en todos los componentes que la requerían

### Fixed

* Se corrigió el link de la grilla de peliculas para que te envie al detalle, solo si presionas la foto de la peli, de modo que no se deforme la card

### Removed

* Se eliminaron los archivos json de prueba


## <1.1> - <29-11-2023>

### Sprint learnings

* Uso de react router DOM
* Instalación de Api TMDB
* Peticiones http a la API

### Added
* Se instaló el react router dom. 
* Se agregó el ruteo al main.
* Se creó un nuevo complemento, de página de error de ruteo
* Se conectó la API a la grilla de películas
* Se hicieron los espacios para poder conectar la API a la vista de detalle
* Se hizo una función para separar el año de la fecha proporcionada por la API y asi mostrar solo el año en pantalla
* Se hizo una función para mostrar un número determinado de estrellas por puntuación de cada película
* Se hizo una función que extrae los géneros de cada pelicula del objeto que lo contiene, en un nuevo array, para mostrar cada género separado por comas. 
* Se realizó una función reutilizable para las peticiones http
* Se conectó la vista details a la API


### Changed

* Se cambio la dependencia del json de prueba, para empezar a usar la API en la vista de la grilla de películas

### Fixed

* Se corrigieron cosas pequeñas de estructura de archivos. 


## <1.0> - <22-11-2023>

### Sprint learnings

* En este sprint se hizo todo el trabajo creativo:
    - Se definió el nombre de la app: Fall 4 Movies
    - Se definió el estilo visual, con su logo y paleta de colores
    - Se hicieron los diseños de la interfaz.

* Básicos de REACT:
    - Como crear componentes. 
    - Como renderizar en el website esos componentes.
    - Organización del trabajo
    - Mucho de elementos jsx. 
    - Como insertar promps. 

### Added

* Se activó el archivo index.js que renderizará el site. 

* Se creó el archivo App.jsx donde se organizan los componentes del site.

* Se crearon los componentes a nivel visual (archivos js/jsx y css). Sin funcionalidades aún.

    - Copyright: componente del footer de la página.
    - Details: Detalle de la película seleccionada.
    - MoviesGrid: Grilla de 5 columnas, que organiza las tarjetas en la vista principal.
    - Navigator: contenedor de los inputs y selectores para búsqueda, filtrado y ordenado de la data. que se incorpora al header de la página. 
    - Pagination: contenedor de botones de paginación.
    - SiteId: contenedor del logo y titulo del site.

* Se agregaron otros detalles gráficos como nombre e ícono de la página en la pestaña del navegador. 

* Se agregó un archivo json, con películas para ayudar en el proceso de desarrollo. 


### Changed

* Al crearse el proyecto usando el comando "create react App¨ se tuvo que eliminar una serie de documentos y carpetas que no eran necesarias para este proyecto.  

* Se comenzó la documentación del README, por lo que el contenido anterior fue reemplazado. 

### Fixed

Todavía ninguno. 

### Removed

Todavía ninguna. 