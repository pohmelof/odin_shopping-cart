import Card from "./Card";
import '../styles/cardContainer.css';

const CardContainer = (props) => {
    return (
        <div className="card-container">
            {props.products.map(item => 
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