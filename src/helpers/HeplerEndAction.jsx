import { useDispatch } from "react-redux";
import * as React from "react";
import { addMana } from "../store/redux/SpellBookSlice";
import { damageIsOwner, damageThisUnit } from "../store/redux/PlayerSlice";
import { damageAll } from "../store/redux/ComputerSlice";

const helperEndAction = (props) => {
  console.log(props);
  switch (props.isBusy.actionOnEnd) {
    case "damageThisUnit":
      return damageThisUnit({
        id: props.id,
        damage: props.isBusy.actionDamage,
      });
    default:
      return;
  }
};

export default helperEndAction;
