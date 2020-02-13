import React, { useState, useEffect } from "react";

export const PokemonInsideModalInner = ({
  abilityName,
  setShowAbility,
  setSelectedAbility,
  ability
}) => {
  const name = `${abilityName[0].toUpperCase()}${abilityName.substring(1)}`;
  return (
    <div
      className="abilityButtons"
      onClick={() => {
        setShowAbility(true);
        setSelectedAbility(ability);
      }}
    >
      {name}
    </div>
  );
};
