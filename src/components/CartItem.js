import "../styles/cartItem.css"

const CartItem = (props) => {
    const {img, name, price} = props.data;
    return (
        <div className="cart-item">
            <img src={require('../img/'+img)} alt={name} className="cart-item_img"/>
            <div className="cart-item_desc">
                <h3>{name}</h3>
                <p>${price * props.amount}</p>
            </div>
            <div className="cart-item_controls">
                <button onClick={props.reduceAmount} className="btn btn-amount">-</button>
                <div className="cart-item_amount">{props.amount}</div>
                <button onClick={props.addAmount} className="btn btn-amount">+</button>
            </div>
        </div>
    )
};

export default CartItem;