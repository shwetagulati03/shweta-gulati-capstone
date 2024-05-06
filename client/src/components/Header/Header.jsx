import './Header.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo_1.svg';
import searchIcon from '../../assets/icons/search.svg';
import axios from 'axios';
import { useState,useEffect } from 'react';

function Header({isLoggedIn}){

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const accessToken=localStorage.getItem("authToken"); 
                console.log(localStorage.getItem("authToken"));
                axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        const response = await axios.get(`http://localhost:8080/category`);
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, [isLoggedIn]);
return(
    <header className="header">
      <Link to="/home" className="header__logo-container">
        <img src={logo} alt="GiftsGenie Logo" className="header__logo"/>
      </Link>

      {isLoggedIn && (
  <div className="header__categories">
    {categories.map((category) => (
      <Link to={`/category/${category.id}`} key={category.id} className="header__category">
        {category.name}
      </Link>
    ))}
  </div>
)}

      {isLoggedIn && (
        <div className="header__search">
          <input type="text" placeholder="Search for gifts" />
          <button><img src={searchIcon} alt="Search" /></button>
        </div>
      )}


   

    </header>
    )
}

export default Header;