import React from "react";
import pokeball from "../images/pokeball.png";
import pokeballcolor from "../images/pokeballcolor.png"
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="title">
      <div className="title__left">
        <p>Pokédex</p>
        <div className="caught__seen">
          <div className="caught">
            <img src={pokeball} alt="pokeball" className="caught__pokeball" />
            <p>438</p>
          </div>
          <div className="seen">
            <img src={pokeballcolor} alt="pokeball" className="seen__pokeball"/>
            <p>649</p>
          </div>
        </div>
      </div>
      <p className="atoz">
        A -&gt;Z
      </p>
    </div>
  );
};

export default Navbar;