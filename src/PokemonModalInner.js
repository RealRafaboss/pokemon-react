import React, { useState, useEffect } from "react";
import { PokemonInsideModalInner } from "./PokemonInsideModalInner";
import { AbilityDetails } from "./AbilityDetails";

export const PokemonModalInner = ({ abilities, pokemon, setOpenModal }) => {
  const [showAbility, setShowAbility] = useState(false);
  const [selectedAbility, setSelectedAbility] = useState();
  const id = pokemon.id.toString().padStart(3, "0");
  const imgSrc = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`;
  const name = `${pokemon.name[0].toUpperCase()}${pokemon.name.substring(1)}`;

  return (
    <div className="modal-inner">
      <button className="closeModal" onClick={() => setOpenModal(false)}>
        x
      </button>
      <div className="pokemonAndAbility">
        <div className="pokemonImg">
          {name}:
          <img alt={pokemon.name} src={imgSrc} />
        </div>
        {!showAbility ? (
          <div className="abilityName">
            Pokemon Abilities:
            {abilities.map(x => (
              <PokemonInsideModalInner
                key={x.name}
                abilityName={x.name}
                ability={x}
                setShowAbility={setShowAbility}
                setSelectedAbility={setSelectedAbility}
              />
            ))}
          </div>
        ) : (
          <div className="PokemonAbility">
            <AbilityDetails
              setShowAbility={setShowAbility}
              selectedAbility={selectedAbility}
            />
          </div>
        )}
      </div>
    </div>
  );
};
