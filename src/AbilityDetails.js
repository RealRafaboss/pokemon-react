import React, { useState, useEffect } from "react";

export const AbilityDetails = ({ setShowAbility, selectedAbility }) => {
  const name = `${selectedAbility.name[0].toUpperCase()}${selectedAbility.name.substring(
    1
  )}`;
  const effect = selectedAbility.effect_entries[0].effect;
  const shortEffect = selectedAbility.effect_entries[0].short_effect;
  return (
    <>
      <div className="abilityDetails">
        <button
          className="backToAbilities"
          onClick={() => setShowAbility(false)}
        >
          Voltar
        </button>
      </div>
      <div className="chosenType">Chosen Type: {name}</div>
      <div className="effectSentence">Effect: {effect}</div>
      <div className="shortEffectSentence">Short Effect: {shortEffect}</div>
    </>
  );
};
