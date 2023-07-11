import Header from "../components/Header";
import products from "../data/products";
import CardContainer from "../components/CardContainer";

const Products = () => {
    return (
        <>
            <Header />
            <CardContainer products={products}/>
        </>
    )
}

export default Products;