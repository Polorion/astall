import * as React from "react";
import S from "./EnemyBar.module.scss";
import Board from "../Board/Board";
import SpellElement from "../CardBar/SpellElement/SpellElement";
import { ReactComponent as Fire } from "../../access/img/fireIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import MyButton from "../MyButton/MyButton";
import { ReactComponent as Next } from "../../access/img/next.svg";
import { ReactComponent as Burger } from "../../access/img/burger.svg";
import {
  damageIsOwner,
  damageOwner,
  setActive,
  setAnimationPlayer,
  setFalseAnimation,
} from "../../store/redux/PlayerSlice";
import { useEffect, useRef, useState } from "react";
import { addMana } from "../../store/redux/SpellBookSlice";
import {
  addManaComputer,
  setAnimationComputer,
  setFalseAnimationComputer,
} from "../../store/redux/ComputerSlice";
import helperEndAction from "../../helpers/HeplerEndAction";

const EnemyBar = ({ enemy, owner }) => {
  const dispatch = useDispatch();
  const allCardPlayer = useSelector((state) => state.player.board);
  const allCardComputer = useSelector((state) => state.computer.board);
  const refHPOwner = useRef();
  const [damageOwner, setDamageOwner] = useState();
  const allCardInBoardPlayer = useSelector((state) => state.player.board);
  const endRoundHandlerPlayer = () => {
    allCardInBoardPlayer.map((el) => {
      if (el.isBusy && el.isBusy.actionOnEnd) {
        helperEndAction(el, dispatch);
      }
    });
  };
  useEffect(() => {
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
    allCardPlayer.map((el, i) => {
      if (!el.isBusy) {
        numberEmptyCarInBoard = numberEmptyCarInBoard + 1;
      } else {
        numberActiveCarInBoard += 1;
        if (el.isBusy.isActive) {
          setTimeout(() => {
            dispatch(setAnimationPlayer({ id: el.id, type: true }));
          }, 1000 * i - numberEmptyCarInBoard * 1000);
        } else {
          setTimeout(() => {
            dispatch(setActive({ id: el.id, type: true }));
          }, 1000 * i - numberEmptyCarInBoard * 1000);
        }
      }
    });
    setTimeout(() => {
      dispatch(setFalseAnimation());
      endRoundHandlerPlayer();
      dispatch(addMana());
    }, numberActiveCarInBoard * 1000);
  };
  const handlerComputer = () => {
    let numberEmptyCarInBoard = 0;
    let numberActiveCarInBoard = 0;
    allCardComputer.map((el, i) => {
      if (!el.isBusy) {
        numberEmptyCarInBoard = numberEmptyCarInBoard + 1;
      } else {
        numberActiveCarInBoard += 1;
        setTimeout(() => {
          dispatch(setAnimationComputer({ id: el.id, type: true }));
        }, 1000 * i - numberEmptyCarInBoard * 1000);
      }
    });
    setTimeout(() => {
      dispatch(setFalseAnimationComputer());
    }, numberActiveCarInBoard * 1000);
    dispatch(addManaComputer());
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
            {enemy && <MyButton Img={Burger} action={handlerComputer} />}
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

            <Board
              enemy={enemy}
              board={owner.board}
              allCardPlayer={allCardPlayer}
              allCardComputer={allCardComputer}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnemyBar;
