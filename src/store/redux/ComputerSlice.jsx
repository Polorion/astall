import { createSlice } from "@reduxjs/toolkit";
import avatar from "../../access/img/avatar.jpg";
import ragnaros from "../../access/img/cards/ragnaros.png";
import frozenFairy from "../../access/img/cards/water/frozenFairy.png";
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
        spellImmunity: false,
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
        spellImmunity: false,
      },
      {
        id: 3,
        isBusy: {
          name: "Замершая фея",
          isActive: false,
          type: "card",
          element: "вода",
          focus: "owner",
          actionOnStart: "waterDefenderAction",
          actionOnDeath: null,
          actionOnEnd: null,
          actionSpell: null,
          actionIncreaseMana: 2,
          actionDamageSpell: null,
          dependsOnMana: false,
          actionDamage: null,
          spellImmunity: true,
          attack: 4,
          price: 4,
          id: 16,
          hp: 12,
          img: frozenFairy,
          description:
            "\t\n" +
            "Замершая фея\n" +
            "Водное существо, стоимость 4\n" +
            "Атака 4, жизнь 12\n" +
            "Замершая фея не получает урона\n" +
            "от заклинаний и способностей существ.",
        },
        isAttack: false,
        spellImmunity: true,
      },
      {
        id: 4,
        isBusy: null,
        isAttack: false,
        spellImmunity: false,
      },
      {
        id: 5,
        isBusy: null,
        isAttack: false,
        spellImmunity: false,
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
        if (el.isBusy && !el.spellImmunity) {
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
    setManaComputer(state, { payload }) {
      state.bookMana = state.bookMana.map((el) => {
        if (payload === "add") {
          return { ...el, count: el.count + el.addMana };
        } else {
          return { ...el, count: el.count - el.addMana };
        }
      });
    },
    damageMeteor(state, { payload }) {
      state.board = state.board.map((el) => {
        if (el.isBusy && !el.spellImmunity) {
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
    setAllManaBookComputer(state, { payload }) {
      console.log(payload);
      state.bookMana = state.bookMana.map((el) => {
        if (payload.type === "add") {
          return {
            ...el,
            addMana: el.addMana - payload.card.actionDamage,
          };
        } else {
          return {
            ...el,
            addMana: el.addMana + payload.card.actionDamage,
          };
        }
      });
    },

    damageOneUnit(state, { payload }) {
      console.log(payload);
      state.board = state.board.map((el) => {
        if (el.id === payload.id) {
          return {
            ...el,
            isBusy: { ...el.isBusy, hp: (el.isBusy.hp -= payload.damage) },
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
  setManaComputer,
  damageAll,
  damageMeteor,
  damageComputerOwner,
  setAllManaBookComputer,
  damageOneUnit,
} = ComputerSlice.actions;
export default ComputerSlice.reducer;
