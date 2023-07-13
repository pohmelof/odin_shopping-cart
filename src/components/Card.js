import '../styles/card.css'

const Card = (props) => {
    const {img, name, price, id} = props.data;
    const inCart = props.cart.find(item => item.id === id);
    return (
        <div className='card-item' data-testid='card'>
            <img className='card-img' src={img} alt={name} />
            <h3 className='card-heading'>{name}</h3>
            <p className='card-price'>{'$' + price}</p>
            {inCart === undefined ? 
            <button className='btn card-btn' onClick={() => props.handleClick(props.data)}>Add to cart</button>
            :
            <span className='card-inCart'>In cart</span>
            }
        </div>
    )
};

export default Card;