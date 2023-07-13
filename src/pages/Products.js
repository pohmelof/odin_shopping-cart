import products from "../data/products";
import CardContainer from "../components/CardContainer";

const Products = (props) => {
    return (
        <>
            <CardContainer products={products} cart={props.cart} click={props.click}/>
        </>
    )
}

export default Products;