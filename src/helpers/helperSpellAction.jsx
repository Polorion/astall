import * as React from "react";
import {
  setManaComputer,
  damageAll,
  damageComputerOwner,
  damageMeteor,
  damageOneUnit,
  damageAllSpell,
  killUnit,
} from "../store/redux/ComputerSlice";
import { damageAllOwner, damageIsOwner } from "../store/redux/PlayerSlice";
import { addMana } from "../store/redux/SpellBookSlice";
import { calculatePercentage } from "./calculatePercentage";

const helperSpellAction = (
  card,
  board,
  id,
  dispatch,
  bookMana,
  allCardPlayer
) => {
  const countMagicDragonInBoard = allCardPlayer.filter(
    (el) => el.isBusy?.name === "Магический дракон"
  ).length;
  const countSmallFairy = allCardPlayer.filter(
    (el) => el.isBusy?.name === "Маленькая фея"
  ).length;
  const fireMana = bookMana.filter((el) => el.name === "огонь")[0].count;
  const windMana = bookMana.filter((el) => el.name === "воздух")[0].count;
  switch (card.actionSpell) {
    case "meditationAction":
      dispatch(
        addMana({
          action: card.actionIncreaseMana,
          type: "вода",
        })
      );
      return;
    case "tornadoAction":
      dispatch(killUnit({ id }));
      return;

    case "fireWave":
      dispatch(
        damageAllSpell(
          calculatePercentage(
            card.actionDamageSpell,
            50 * countMagicDragonInBoard,
            countSmallFairy
          )
        )
      );
      return;
    case "chainLightningAction":
      dispatch(
        damageAllSpell(
          calculatePercentage(
            card.actionDamageSpell,
            50 * countMagicDragonInBoard,
            countSmallFairy
          )
        )
      );
      dispatch(
        damageComputerOwner(
          calculatePercentage(
            card.actionDamageSpell,
            50 * countMagicDragonInBoard,
            countSmallFairy
          )
        )
      );
      return;
    case "lightningStrikeAction":
      dispatch(
        damageComputerOwner(
          calculatePercentage(
            card.actionDamageSpell + windMana,
            50 * countMagicDragonInBoard,
            countSmallFairy
          )
        )
      );
      return;
    case "thunderSpell":
      if (board[id - 1].isBusy) {
        dispatch(
          damageOneUnit({
            id,
            damage: calculatePercentage(
              card.actionDamageSpell,
              50 * countMagicDragonInBoard,
              countSmallFairy
            ),
          })
        );
      }
      dispatch(
        damageComputerOwner(
          calculatePercentage(
            card.actionDamageSpell,
            50 * countMagicDragonInBoard,
            countSmallFairy
          )
        )
      );

      return;
    case "acidRain":
      dispatch(
        damageAllSpell(
          calculatePercentage(
            card.actionDamageSpell,
            50 * countMagicDragonInBoard,
            countSmallFairy
          )
        )
      );
      dispatch(
        damageAllOwner(
          calculatePercentage(
            card.actionDamageSpell,
            50 * countMagicDragonInBoard,
            countSmallFairy
          )
        )
      );
      dispatch(setManaComputer());
      return;
    case "armageddonAction":
      dispatch(
        damageAllSpell(
          calculatePercentage(
            fireMana + 11,
            50 * countMagicDragonInBoard,
            countSmallFairy
          )
        )
      );
      dispatch(
        damageAllOwner(
          calculatePercentage(
            fireMana + 11,
            50 * countMagicDragonInBoard,
            countSmallFairy
          )
        )
      );
      dispatch(
        damageComputerOwner(
          calculatePercentage(
            fireMana + 11,
            50 * countMagicDragonInBoard,
            countSmallFairy
          )
        )
      );

      return;
    case "meteorite":
      if (board[id - 1].isBusy) {
        dispatch(
          damageMeteor({
            actionOne: calculatePercentage(
              card.actionDamageSpell[0],
              50 * countMagicDragonInBoard,
              countSmallFairy
            ),
            actionTwo: calculatePercentage(
              card.actionDamageSpell[1],
              50 * countMagicDragonInBoard,
              countSmallFairy
            ),
            id,
          })
        );
      }
      return;
    default:
      return;
  }
};

export default helperSpellAction;
