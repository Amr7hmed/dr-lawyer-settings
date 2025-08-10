import { useState } from "react";
import Iconsearch from "../../assets/iconsearch.png";
import IconNoftiction from "../../assets/icon-noftiction.png";
import profile from "../../assets/image-profile.png";
import { FaChevronDown } from "react-icons/fa";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="main-header">
      {!showSearch && <h1 className="page-title">Profile Settings</h1>}

      <div className="header-actions">
        <div
          className={`search-box ${showSearch ? "active" : ""}`}
        >
          <img
            src={Iconsearch}
            alt="Search"
            onClick={() => setShowSearch(!showSearch)}
            className="search-icon"
          />
          <input type="text" placeholder="Search..." />
        </div>

        <div className="header-actions-setting">
          <div className="notification">
            <img src={IconNoftiction} alt="" />
          </div>

          <div className="user-info">
            <div className="user-info__image-wrapper">
              <img src={profile} alt="User" className="user-info__image" />
              <span className="user-info__status" />
            </div>
            <div className="user-info__text">
              <span className="user-info__greeting">Good morning!</span>
              <span className="user-info__name">Mark Henry</span>
            </div>
            <FaChevronDown className="user-info__icon" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
