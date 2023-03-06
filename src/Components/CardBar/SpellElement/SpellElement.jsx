import * as React from "react";
import S from "./SpellElement.module.scss";
import { useDispatch } from "react-redux";
import { setActiveCard, setElement } from "../../../store/redux/SpellBookSlice";

const SpellElement = ({ Element, name, mana, enemy }) => {
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
      </div>
    </div>
  );
};

export default SpellElement;
