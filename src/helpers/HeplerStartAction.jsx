import { useDispatch } from "react-redux";
import * as React from "react";
import { addMana, setManaBook } from "../store/redux/SpellBookSlice";
import {
  addNearbyDamage,
  damageAllOwner,
  damageIsOwner,
  setDamageAllUnits,
} from "../store/redux/PlayerSlice";
import { damageAll } from "../store/redux/ComputerSlice";

const helperStartAction = (card, idSlot, dispatch) => {
  switch (card.actionOnStart) {
    case "damageOwner":
      dispatch(damageIsOwner({ id: idSlot, damage: card.actionDamage }));
      return;
    case "damageAll":
      dispatch(damageAll(card.actionDamage));
      return;
    case "addFireMana":
      dispatch(setManaBook({ card, type: "add" }));
      return;
    case "addDamageAllUnit":
      dispatch(setDamageAllUnits({ action: card.actionDamage, type: "add" }));
      return;
    case "damageAllUnitOwnerAndEnemy":
      dispatch(damageAll(card.actionDamage));
      dispatch(damageAllOwner(card.actionDamage));
      return;
    case "addDamageNearby":
      dispatch(
        addNearbyDamage({
          action: card.actionDamage,
          id: idSlot,
          type: "add",
        })
      );
      return;
    default:
      return;
  }
};

export default helperStartAction;
