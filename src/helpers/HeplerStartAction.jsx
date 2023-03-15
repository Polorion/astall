import { useDispatch } from "react-redux";
import * as React from "react";
import {
  addCurrentMana,
  addMana,
  setManaBook,
} from "../store/redux/SpellBookSlice";
import {
  addNearbyDamage,
  damageAllOwner,
  damageIsOwner,
  healOwner,
  setDamageAllUnits,
  setDamageSlot,
  setDefenceOwner,
  setDefenceSlot,
  setGoToAttack,
  setSpellImmunity,
} from "../store/redux/PlayerSlice";
import { damageAll } from "../store/redux/ComputerSlice";

const helperStartAction = (card, idSlot, dispatch, manaBookCount) => {
  switch (card.actionOnStart) {
    case "damageOwner":
      dispatch(damageIsOwner({ id: idSlot, damage: card.actionDamage }));
      return;
    case "frozenFairy":
      dispatch(setSpellImmunity({ id: idSlot, type: true }));
      return;
    case "seaTankAction":
      dispatch(
        setDefenceSlot({ id: idSlot, defence: card.actionDamage, type: "add" })
      );
      return;
    case "waterCommander":
      dispatch(setGoToAttack({ id: idSlot, type: true }));
      return;
    case "iceGuardAction":
      dispatch(setDefenceOwner(card.actionDamage));
      return;
    case "seaSageAction":
      dispatch(setManaBook({ card, element: "воздух", type: "add" }));
      return;
    case "waterDefenderAction":
      dispatch(
        addCurrentMana({ name: "огонь", count: card.actionIncreaseMana })
      );
      return;
    case "damageAll":
      dispatch(damageAll(card.actionDamage));
      return;
    case "addFireMana":
      dispatch(setManaBook({ card, element: "огонь", type: "add" }));
      return;
    case "damageAllUnitEnemy":
      dispatch(setManaBook({ card, element: "огонь", type: "add" }));
      dispatch(damageAll(card.actionDamage));
      return;
    case "elementalWaterAction":
      dispatch(setManaBook({ card, element: "вода", type: "add" }));
      dispatch(healOwner({ hp: card.actionDamage }));

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
