import products from "../data/products";
import CardContainer from "../components/CardContainer";
import Filters from "../components/Filters";
import { useState } from "react";

const Products = (props) => {
const [filterCategory, setFilterCategory] = useState(null);
const [filterBrand, setFilterBrand] = useState(null);

const handleCategoryFilter = (category) => {
    if (filterCategory === category) {
        setFilterCategory(null);
    } else {
        setFilterCategory(category);
    }
}

const handleBrandFilter = (brand) => {
    if (filterBrand === brand) {
        setFilterBrand(null);
    } else {
        setFilterBrand(brand);
    }
}

    return (
        <div className="products">
            <Filters 
                handleCategory={handleCategoryFilter} 
                handleBrand={handleBrandFilter}
                filterBrand={filterBrand}
                filterCategory={filterCategory}
            />
            <CardContainer 
                products={products} 
                cart={props.cart} 
                click={props.click}
                filterCategory={filterCategory}
                filterBrand={filterBrand}
            />
        </div>
    )
}

export default Products;