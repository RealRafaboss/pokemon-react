import React from "react";
import { NumberOfPokeType } from "./PokemonTypeRow";

export const TypesList = ({ allTypes, pokemonsObj, onSelectedType }) => {
  if (allTypes === undefined || pokemonsObj === undefined) return null;
  return (
    <div className="allTypes">
      Pokemon Types
      <ul>
        {allTypes.map(x => (
          <NumberOfPokeType
            key={x.name}
            type={x}
            pokemonsObj={pokemonsObj}
            onSelectedType={onSelectedType}
          />
        ))}
      </ul>
    </div>
  );
};
