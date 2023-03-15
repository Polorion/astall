import * as React from "react";
import {
  setManaComputer,
  damageAll,
  damageComputerOwner,
  damageMeteor,
} from "../store/redux/ComputerSlice";
import { damageAllOwner, damageIsOwner } from "../store/redux/PlayerSlice";
import { addMana } from "../store/redux/SpellBookSlice";
import { calculatePercentage } from "./calculatePercentage";

const helperSpellActionComputer = (
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
  const fireMana = bookMana.filter((el) => el.name === "огонь")[0].count;
  switch (card.actionSpell) {
    case "fireWave":
      dispatch(
        damageAll(
          calculatePercentage(
            card.actionDamageSpell,
            50 * countMagicDragonInBoard
          )
        )
      );
      return;
    case "acidRain":
      dispatch(
        damageAll(
          calculatePercentage(
            card.actionDamageSpell,
            50 * countMagicDragonInBoard
          )
        )
      );
      dispatch(
        damageAllOwner(
          calculatePercentage(
            card.actionDamageSpell,
            50 * countMagicDragonInBoard
          )
        )
      );
      dispatch(setManaComputer());
      return;
    case "armageddonAction":
      dispatch(
        damageAll(
          calculatePercentage(fireMana + 11, 50 * countMagicDragonInBoard)
        )
      );
      dispatch(
        damageAllOwner(
          calculatePercentage(fireMana + 11, 50 * countMagicDragonInBoard)
        )
      );
      dispatch(
        damageComputerOwner(
          calculatePercentage(fireMana + 11, 50 * countMagicDragonInBoard)
        )
      );

      return;
    case "meteorite":
      if (board[id - 1].isBusy) {
        dispatch(
          damageMeteor({
            actionOne: calculatePercentage(
              card.actionDamageSpell[0],
              50 * countMagicDragonInBoard
            ),
            actionTwo: calculatePercentage(
              card.actionDamageSpell[1],
              50 * countMagicDragonInBoard
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

export default helperSpellActionComputer;
