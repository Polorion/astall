import * as React from "react";
import S from "./SpellElement.module.scss";
import { useDispatch } from "react-redux";
import { setActiveCard, setElement } from "../../../store/redux/SpellBookSlice";
import { useEffect, useRef, useState } from "react";

const SpellElement = ({ Element, name, mana, enemy }) => {
  const refMana = useRef(mana);
  const [addMana, setAddMana] = useState({ mana: mana, visible: false });
  const [subMana, setSubMana] = useState({ mana: mana, visible: false });
  useEffect(() => {
    if (refMana.current > mana) {
      setSubMana({ mana: refMana.current - mana, visible: true });
      setTimeout(() => {
        setSubMana({ mana: 0, visible: false });
      }, 2000);
    }
    if (refMana.current < mana) {
      setAddMana({ mana: mana - refMana.current, visible: true });
      setTimeout(() => {
        setAddMana({ mana: 0, visible: false });
      }, 2000);
    }
    refMana.current = mana;
  }, [mana]);
  const dispatch = useDispatch();
  const handler = () => {
    {
      !enemy && dispatch(setElement(name));
      dispatch(setActiveCard(null));
    }
  };
  return (
    <div className={`${S.bottomPanel} ${enemy && S.enemy}`}>
      <div className={S.imgName}>
        <div className={S.bodyLeft} onClick={handler}>
          <div className={S.img}>
            <Element />
          </div>
          {!enemy && <div className={S.name}>{name}</div>}
        </div>
      </div>
      <div className={S.manaSpell}>
        <p>{mana}</p>
        {addMana.visible && (
          <div className={`${S.setMana} ${S.green}`}>+ {addMana.mana}</div>
        )}
        {subMana.visible && (
          <div className={`${S.setMana} ${S.red}`}>- {subMana.mana}</div>
        )}
      </div>
    </div>
  );
};

export default SpellElement;
