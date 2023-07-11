import Card from "./Card";

const CardContainer = (props) => {
    return (
        <div className="card-container">
            {props.products.map(item => 
            <Card 
                data={item}
                handleClick={() => console.log(item.id)}
                key={item.id}
            />)}
        </div>
    )
};

export default CardContainer;