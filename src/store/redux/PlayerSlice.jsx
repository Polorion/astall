import { createSlice } from "@reduxjs/toolkit";
import avatar from "../../access/img/avatar.jpg";
import ragnaros from "../../access/img/cards/ragnaros.png";
import goblin from "../../access/img/cards/fire/goblin.png";
import fireWall from "../../access/img/cards/fire/fireWall.png";
import board from "../../Components/Board/Board";
import computerSlice from "./ComputerSlice";
import { calculatePercentage } from "../../helpers/calculatePercentage";
import { calculateDamage } from "../../helpers/calculateDamage";
const PlayerSlice = createSlice({
  name: "Player",
  initialState: {
    name: "PoloRioN",
    avatar: avatar,
    infoCard: null,
    hp: 10,
    defence: 0,
    board: [
      {
        id: 1,
        isBusy: null,
        isAttack: false,
        addDamage: 0,
        defence: 0,
        spellImmunity: false,
        attackFirstRound: false,
        startHP: null,
      },
      {
        id: 2,
        isBusy: null,
        isAttack: false,
        addDamage: 0,
        defence: 0,
        spellImmunity: false,
        attackFirstRound: false,
        startHP: null,
      },
      {
        id: 3,
        isBusy: null,
        isAttack: false,
        addDamage: 0,
        defence: 0,
        spellImmunity: false,
        attackFirstRound: false,
        startHP: null,
      },
      {
        id: 4,
        isBusy: null,
        isAttack: false,
        addDamage: 0,
        defence: 0,
        spellImmunity: false,
        attackFirstRound: false,
        startHP: null,
      },
      {
        id: 5,
        isBusy: null,
        isAttack: false,
        addDamage: 0,
        defence: 0,
        spellImmunity: false,
        attackFirstRound: false,
        startHP: null,
      },
    ],
  },
  reducers: {
    setActive(state, { payload }) {
      state.board = state.board.map((el) => {
        if (el.id === payload.id) {
          return { ...el, isBusy: { ...el.isBusy, isActive: true } };
        } else {
          return el;
        }
      });
    },
    damageFaceOwner(state, { payload }) {
      state.hp -= calculatePercentage(payload, state.defence, false);
    },
    healOwner(state, { payload }) {
      state.hp += payload.hp;
    },
    healUnit(state, { payload }) {
      console.log(payload);
      state.board = state.board.map((el) => {
        if (el.id === payload.id) {
          return {
            ...el,
            isBusy: {
              ...el.isBusy,
              hp:
                el.isBusy.hp + payload.action > el.startHP
                  ? el.startHP
                  : el.isBusy.hp + payload.action,
            },
          };
        } else {
          return el;
        }
      });
    },

    setDefenceOwner(state, { payload }) {
      state.defence = payload;
    },

    addNearbyDamage(state, { payload }) {
      state.board = state.board.map((el) => {
        switch (el.id) {
          case payload.id - 1:
            if (el.isBusy) {
              return {
                ...el,
                addDamage:
                  el.addDamage +
                  (payload.type === "add" ? payload.action : -payload.action),
                isBusy: {
                  ...el.isBusy,
                  attack:
                    el.isBusy.attack +
                    (payload.type === "add" ? payload.action : -payload.action),
                },
              };
            } else {
              return {
                ...el,
                addDamage:
                  el.addDamage +
                  (payload.type === "add" ? payload.action : -payload.action),
              };
            }
          case payload.id + 1:
            if (el.isBusy) {
              return {
                ...el,
                addDamage:
                  el.addDamage +
                  (payload.type === "add" ? payload.action : -payload.action),
                isBusy: {
                  ...el.isBusy,
                  attack:
                    el.isBusy.attack +
                    (payload.type === "add" ? payload.action : -payload.action),
                },
              };
            } else {
              return {
                ...el,
                addDamage:
                  el.addDamage +
                  (payload.type === "add" ? payload.action : -payload.action),
              };
            }

          default:
            return el;
        }
      });
    },
    setCardInBoard(state, { payload }) {
      if (payload.activeCard) {
        state.board = state.board.map((el) => {
          if (el.id === payload.id) {
            const newCard = { ...payload.activeCard };
            newCard.attack = newCard.attack + state.board[el.id - 1].addDamage;
            return {
              ...el,
              startHP: newCard.hp,
              isBusy: newCard,
              animation: false,
            };
          } else {
            return el;
          }
        });
      }
    },
    setInfoCard(state, { payload }) {
      state.infoCard = payload;
    },
    setDamageSlot(state, { payload }) {
      console.log(payload);
      state.board = state.board.map((el) => {
        if (el.id === payload.id) {
          return {
            ...el,

            isBusy: { ...el.isBusy, attack: el.addDamage + payload.action },
          };
        } else {
          return el;
        }
      });
    },
    damageIsOwner(state, { payload }) {
      state.board = state.board.map((el) => {
        if (el.id === payload.id && el.isBusy) {
          return {
            ...el,
            isBusy: { ...el.isBusy, hp: el.isBusy.hp - payload.damage },
          };
        } else {
          return el;
        }
      });
    },
    deathSlot(state, { payload }) {
      state.board = state.board.map((el) => {
        if (el.id === payload) {
          return {
            ...el,
            isBusy: null,
          };
        } else {
          return el;
        }
      });
    },
    damageAllOwner(state, { payload }) {
      state.board = state.board.map((el) => {
        if (el.isBusy) {
          return {
            ...el,
            isBusy: { ...el.isBusy, hp: el.isBusy.hp - payload },
          };
        } else {
          return el;
        }
      });
    },
    setAnimationPlayer(state, { payload }) {
      state.board = state.board.map((el) => {
        if (el.id === payload.id) {
          return { ...el, isAttack: payload.type };
        } else {
          return el;
        }
      });
    },
    idDamageComputer(state, { payload }) {
      state.board = state.board.map((el) => {
        if (el.id === payload.id && el.isBusy === null) {
          state.hp =
            state.hp -
            calculatePercentage(payload.attack, state.defence, false);
        }
        if (el.id === payload.id && el.isBusy) {
          return {
            ...el,
            isBusy: {
              ...el.isBusy,
              hp: el.isBusy.hp - calculateDamage(payload.attack, el.defence),
            },
          };
        } else {
          return el;
        }
      });
    },
    damageThisUnit(state, { payload }) {
      state.board = state.board.map((el) => {
        if (el.id === payload.id - 1 && el.isBusy) {
          return {
            ...el,
            isBusy: { ...el.isBusy, hp: el.isBusy.hp - payload.damage },
          };
        } else if (el.id === payload.id + 1 && el.isBusy) {
          return {
            ...el,
            isBusy: { ...el.isBusy, hp: el.isBusy.hp - payload.damage },
          };
        } else {
          return el;
        }
      });
    },
    setDamageAllUnits(state, { payload }) {
      state.board = state.board.map((el) => {
        if (el.isBusy) {
          return {
            ...el,
            addDamage:
              el.addDamage +
              (payload.type === "add" ? payload.action : -payload.action),
            isBusy: {
              ...el.isBusy,
              attack:
                el.isBusy.attack +
                (payload.type === "add" ? payload.action : -payload.action),
            },
          };
        } else {
          return {
            ...el,
            addDamage:
              el.addDamage +
              (payload.type === "add" ? payload.action : -payload.action),
          };
        }
      });
    },
    setFalseAnimation(state, { payload }) {
      state.board = state.board.map((el) => {
        return { ...el, isAttack: false };
      });
    },
    setDefenceSlot(state, { payload }) {
      state.board = state.board.map((el) => {
        if (el.id === payload.id) {
          if (payload.type === "add") {
            return { ...el, defence: el.defence + payload.defence };
          } else {
            console.log(payload.defence);
            return { ...el, defence: el.defence - payload.defence };
          }
        } else {
          return el;
        }
      });
    },
    setSpellImmunity(state, { payload }) {
      console.log(payload);
      state.board = state.board.map((el) => {
        if (el.id === payload.id) {
          return { ...el, spellImmunity: payload.type };
        } else {
          return el;
        }
      });
    },
    respawnUnit(state, { payload }) {
      console.log(state.board);
      state.board = state.board.map((el) => {
        if (el.id === payload) {
          return { ...el, isBusy: { ...el.isBusy, hp: el.startHP } };
        } else {
          return el;
        }
      });
    },
    setGoToAttack(state, { payload }) {
      state.board = state.board.map((el) => {
        if (el.id === payload.id - 1) {
          return { ...el, attackFirstRound: payload.type };
        }
        if (el.id === payload.id + 1) {
          return { ...el, attackFirstRound: payload.type };
        } else {
          return el;
        }
      });
    },
  },
});

export const {
  setCardInBoard,
  setAnimationPlayer,
  setFalseAnimation,
  setInfoCard,
  idDamageComputer,
  deathSlot,
  damageIsOwner,
  damageThisUnit,
  addNearbyDamage,
  setActive,
  setDamageAllUnits,
  damageAllOwner,
  setDamageSlot,
  damageFaceOwner,
  setDefenceOwner,
  setSpellImmunity,
  setDefenceSlot,
  setGoToAttack,
  healOwner,
  respawnUnit,
  healUnit,
} = PlayerSlice.actions;
export default PlayerSlice.reducer;
