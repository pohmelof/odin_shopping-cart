import "../styles/header.css";
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <header>
            <Link to='/' className="header-logo">Legit Store&#8482;</Link>
            <ul className="header-nav">
                <li>
                    <Link to='/' className="header-nav_item">Home</Link> 
                </li>
                <li>
                    <Link to='/products' className="header-nav_item">Products</Link>
                </li>
                <li>
                    <Link to='/contacts' className="header-nav_item">Contacts</Link>
                </li>
                <li>
                    <Link to='/cart' className="header-nav_item">Cart({props.counter})</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header;