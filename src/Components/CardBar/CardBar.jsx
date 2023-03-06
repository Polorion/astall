import * as React from "react";
import S from "./CardBar.module.scss";
import SpellElement from "./SpellElement/SpellElement";
import { ReactComponent as Fire } from "../../access/img/fireIcon.svg";
import { useSelector } from "react-redux";
import Card from "./Card/Card";
import DescriptionCard from "./DescriptionCard/DescriptionCard";
import { useEffect, useState } from "react";

const CardBar = () => {
  const spellBook = useSelector((state) => state.spellBook.book);
  const choiceElement = useSelector((state) => state.spellBook.choiceElement);
  const choiceCard = useSelector((state) => state.spellBook.choiceCard);
  const [spellBookActive, setSpellBookActive] = useState(null);
  useEffect(() => {
    setSpellBookActive(spellBook.find((el) => el.name === choiceElement));
  }, [choiceElement]);

  return (
    <div className={S.body}>
      <div className={S.elements}>
        {spellBook.map((element) => {
          return (
            <SpellElement
              key={element.name}
              Element={Fire}
              name={element.name}
              mana={element.count}
            />
          );
        })}
      </div>
      <div className={S.info}>
        <div className={S.cards}>
          <div className={S.bodyCenter}>
            {spellBookActive?.cards &&
              spellBookActive.cards.map((el) => {
                return (
                  <Card
                    key={el.name}
                    card={el}
                    active={el.id === choiceCard?.id}
                  />
                );
              })}
          </div>
          <div className={S.bodyRight}></div>
        </div>
        <div className={S.description}>
          {choiceCard && <DescriptionCard card={choiceCard} />}
        </div>
      </div>
    </div>
  );
};

export default CardBar;
