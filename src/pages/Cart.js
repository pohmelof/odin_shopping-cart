import CartItem from "../components/CartItem";
import "../styles/cart.css";

const Cart = (props) => {

    let total = props.cart.reduce(
        (acc, curr) => acc + curr.amount*curr.item.price
    , 0);

    return (
        <div className="cart">
            {props.cart.map(cartItem => 
                <CartItem 
                    key={cartItem.id} 
                    data={cartItem.item} 
                    amount={cartItem.amount}
                    addAmount={() => props.addAmount(cartItem.id)}
                    reduceAmount={() => props.reduceAmount(cartItem.id)}
                />)}
            <div className="cart_total">
                <h4 className="cart_total_amount">{props.cart.length > 0 ? 'Total: $' + total : 'Your cart is empty'}</h4>
                {props.cart.length > 0 && <button className="btn btn-checkout">Checkout</button>}
            </div>
        </div>
    )
}

export default Cart;