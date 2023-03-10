import * as React from "react";
import S from "./DescriptionCard.module.scss";

const DescriptionCard = ({ card }) => {
  return (
    <div className={S.body}>
      <div className={S.img}>
        <img src={card.img} alt="" />
        <p>{card.name}</p>
      </div>
      <div className={S.info}>
        <div className={S.price}>
          {card.type === "card" && (
            <span>
              атака:{" "}
              {card.name === "Командир минотавров"
                ? card.attack + 1
                : card.attack}
              ,{" "}
            </span>
          )}
          {card.type === "card" && <span>атака:жизни: {card.hp}, </span>}
          <span>цена: {card.price}. </span>
        </div>
        <div className={S.description}>
          <p>{card.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DescriptionCard;
