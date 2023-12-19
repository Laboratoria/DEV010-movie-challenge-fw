import ReactPaginate from 'react-paginate';

interface PaginationProps {
    pageCount: number;
    currentPage: number;
    onPageChange: (selectedItem: { selected: number }) => void;
}

const Pagination: React.FC<PaginationProps> = ({ pageCount, currentPage, onPageChange }) => {
    return (
        <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={ Math.max(1, Math.ceil(pageCount / 20))} //Número total de páginas
            marginPagesDisplayed={2} //Cuántas páginas mostrar antes y después de la página actual
            pageRangeDisplayed={5} //Cuántas páginas mostrar en total en la barra de paginación
            onPageChange={onPageChange} //La función que se llama cuando el usuario hace clic en una página. Recibe un objeto con la propiedad selected que indica la página seleccionada
            forcePage={currentPage - 1} //La página que se muestra inicialmente. Se resta 1 porque las páginas comienzan desde 0
            renderOnZeroPageCount={null} //Un valor que determina si se debe renderizar el componente incluso si pageCount es 0. En este caso, null significa que no se renderizará si no hay páginas
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
        />
    );
};

export default Pagination;