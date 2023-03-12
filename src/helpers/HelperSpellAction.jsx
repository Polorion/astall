import * as React from "react";
import { damageAll } from "../store/redux/ComputerSlice";

const helperDeathAction = (card) => {
  console.log(card);
  switch (card.actionSpell) {
    case "fireWave":
      return damageAll(card.actionDamageSpell);
    default:
      return;
  }
};

export default helperDeathAction;
