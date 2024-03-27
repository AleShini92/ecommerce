import { TbSearch, TbShoppingBagSearch, TbShoppingCart } from 'react-icons/tb';
import './Header.scss';

const Header = () => {
    return (
        <div className='header'>
            <div className="logo">
                <h2>spoiler</h2>
                <TbShoppingBagSearch className="icon" />
            </div>

            <div className="right-side">
                <div className="search-input">
                    <input type="text" placeholder="search" /> <TbSearch />
                </div>
            </div>

            <div className="cart">
                <TbShoppingCart className='cart-icon'/>
                <span>0</span>
            </div>
        </div>
    );
}

export default Header