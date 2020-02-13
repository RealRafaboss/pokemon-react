import React, { useState, useEffect } from "react";
import OpenModal from "./PokemonModalSearchAbility";

export const PokemonCard = ({ pokemon }) => {
  const [openModal, setOpenModal] = useState(false);

  const id = pokemon.id.toString().padStart(3, "0");
  const src = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`;
  const name = `${pokemon.name[0].toUpperCase()}${pokemon.name.substring(1)}`;
  return (
    <>
      <div
        className="pokemonNameCard"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        {name} - {pokemon.id}
        <img className="pokeImg" alt={pokemon.name} src={src} />
      </div>
      {openModal ? (
        <OpenModal pokemon={pokemon} setOpenModal={setOpenModal} />
      ) : null}
    </>
  );
};
