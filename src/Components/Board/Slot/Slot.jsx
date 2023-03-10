import * as React from "react";
import S from "../Board.module.scss";
import { useEffect, useRef, useState } from "react";
import stub from "../../../access/img/zaglushka.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  deathComputerSlot,
  idDamage,
} from "../../../store/redux/ComputerSlice";
import {
  deathSlot,
  idDamageComputer,
  setInfoCard,
} from "../../../store/redux/PlayerSlice";

export const Slot = React.memo(
  (props) => {
    const [damageCard, setDamageCard] = useState();

    const refHP = useRef();
    const dispatch = useDispatch();
    useEffect(() => {
      if (props.el.isAttack && props.el.isBusy !== null && !props.enemy) {
        dispatch(idDamage({ id: props.el.id, attack: props.el.isBusy.attack }));
      }
      if (props.el.isAttack && props.el.isBusy !== null && props.enemy) {
        dispatch(
          idDamageComputer({ id: props.el.id, attack: props.el.isBusy.attack })
        );
      }
    }, [props.el.isAttack]);
    useEffect(() => {
      if (props.el.isBusy?.hp <= 0) {
        setTimeout(() => {
          if (!props.enemy) {
            dispatch(deathSlot(props.el.id));
          } else {
            dispatch(deathComputerSlot(props.el.id));
          }
        }, 1000);
      }

      if (refHP.current > props.el.isBusy?.hp) {
        setDamageCard({
          damage: refHP.current - props.el.isBusy?.hp,
          isDamage: true,
        });
        setTimeout(() => {
          setDamageCard({
            damage: 0,
            isDamage: false,
          });
        }, 2000);
      }
      refHP.current = props.el.isBusy?.hp;
    }, [props.el.isBusy?.hp]);

    if (!props.el.isBusy) {
      return (
        <div
          className={S.slot}
          onClick={() => {
            props.handler(props.el.id, props.el.isBusy?.actionOnStart);
          }}
        >
          <img className={S.oneBG} src={stub} alt="" />
          <div className={S.empty}>Слот{props.el.id}</div>
        </div>
      );
    }
    return (
      <div
        onClick={() => {
          dispatch(setInfoCard(props.el.isBusy));
        }}
        className={`${S.slot} ${props.el.isAttack && !props.enemy && S.go}
         ${props.el.isAttack && props.enemy && S.goComputer}  `}
      >
        <img className={S.twoBG} src={props.el.isBusy.img} alt="" />
        <div className={`${S.hp} ${S.box}`}>{props.el.isBusy.hp}</div>
        <div className={`${S.damage} ${S.box}`}>{props.el.isBusy.attack}</div>
        <div className={`${S.mana} ${S.box}`}>{props.el.isBusy.price}</div>

        {damageCard?.isDamage && (
          <div className={`${S.damageHP} ${S.subHP}`}>{damageCard.damage}</div>
        )}
      </div>
    );
  },
  (prev, next) => {
    if (
      next.el.isBusy === prev.el.isBusy &&
      next.el.isAttack === prev.el.isAttack
    ) {
      return true;
    } else {
      return false;
    }
  }
);