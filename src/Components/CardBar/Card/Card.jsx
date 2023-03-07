import * as React from "react";
import S from "./Card.module.scss";
import { useDispatch } from "react-redux";
import { setActive, setActiveCard } from "../../../store/redux/SpellBookSlice";
import { setInfoCard } from "../../../store/redux/PlayerSlice";

const Card = ({ card, active, currentMana }) => {
  const dispatch = useDispatch();
  const handler = () => {
    currentMana >= card.price && dispatch(setActiveCard(card));
    dispatch(setInfoCard(card));
  };

  return (
    <div className={`${S.body} ${currentMana < card.price && S.disable}`}>
      <div className={`${S.img} ${active && S.active}`} onClick={handler}>
        <img src={card.img} alt="" />
        <div className={`${S.hp} ${S.stats}`}>{card.hp}</div>
        <div className={`${S.attack} ${S.stats}`}>{card.attack}</div>
        <div className={`${S.price} ${S.stats}`}>{card.price}</div>
      </div>
    </div>
  );
};

export default Card;
