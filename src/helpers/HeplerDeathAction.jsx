import { useDispatch } from "react-redux";
import * as React from "react";
import { addMana, setManaBook } from "../store/redux/SpellBookSlice";
import {
  addNearbyDamage,
  damageIsOwner,
  damageThisUnit,
  setDamageAllUnits,
  setDefenceOwner,
  setDefenceSlot,
  setGoToAttack,
  setSpellImmunity,
  subNearbyDamage,
} from "../store/redux/PlayerSlice";
import { damageAll } from "../store/redux/ComputerSlice";

const helperDeathAction = (card, dispatch) => {
  console.log(card);
  switch (card.isBusy.actionOnDeath) {
    case "subFireMana":
      dispatch(
        setManaBook({ card: card.isBusy, element: "огонь", type: "sub" })
      );
      return;
    case "seaTankAction":
      dispatch(
        setDefenceSlot({
          id: card.id,
          defence: card.isBusy.actionDamage,
          type: "sub",
        })
      );
      return;
    case "waterCommander":
      dispatch(setGoToAttack({ id: card.id, type: false }));
      return;
    case "seaSageAction":
      dispatch(
        setManaBook({ card: card.isBusy, element: "воздух", type: "sub" })
      );
      return;
    case "frozenFairy":
      dispatch(setSpellImmunity({ id: card.id, type: false }));
      return;

    case "subIncreaseMana":
      dispatch(
        setManaBook({ card: card.isBusy, element: "огонь", type: "sub" })
      );
      return;
    case "iceGuardAction":
      dispatch(setDefenceOwner(0));
      return;
    case "subDamageAllUnit":
      dispatch(
        setDamageAllUnits({
          action: card.isBusy.actionDamage,
          type: "sub",
        })
      );
      return;
    case "subDamageNearby":
      dispatch(
        addNearbyDamage({
          action: card.isBusy.actionDamage,
          id: card.id,
          type: "sub",
        })
      );
      return;
    default:
      return;
  }
};

export default helperDeathAction;
