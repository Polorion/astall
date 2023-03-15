import * as React from "react";
import {
  damageAll,
  damageComputerOwner,
  damageMeteor,
} from "../store/redux/ComputerSlice";
import { damageAllOwner, damageIsOwner } from "../store/redux/PlayerSlice";
import { addMana } from "../store/redux/SpellBookSlice";

const helperSpellActionPlayer = (
  card,
  board,
  id,
  dispatch,
  bookMana,
  allCardPlayer
) => {
  switch (card.actionSpell) {
    case "meditationAction":
      dispatch(
        addMana({
          action: card.actionIncreaseMana,
          type: "вода",
        })
      );
      return;

    default:
      return;
  }
};

export default helperSpellActionPlayer;
