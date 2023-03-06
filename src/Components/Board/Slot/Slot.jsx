import * as React from "react";
import S from "../Board.module.scss";
import { useEffect, useRef, useState } from "react";
import stub from "../../../access/img/zaglushka.jpg";
import { useDispatch } from "react-redux";
import {
  deathComputerSlot,
  idDamage,
} from "../../../store/redux/ComputerSlice";
import { current } from "@reduxjs/toolkit";

export const Slot = React.memo(
  (props) => {
    const [isDeath, setIsDeath] = useState(false);
    const [damageCard, setDamageCard] = useState();
    const refHP = useRef();
    const dispatch = useDispatch();
    useEffect(() => {
      if (props.el.isAttack) {
        dispatch(idDamage({ id: props.el.id, attack: props.el.isBusy.attack }));
      }
    }, [props.el.isAttack]);
    useEffect(() => {
      if (props.el.isBusy?.hp <= 0 && props.enemy) {
        setIsDeath(true);
        setTimeout(() => {
          dispatch(deathComputerSlot(props.el.id));
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
            props.handler(props.el.id);
          }}
        >
          <img className={S.oneBG} src={stub} alt="" />
          <div className={S.empty}>Слот{props.el.id}</div>
        </div>
      );
    }
    return (
      <div
        className={`${S.slot} ${props.el.isAttack && S.go} ${
          isDeath && S.death
        } `}
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
