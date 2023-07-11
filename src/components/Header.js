import "../styles/header.css";

const Header = () => {
    return (
        <header>
            <h1>Legit Store</h1>
            <ul className="header-nav">
                <li className="header-nav_item">
                    <a href="./">Home</a> 
                </li>
                <li className="header-nav_item">
                    <a href='./products'>Products</a>
                </li>
                <li className="header-nav_item">
                    <a href='./contacts' >Contacts</a>
                </li>
                <li className="header-nav_item">
                    <a href='./cart'>Cart</a>
                </li>
            </ul>
        </header>
    )
}

export default Header;