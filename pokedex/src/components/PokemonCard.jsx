import React, { useState } from "react";
import "./pokemoncard.css";
import pokeball from "../images/pokeball.png";
import Modal from "./Modal"

const PokemonCard = ({
  id,
  name,
  image,
  type,
  weight,
  height,
  stats,
  statsName,
}) => {
  const [isShown, setIsShown] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function modalHandler() {
    setModalIsOpen(true);
  }

  function CloseModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="container">
      {isShown && (
        <div className="show">
          <div className="stat-container-title">
            <img src={image} alt={name} className="image-title" />
            <p className="number-style">No. {id}</p>
            <p>{name}</p>
            <img src={pokeball} alt="pokeball" className="pokeball-title" />
          </div>
          <img src={image} alt={name} />
          <div className="stats">
            <div className="stats-left">
              <p>Type</p>
              <p>Height</p>
              <p>Weight</p>
            </div>
            <div className="stats-right">
              <p>{type}</p>
              <p>{height}0 cm</p>
              <p>{weight} lbs</p>
            </div>
          </div>
          <div className="base-stats">
            <div>
              {statsName.map((stats) => (
                <p className="stats">{stats}</p>
              ))}
            </div>
            <div>
              {statsName.map((stats) => (
                <p className="stats">{stats}</p>
              ))}
            </div>
          </div>
        </div>
      )}

      <div
        className="right"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        onClick={modalHandler}
      >
        <img src={image} alt={name} className="right-image" />
        <p style={{ width: "270px" }}>No. {id}</p>
        <p>{name}</p>
        <img
          src={pokeball}
          alt="name"
          style={{ marginLeft: "auto", width: "40px" }}
        />
      </div>
      {modalIsOpen && (
        <Modal
        id={id}
        name={name}
        image={image}
        height={height}
        weight={weight}
        stats={stats}
        statsName={statsName}
        type={type}
        onClick={CloseModalHandler}
        />
      )}
    </div>
  );
};

export default PokemonCard;
