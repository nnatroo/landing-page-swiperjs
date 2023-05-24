import React, { useState } from "react";
import classes from "../modules/Header.module.scss";
import layout from "../modules/Layout.module.scss";
import CompanyLogo from "../assets/companyLogo.svg";
import SearchIcon from "../assets/searchIcon.svg";
import BurgerMenuIcon from "../assets/menuBurger.svg";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const burgerClickHandler = () => {
    setShowBurgerMenu(!showBurgerMenu);
    document.body.style.overflow = "hidden";
  };

  const cancelHandler = () => {
    setShowBurgerMenu(false);
    document.body.style.overflow = "visible";
  };

  return (
    <>
      {showBurgerMenu && <BurgerMenu onCancel={cancelHandler} />}
      <header id="home" className={classes["header"]}>
        <div className={`${classes["container"]} ${layout["container"]}`}>
          <div className={classes["navbar-logo"]}>
            <a href="/">
              <img src={CompanyLogo} alt="CompanyLogo" />
              <strong>Company Name</strong>
            </a>
          </div>

          <nav className={classes["navbar-links"]}>
            <ul className={classes["navbar-links-wrapper"]}>
              <li className={classes["active-item"]}>
                <a href="#home">Home</a>
              </li>

              <li>
                <a href="#services">Services</a>
              </li>

              <li>
                <a href="#projects">Projects</a>
              </li>

              <li>
                <a href="#about">About</a>
              </li>

              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>

          <div className={classes["navbar-search-wrapper"]}>
            <form action="/">
              <div className={classes["form-item"]}>
                <input type="search" placeholder="Search keyword ..." />
                <button>
                  <img src={SearchIcon} alt="" />
                </button>
              </div>
            </form>
          </div>

          {false && (
            <div className={classes["navbar-burger-menu-wrapper"]}>
              <img onClick={burgerClickHandler} src={BurgerMenuIcon} alt="" />
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
