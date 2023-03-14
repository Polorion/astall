import { createSlice } from "@reduxjs/toolkit";
import avatar from "../../access/img/avatar.jpg";
import ragnaros from "../../access/img/cards/ragnaros.png";
import goblin from "../../access/img/cards/fire/goblin.png";
import fireWall from "../../access/img/cards/fire/fireWall.png";
const ComputerSlice = createSlice({
  name: "Computer",
  initialState: {
    name: "Computer",
    avatar: avatar,
    bookMana: [
      {
        name: "огонь",
        count: 5,
        addMana: 1,
      },
      {
        name: "вода",
        count: 10,
        addMana: 1,
      },
      {
        name: "земля",
        count: 10,
        addMana: 1,
      },
    ],
    hp: 10,
    board: [
      {
        id: 1,
        isBusy: {
          name: "Гоблин берсеркер",
          isActive: false,
          spell: null,
          element: "огонь",
          actionOnStart: null,
          actionOnEnd: "damageThisUnit",
          actionDamage: 2,
          attack: 114,
          price: 1,
          id: 1,
          hp: 16,
          img: goblin,
          description:
            "Гоблин берсеркер\n" +
            "Огненное существо, стоимость 1\n" +
            "Атака 4, жизнь 16\n" +
            "Гоблин берсеркер каждый ход наносит\n" +
            "2 урона соседним существам хозяина.",
        },
        isAttack: false,
      },
      {
        id: 2,
        isBusy: {
          name: "Стена огня",
          isActive: false,
          spell: null,
          element: "огонь",
          actionOnStart: "damageOwner",
          actionOnEnd: null,
          attack: 110,
          price: 2,
          id: 2,
          hp: 1115,
          img: fireWall,
          description:
            "Огненное существо, стоимость 2\n" +
            "Атака 0, жизнь 5\n" +
            "Когда стена огня призвана,\n" +
            "она наносит 5 урона всем\n" +
            "существам противника.",
        },
        isAttack: false,
      },
      {
        id: 3,
        isBusy: null,
        isAttack: false,
      },
      {
        id: 4,
        isBusy: null,
        isAttack: false,
      },
      {
        id: 5,
        isBusy: null,
        isAttack: false,
      },
    ],
  },
  reducers: {
    setAnimationComputer(state, { payload }) {
      state.board = state.board.map((el) => {
        if (el.id === payload.id) {
          return { ...el, isAttack: payload.type };
        } else {
          return el;
        }
      });
    },

    setFalseAnimationComputer(state, { payload }) {
      state.board = state.board.map((el) => {
        return { ...el, isAttack: false };
      });
    },
    damageAll(state, { payload }) {
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
    damageComputerOwner(state, { payload }) {
      state.hp -= payload;
    },
    idDamage(state, { payload }) {
      state.board = state.board.map((el) => {
        if (el.id === payload.id && el.isBusy === null) {
          state.hp = state.hp - payload.attack;
        }
        if (el.id === payload.id && el.isBusy) {
          return {
            ...el,
            isBusy: { ...el.isBusy, hp: el.isBusy.hp - payload.attack },
          };
        } else {
          return el;
        }
      });
    },
    addManaComputer(state, { payload }) {
      state.bookMana = state.bookMana.map((el) => {
        return { ...el, count: el.count + el.addMana };
      });
    },
    damageMeteor(state, { payload }) {
      state.board = state.board.map((el) => {
        if (el.isBusy) {
          return {
            ...el,
            isBusy: {
              ...el.isBusy,
              hp:
                el.id === payload.id
                  ? el.isBusy.hp - payload.actionOne
                  : el.isBusy.hp - payload.actionTwo,
            },
          };
        } else {
          return el;
        }
      });
    },
    deathComputerSlot(state, { payload }) {
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
  },
});

export const {
  idDamage,
  deathComputerSlot,
  setAnimationComputer,
  setFalseAnimationComputer,
  addManaComputer,
  damageAll,
  damageMeteor,
  damageComputerOwner,
} = ComputerSlice.actions;
export default ComputerSlice.reducer;
