import * as React from "react";
import S from "./Board.module.scss";
import stub from "../../access/img/zaglushka.jpg";
import { useDispatch, useSelector } from "react-redux";
import { setCardInBoard } from "../../store/redux/PlayerSlice";
import { setActiveCard } from "../../store/redux/SpellBookSlice";
import { Slot } from "./Slot/Slot";
import { useEffect, useRef } from "react";

const Board = ({ board, enemy }) => {
  const activeCard = useSelector((state) => state.spellBook.choiceCard);
  const ref = useRef(activeCard);
  ref.current = activeCard;
  const dispatch = useDispatch();

  const handler = (id) => {
    dispatch(setCardInBoard({ id, activeCard: ref.current }));
    dispatch(setActiveCard(null));
  };

  return (
    <div className={S.body}>
      <Slot enemy el={board[0]} handler={handler} />
      <Slot enemy el={board[1]} handler={handler} />
      <Slot enemy el={board[2]} handler={handler} />
      <Slot enemy el={board[3]} handler={handler} />
      <Slot enemy el={board[4]} handler={handler} />
    </div>
  );
};

export default Board;
