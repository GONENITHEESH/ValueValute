import React, { useState } from "react";
import "./Header.css";
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
     const [{basket},dispatch] = useStateValue()
    return(
        <div className="header">
                    <Link to="/" style={{textDecoration:"none"}}>
                         <div className="header_logo">
                              <StorefrontIcon className="header_logoImage" fontSize="large" />
                              <h2 className='header_logoTitle'><span class="value">Value</span><span class="vault">Vault</span></h2>
                         </div>
                    </Link>
        <div className="header_search">

              <input type="text" className='header_searchInput' />
              <SearchIcon className="header_searchIcon" />
        </div>
        <div className="header_nav">
          <Link to="/login" style={{textDecoration:"none"}}>
           <div className="nav_iteam">
                <span className='nav_iteamLineOne'>Hello Guest</span>
                <span className='nav_iteamLineTwo'>Sing in</span>
           </div>
           </Link>
           <div className="nav_iteam">
                <span className='nav_iteamLineOne'>Your</span>
                <span className='nav_iteamLineTwo'>Shop</span>
           </div>
           <Link to="/checkout" style={{textDecoration:"none"}}>
           <div className="nav_iteamBasket">
                <ShoppingBasketIcon />
                 <span className='nav_basketCount nav_iteamLineTwo'>{basket?.length}</span>
           </div>
           </Link>
          
        </div>
      </div>
    )
    
}
export default Header;