import Card from "./Card";
import '../styles/cardContainer.css';

const CardContainer = (props) => {
    let products = props.products;
    if (props.filterBrand !== null) {
        products = products.filter(item => item.brand === props.filterBrand)
    }
    if (props.filterCategory !== null) {
        products = products.filter(item => item.category === props.filterCategory)
    }
    return (
        <div className="card-container">
            {products.map(item =>
            <Card 
                data={item}
                handleClick={props.click}
                key={item.id}
                cart={props.cart}
            />)}
        </div>
    )
};

export default CardContainer;