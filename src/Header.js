import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
function Header() {
    return (
        <div className="header">
            <img className="logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
        <div className="header_search">
            <input className="search_input"
            type="text"/>    
            <SearchIcon className="Search_icon"/>
        </div>
        <div className="head_nav">
            <div className="header_option">
                <span className="lineone">
                    Hello Guest
                </span>
                <span className="linetwo">
                Sign In
                </span>
                </div>
            <div className="header_option">
            <span className="lineone">
                    Return 
                </span>
                <span className="linetwo">
                & Orders
                </span>
                </div>
            <div className="header_option">
            <span className="lineone">
                Your
                </span>
                <span className="linetwo">
                Prime
                </span>
                </div>
        </div>
        
        
        
        
        
        </div>
    )
}

export default Header
