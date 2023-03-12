import { useDispatch } from "react-redux";
import * as React from "react";
import { addMana, setManaBook } from "../store/redux/SpellBookSlice";
import {
  addNearbyDamage,
  damageIsOwner,
  damageThisUnit,
  setDamageAllUnits,
} from "../store/redux/PlayerSlice";
import { damageAll } from "../store/redux/ComputerSlice";

const helperStartAction = (card, idSlot) => {
  switch (card.actionOnStart) {
    case "damageOwner":
      return damageIsOwner({ id: idSlot, damage: card.actionDamage });
    case "damageAll":
      return damageAll(card.actionDamage);
    case "addFireMana":
      return setManaBook({ card, type: "add" });
    case "addDamageAllUnit":
      return setDamageAllUnits({ damage: card.actionDamage, type: "add" });
    case "addDamageNearby":
      return addNearbyDamage({
        action: card.actionDamage,
        id: idSlot,
        type: "add",
      });
    default:
      return;
  }
};

export default helperStartAction;
