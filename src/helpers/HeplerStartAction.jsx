import { useDispatch } from "react-redux";
import * as React from "react";
import { addMana } from "../store/redux/SpellBookSlice";
import { damageIsOwner } from "../store/redux/PlayerSlice";
import { damageAll } from "../store/redux/ComputerSlice";

const helperStartAction = (props) => {
  switch (props.name) {
    case "damageOwner":
      return damageIsOwner({ id: props.id, damage: props.damage });
    case "damageAll":
      return damageAll(props.damage);
    default:
      return;
  }
};

export default helperStartAction;
