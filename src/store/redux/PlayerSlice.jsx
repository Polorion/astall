import { createSlice } from "@reduxjs/toolkit";
import avatar from "../../access/img/avatar.jpg";
import ragnaros from "../../access/img/cards/ragnaros.png";
const PlayerSlice = createSlice({
  name: "Player",
  initialState: {
    name: "PoloRioN",
    avatar: avatar,
    infoCard: null,
    hp: 10,
    board: [
      {
        id: 1,
        isBusy: null,
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
          hp: 10,
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
    setCardInBoard(state, { payload }) {
      if (payload.activeCard) {
        state.board = state.board.map((el) => {
          if (el.id === payload.id) {
            return { ...el, isBusy: payload.activeCard, animation: false };
          } else {
            return el;
          }
        });
      }
    },
    setInfoCard(state, { payload }) {
      state.infoCard = payload;
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
    setFalseAnimation(state, { payload }) {
      state.board = state.board.map((el) => {
        return { ...el, isAttack: false };
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
} = PlayerSlice.actions;
export default PlayerSlice.reducer;
