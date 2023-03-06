import * as React from "react";
import S from "./Card.module.scss";
import { useDispatch } from "react-redux";
import { setActive, setActiveCard } from "../../../store/redux/SpellBookSlice";

const Card = ({ card, active }) => {
  const dispatch = useDispatch();
  const handler = () => {
    dispatch(setActiveCard(card));
  };

  return (
    <div className={S.body}>
      <div className={`${S.img} ${active && S.active}`} onClick={handler}>
        <img src={card.img} alt="" />
        <div className={`${S.hp} ${S.stats}`}>1</div>
        <div className={`${S.attack} ${S.stats}`}>2</div>
        <div className={`${S.price} ${S.stats}`}>3</div>
      </div>
    </div>
  );
};

export default Card;
