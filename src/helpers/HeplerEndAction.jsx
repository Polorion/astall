import { useDispatch } from "react-redux";
import * as React from "react";
import { addMana } from "../store/redux/SpellBookSlice";
import {
  damageFaceOwner,
  damageIsOwner,
  damageThisUnit,
} from "../store/redux/PlayerSlice";
import { damageAll } from "../store/redux/ComputerSlice";

const helperEndAction = (el, dispatch) => {
  switch (el.isBusy.actionOnEnd) {
    case "damageThisUnit":
      dispatch(
        damageThisUnit({
          id: el.id,
          damage: el.isBusy.actionDamage,
        })
      );
      return;
    case "waterSpiritAction":
      dispatch(damageFaceOwner(el.isBusy.actionDamage));
      return;
    default:
      return;
  }
};

export default helperEndAction;
