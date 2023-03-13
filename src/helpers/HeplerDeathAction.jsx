import { useDispatch } from "react-redux";
import * as React from "react";
import { addMana, setManaBook } from "../store/redux/SpellBookSlice";
import {
  addNearbyDamage,
  damageIsOwner,
  damageThisUnit,
  setDamageAllUnits,
  subNearbyDamage,
} from "../store/redux/PlayerSlice";
import { damageAll } from "../store/redux/ComputerSlice";

const helperDeathAction = (card) => {
  console.log(card);
  switch (card.isBusy.actionOnDeath) {
    case "subFireMana":
      return setManaBook({ card: card.isBusy, type: "sub" });
    case "subDamageAllUnit":
      return setDamageAllUnits({
        action: card.isBusy.actionDamage,
        type: "sub",
      });
    case "subDamageNearby":
      return addNearbyDamage({
        action: card.isBusy.actionDamage,
        id: card.id,
        type: "sub",
      });
    default:
      return;
  }
};

export default helperDeathAction;
