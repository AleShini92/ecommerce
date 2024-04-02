import { TbSearch, TbShoppingBagSearch, TbShoppingCart } from 'react-icons/tb';
import './Header.scss';
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';

const Header = () => {
    const { cartItems } = useCart();
    return (
        <div className="header">
            <Link to='/'>
                <div className="logo">
                    <h2>spoiler</h2>
                    <TbShoppingBagSearch className="icon" />
                </div>
            </Link>
            <div className="right-side">
                <div className="search-input">
                    <input type="text" placeholder="search" /> <TbSearch />
                </div>
                <Link to="/cart">
                    <div className="cart">
                        <TbShoppingCart className="cart-icon" />
                        <span>{ cartItems.length }</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header