import './Header.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo_1.svg';
import searchIcon from '../../assets/icons/search.svg';


function Header(){
return(
    <header className="header">
      <Link to="/home" className="header__logo-container">
        <img src={logo} alt="GiftsGenie Logo" className="header__logo"/>
      </Link>

      {/* <div className="header__search">
        <input type="text" placeholder="Search for gifts" />
        <button><img src={searchIcon} alt="Search" /></button>
      </div> */}
{/* 
      <Link to="" className="header__profile">
        <img src="" alt="Profile" />
      </Link>

      <Link to="/cart" className="header__cart">
        <img src="path/to/cart-icon.png" alt="Cart" />
      </Link> */}

    </header>
    )
}

export default Header;