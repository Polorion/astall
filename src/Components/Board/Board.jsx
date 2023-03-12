import * as React from "react";
import S from "./Board.module.scss";
import stub from "../../access/img/zaglushka.jpg";
import { useDispatch, useSelector } from "react-redux";
import { setCardInBoard, setInfoCard } from "../../store/redux/PlayerSlice";
import {
  setActiveCard,
  setManaElement,
} from "../../store/redux/SpellBookSlice";
import { Slot } from "./Slot/Slot";
import { useEffect, useRef } from "react";
import helperStartAction from "../../helpers/HeplerStartAction";
import helperDeathAction from "../../helpers/HelperSpellAction";

const Board = ({ board, enemy }) => {
  const activeCard = useSelector((state) => state.spellBook.choiceCard);
  const activeElement = useSelector((state) => state.spellBook.choiceElement);
  const refElement = useRef(activeElement);
  const ref = useRef();
  useEffect(() => {
    refElement.current = activeElement;
  }, [activeElement]);
  useEffect(() => {
    ref.current = activeCard;
  }, [activeCard]);

  const dispatch = useDispatch();

  const handler = (id, isBusy) => {
    if (
      ref.current !== null &&
      ref.current.type !== "spell" &&
      !isBusy &&
      !enemy
    ) {
      dispatch(
        setManaElement({ name: refElement.current, count: ref.current.price })
      );
      dispatch(setCardInBoard({ id, activeCard: ref.current }));
      dispatch(setActiveCard(null));
      if (ref.current.actionOnStart !== null) {
        dispatch(helperStartAction(ref.current, id));
      }
    }
    if (ref.current !== null && ref.current.type === "spell" && enemy) {
      dispatch(
        setManaElement({ name: refElement.current, count: ref.current.price })
      );
      dispatch(helperDeathAction(ref.current, id));
    }
  };
  return (
    <div className={S.body}>
      <Slot enemy={enemy} el={board[0]} handler={handler} />
      <Slot enemy={enemy} el={board[1]} handler={handler} />
      <Slot enemy={enemy} el={board[2]} handler={handler} />
      <Slot enemy={enemy} el={board[3]} handler={handler} />
      <Slot enemy={enemy} el={board[4]} handler={handler} />
    </div>
  );
};

export default Board;
