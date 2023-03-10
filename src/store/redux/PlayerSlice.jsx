import { createSlice } from "@reduxjs/toolkit";
import avatar from "../../access/img/avatar.jpg";
import ragnaros from "../../access/img/cards/ragnaros.png";
import goblin from "../../access/img/cards/fire/goblin.png";
import fireWall from "../../access/img/cards/fire/fireWall.png";
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
        isActive: false,
      },
      {
        id: 2,
        isBusy: null,
        isAttack: false,
        isActive: false,
      },
      {
        id: 3,
        isBusy: null,
        isAttack: false,
        isActive: false,
      },
      {
        id: 4,
        isBusy: null,
        isAttack: false,
        isActive: false,
      },
      {
        id: 5,
        isBusy: null,
        isAttack: false,
        isActive: false,
      },
    ],
  },
  reducers: {
    setActive(state, { payload }) {
      state.board = state.board.map((el) => {
        if (el.isBusy) {
          return { ...el, isActive: true };
        } else {
          return el;
        }
      });
    },
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
    damageIsOwner(state, { payload }) {
      console.log(payload);
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
    damageThisUnit(state, { payload }) {
      console.log(payload);
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
  deathSlot,
  damageIsOwner,
  damageThisUnit,
  setActive,
} = PlayerSlice.actions;
export default PlayerSlice.reducer;
