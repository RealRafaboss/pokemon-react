import React from "react";

export function NumberOfPokeType({ type, pokemonsObj, onSelectedType }) {
  const pokTypesWithNumber = pokemonsObj.filter(x =>
    x.types.includes(type.name)
  );
  return (
    <div className="type" onClick={() => onSelectedType(type.name)}>
      <li>
        {type.name[0].toUpperCase()}
        {type.name.substring(1)}({pokTypesWithNumber.length})
      </li>
    </div>
  );
}
