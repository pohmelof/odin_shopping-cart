import "../styles/filters.css"

const Filters = (props) => {
    const categories = ['camera', 'lens'];
    const brands = ['Sony', 'Canon', 'Nikon'];

    const capitalize = (str) => {
        return str.slice(0, 1).toUpperCase() + str.slice(1);
    }
    return(
        <div className="filter-container">
            <div className="filter filter_category">
                <h4>Filter by category:</h4>
                <ul>
                    {categories.map(item => 
                        <li
                            onClick={() => props.handleCategory(item)}
                            key={item + categories.indexOf(item)}
                            className={item === props.filterCategory ?'selected': undefined}
                        >
                            {capitalize(item)}
                        </li>)}
                </ul>
            </div>
            <div className="filter filter_brand">
                <h4>Filter by brand:</h4>
                <ul>
                {brands.map(item => 
                        <li 
                            onClick={() => props.handleBrand(item)}
                            key={item + brands.indexOf(item)}
                            className={item === props.filterBrand ? 'selected' : undefined}
                        >
                            {item}
                        </li>)}
                </ul>
            </div>
        </div>
    )
}

export default Filters;