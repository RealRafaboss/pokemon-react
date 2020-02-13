import React, { useState, useEffect } from "react";
import { TypesList } from "./PokemonTypesList";
import { PokemonList } from "./PokemonList";
import "./styles.css";

export default function App() {
  const API = "https://pokeapi.co/api/v2";
  const [error, setError] = useState(false);
  const [allTypes, setAllTypes] = useState();
  const [pokemons, setPokemons] = useState([]);
  const [screen, setScreen] = useState(0);
  const [selectedType, setSelectedType] = useState();
  const [typedPokemon, setTypedPokemon] = useState("");

  async function fetchTypes() {
    const response = await fetch(`${API}/type`);
    const types = await response.json();
    setAllTypes(types.results);
  }

  async function fetchPokemons() {
    const catchNamesAndUrl = await fetch(`${API}/pokemon/?limit=1000&offset=0`);
    const pokemonNameAndUrl = await catchNamesAndUrl.json();
    const pokemonsInfosPromises = pokemonNameAndUrl.results.map(
      catchingPokemonInfo
    );
    const pokemonsInfos = await Promise.all(pokemonsInfosPromises);
    const pokemonsFilter = pokemonsInfos.map(x =>
      Object.assign({}, x, {
        types: x.types.map(y => y.type.name)
      })
    );
    const pokemons = pokemonsFilter.filter(x => x.id < 1000);
    async function catchingPokemonInfo(poke) {
      const catchInfoByName = await fetch(`${API}/pokemon/${poke.name}`);
      const pokeNameAndUrl = await catchInfoByName.json();
      return pokeNameAndUrl;
    }

    setPokemons(pokemons);
  }

  useEffect(() => {
    fetchTypes();
    fetchPokemons();
  }, []);

  useEffect(() => {}, []);

  function trocarTela(tela) {
    setScreen(tela);
  }

  const onSelectedType = type => {
    setSelectedType(type);
    trocarTela(1);
  };

  const onBackToTypesScreen = () => {
    trocarTela(0);
  };

  const onTypedPokemon = value => {
    setTypedPokemon(value);
    if (value.length > 0) {
      trocarTela(1);
    } else {
      trocarTela(0);
    }
  };

  let filteredPokemons = [];

  if (typedPokemon.length > 0) {
    filteredPokemons = pokemons.filter(x => x.name.includes(typedPokemon));
  } else if (selectedType !== undefined) {
    filteredPokemons = pokemons.filter(x => x.types.includes(selectedType));
  }

  return (
    <div className="App">
      Procurar pelo Nome
      <input
        type="text"
        className="findPokemonByName"
        onChange={event => onTypedPokemon(event.target.value)}
      />
      {screen === 0 ? (
        <TypesList
          allTypes={allTypes}
          pokemonsObj={pokemons}
          onSelectedType={onSelectedType}
        />
      ) : (
        <PokemonList
          pokemons={filteredPokemons}
          onBackToTypesScreen={onBackToTypesScreen}
          selectedType={selectedType}
          searchInputValue={typedPokemon}
        />
      )}
    </div>
  );
}
