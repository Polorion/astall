import { createSlice } from "@reduxjs/toolkit";
import avatar from "../../access/img/avatar.jpg";
import ragnaros from "../../access/img/cards/ragnaros.png";
const ComputerSlice = createSlice({
  name: "Computer",
  initialState: {
    name: "Computer",
    avatar: avatar,
    bookMana: [
      {
        name: "огонь",
        count: 5,
      },
      {
        name: "вода",
        count: 10,
      },
      {
        name: "земля",
        count: 10,
      },
    ],
    hp: 10,
    board: [
      {
        id: 1,
        isBusy: {
          name: "ragnaros",
          spell: null,
          attack: 10,
          price: 5,
          id: 1,
          hp: 10,
          img: ragnaros,
          description:
            "Lorem Ipsum не только успешно пережил без заметных изменений пять веков,  недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
        },
        isAttack: false,
      },
      {
        id: 2,
        isBusy: null,
        isAttack: false,
      },
      {
        id: 3,
        isBusy: {
          name: "ragnaros",
          spell: null,
          attack: 10,
          price: 5,
          id: 1,
          hp: 20,
          img: ragnaros,
          description:
            "Lorem Ipsum не только успешно пережил без заметных изменений пять веков,  недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
        },
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
        return { ...el, isAttack: payload.type };
      });
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

export const { idDamage, deathComputerSlot, setAnimationComputer } =
  ComputerSlice.actions;
export default ComputerSlice.reducer;
