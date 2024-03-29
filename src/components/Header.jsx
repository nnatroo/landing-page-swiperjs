import React from "react";
import classes from "../modules/Header.module.scss";
import layout from "../modules/Layout.module.scss";
import CompanyLogo from "../assets/company-logo.svg";
import SearchIcon from "../assets/search-icon.svg";
import NavbarLinks from "../UI/NavbarLinks";

const Header = () => {
  return (
    <>
      <header id="header" className={classes["header"]}>
        <div className={`${classes["container"]} ${layout["container"]}`}>
          <div className={classes["navbar-logo"]}>
            <a href="/">
              <img src={CompanyLogo} alt="CompanyLogo" />
              <strong>Company Name</strong>
            </a>
          </div>

          <NavbarLinks />

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
        </div>
      </header>
    </>
  );
};

export default Header;
