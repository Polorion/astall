import * as React from "react";
import { setDamageSlot } from "../store/redux/PlayerSlice";

const SetAttackElements = (element, id, book, dispatch) => {
  const count = book.find((el) => el.name === element).count;
  dispatch(setDamageSlot({ id: id, action: count }));
};

export default SetAttackElements;
