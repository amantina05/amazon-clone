import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';

function Header() {
  const [{ basket }] = useStateValue();
  console.log(basket);
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white.png"
          alt=""
        />
      </Link>

      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        {/* link 1 */}
        <Link to="/login" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Hello</span>
            <span className="header_optionLineTwo">Sign In</span>
          </div>
        </Link>

        {/* link 2 */}
        <Link to="/login" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>

        {/* link 3 */}
        <Link to="/login" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
        </Link>

        {/* link 4 */}
        <Link to="/checkout" className="header_link">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
      {/* basket icon with a number */}
    </nav>
  );
}

export default Header;
