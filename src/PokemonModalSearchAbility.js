import React, { useState, useEffect } from "react";
import { PokemonModalInner } from "./PokemonModalInner";

const OpenModal = ({ pokemon, setOpenModal }) => {
  const [abilities, setAbilities] = useState([]);

  useEffect(() => {
    const abilitiesPromises = pokemon.abilities.map(x =>
      searchingPokemonInfo(x)
    );
    Promise.all(abilitiesPromises).then(abilities => {
      setAbilities(abilities);
    });
  }, []);

  async function searchingPokemonInfo(pokeAb) {
    const urlAbility = await fetch(pokeAb.ability.url);
    const abilities = await urlAbility.json();
    return abilities;
  }
  return (
    <div className="modal-outer open">
      <PokemonModalInner
        abilities={abilities}
        pokemon={pokemon}
        setOpenModal={setOpenModal}
      />
    </div>
  );
};

export default OpenModal;
