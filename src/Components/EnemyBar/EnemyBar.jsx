import * as React from "react";
import S from "./EnemyBar.module.scss";
import Board from "../Board/Board";
import SpellElement from "../CardBar/SpellElement/SpellElement";
import { ReactComponent as Fire } from "../../access/img/fireIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import MyButton from "../MyButton/MyButton";
import { ReactComponent as Next } from "../../access/img/next.svg";
import { ReactComponent as Burger } from "../../access/img/burger.svg";
import { setAnimation, setFalseAnimation } from "../../store/redux/PlayerSlice";
import { useEffect, useRef, useState } from "react";

const EnemyBar = ({ enemy, owner }) => {
  const dispatch = useDispatch();
  const allCard = useSelector((state) => state.player.board);
  const refHPOwner = useRef();
  const [damageOwner, setDamageOwner] = useState();
  useEffect(() => {
    console.log(1);
    if (refHPOwner.current > owner.hp) {
      setDamageOwner({
        damage: refHPOwner.current - owner.hp,
        isDamage: true,
      });
      setTimeout(() => {
        setDamageOwner({
          damage: 0,
          isDamage: false,
        });
      }, 900);
    }
    refHPOwner.current = owner.hp;
  }, [owner.hp]);
  const handler = () => {
    let numberEmptyCarInBoard = 0;
    let numberActiveCarInBoard = 0;
    allCard.map((el, i) => {
      if (!el.isBusy) {
        numberEmptyCarInBoard = numberEmptyCarInBoard + 1;
      } else {
        numberActiveCarInBoard += 1;
        setTimeout(() => {
          dispatch(setAnimation({ id: el.id, type: true }));
        }, 1000 * i - numberEmptyCarInBoard * 1000);
      }
    });
    setTimeout(() => {
      dispatch(setFalseAnimation());
    }, numberActiveCarInBoard * 1000);
  };
  return (
    <div>
      <div className={S.body}>
        <div className={S.avatar}>
          <img src={owner.avatar} alt="" />
          <p>{owner.name}</p>
          <div className={S.hp}>{owner.hp}</div>
          {damageOwner?.isDamage && (
            <div className={`${S.damageHP} ${S.subHP}`}>
              {damageOwner.damage}
            </div>
          )}
        </div>

        <div className={S.boardBody}>
          <div className={S.controlBtn}>
            {!enemy && <MyButton Img={Next} action={handler} />}{" "}
            {!enemy && <MyButton Img={Burger} />}
          </div>

          <div className={S.board}>
            <div className={S.enemyMagick}>
              {enemy &&
                owner.bookMana.map((element) => {
                  return (
                    <SpellElement
                      enemy={enemy}
                      key={element.name}
                      Element={Fire}
                      name={""}
                      mana={element.count}
                    />
                  );
                })}
            </div>

            <Board enemy={enemy} board={owner.board} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnemyBar;
