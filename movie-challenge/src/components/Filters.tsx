import './Filters.css';

const Filters = ({ onFilterChange }) => {
    const handleFilterChange = (e) => {
        const selectedFilter = e.target.value;
        onFilterChange(selectedFilter);
    };

    return (
        <section className='filters-container'>
            <label htmlFor='filterSelect'>Filter</label>
            <select id='filterSelect' onChange={handleFilterChange}>
                <option value='popular'>Popular</option>
                <option value='top'>Top</option>
            </select>
        </section>
    );
};

export default Filters;