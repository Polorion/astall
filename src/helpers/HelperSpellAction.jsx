import * as React from "react";
import { damageAll, damageMeteor } from "../store/redux/ComputerSlice";

const helperSpellAction = (card, board, id, dispatch) => {
  console.log(board);
  switch (card.actionSpell) {
    case "fireWave":
      dispatch(damageAll(card.actionDamageSpell));
      return;
    case "meteorite":
      if (board[id - 1].isBusy) {
        dispatch(damageMeteor({ action: card.actionDamageSpell, id }));
      }
      return;
    default:
      return;
  }
};

export default helperSpellAction;
