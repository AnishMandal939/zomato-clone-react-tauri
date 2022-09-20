import React from 'react'
import "./Header.css";
import "../../styles/variable.css";

const Header:React.FC = () => {
  return (
    <div className='max-width header'>
      <img src="https://1000logos.net/wp-content/uploads/2021/06/Zomato-logo.png" alt="60's Zomato logo" className='header-logo' />
      {/* search */}
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <i className="fi fi-rr-marker absolute-center location-icon"></i>
              <div>Biratnagar</div>
            </div>
            {/* caret icon */}
            <i className="fi fi-rr-caret-down absolute-center location-caret"></i>
          </div>
          {/* seperator */}
          <div className="location-search-seperator"></div>
          {/* seperator end */}
          {/* search bar */}
          <div className="header-searchbar">
            <i className="fi fi-rr-search absolute-center search-icon"></i>
            <input type="text" placeholder='Search for restaurant, cusine or a dish' className="search-input" />
          </div>
        </div>
        {/* profile */}
         <div className="profile-wrapper">
          <img src="https://cdn-icons-png.flaticon.com/512/924/924514.png" alt="profile" className='header-profile-image' />
          <span className="header-username">Anish</span>

          <i className="fi fi-rr-angle-small-down absolute-center profile-options-icon"></i>
         </div>
        {/* profile end */}
      </div>
    </div>
  )
}

export default Header;