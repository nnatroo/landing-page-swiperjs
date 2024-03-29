import React from "react";
import classes from "../modules/Hero.module.scss";
import layout from "../modules/Layout.module.scss";
import HeroImage from "../assets/hero-image.jpg";
import Button from "../UI/Button";

const Hero = () => {
  return (
    <section id="home" className={`${classes["hero-image-container"]} ${layout["wide"]}`}>
      <figure>
        <img
          className={classes["hero-image"]}
          src={HeroImage}
          alt="hero-image"
        />
      </figure>

      <div className={`${classes["container"]} ${layout["container"]}`}>
        <div className={classes["text-wrapper"]}>
          <h1>Company’s First Service Title</h1>
          <div className={classes["text"]}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
          </div>

          <Button label={"See More"} primary disabled={"true"}/>

        </div>  
      </div>
    </section>
  );
};

export default Hero;
