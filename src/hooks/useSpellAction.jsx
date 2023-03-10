import * as React from "react";
import { useSelector } from "react-redux";

const useSpellAction = (props) => {
  const card = useSelector((state) => state.spellBook.book);
  const cards = card.map((el) => {
    return el.cards?.find((el) => el.id === props.id);
  });
  return cards[0]?.actionOnStart;
};

export default useSpellAction;
