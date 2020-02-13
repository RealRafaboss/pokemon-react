import React, { useState, useEffect } from "react";
import { PokemonCard } from "./PokemonCard";

export const PokemonList = ({
  pokemons,
  selectedType,
  searchInputValue,
  onBackToTypesScreen
}) => {
  const renderHeader = () => {
    if (searchInputValue) {
      return <span>SEARCH {searchInputValue}</span>;
    }
    const name = `${selectedType[0].toUpperCase()}${selectedType.substring(1)}`;
    return <span>Chosen Type: {name}</span>;
  };

  return (
    <div className="pokemon-screen">
      {renderHeader()}
      <button className="backToTypesScreen" onClick={onBackToTypesScreen}>
        Voltar
      </button>
      <div className="poke-list">
        {pokemons.map(x => (
          <PokemonCard key={x.name} pokemon={x} />
        ))}
      </div>
    </div>
  );
};
