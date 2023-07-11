import '../styles/card.css'

const Card = (props) => {
    const {img, name, price} = props.data;
    return (
        <div className='card-item' data-testid='card'>
            <img className='card-img' src={img} alt={name} />
            <h3 className='card-heading'>{name}</h3>
            <p className='card-price'>{'$' + price}</p>
            <button className='btn card-btn' onClick={props.handleClick}>Add to cart</button>
        </div>
    )
};

export default Card;