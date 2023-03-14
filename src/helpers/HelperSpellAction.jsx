import * as React from "react";
import {
  damageAll,
  damageComputerOwner,
  damageMeteor,
} from "../store/redux/ComputerSlice";
import { damageAllOwner, damageIsOwner } from "../store/redux/PlayerSlice";

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

export default helperSpellAction;

function calculatePercentage(num, percent) {
  return Math.ceil(num + (percent / 100) * num);
}
