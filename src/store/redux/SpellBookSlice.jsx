import { createSlice } from "@reduxjs/toolkit";
import ragnaros from "../../access/img/cards/ragnaros.png";
import goblin from "../../access/img/cards/fire/goblin.png";
import fireWall from "../../access/img/cards/fire/fireWall.png";
import water from "../../access/img/cards/WaterElemental.jpg";
const SpellBookSlice = createSlice({
  name: "spellBook",
  initialState: {
    choiceElement: "огонь",
    choiceCard: null,
    book: [
      {
        name: "огонь",
        count: 10,
        addMana: 1,
        cards: [
          {
            name: "Гоблин берсеркер",
            isActive: false,
            spell: null,
            attack: 4,
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
          {
            name: "Стена огня",
            isActive: false,
            spell: null,
            attack: 0,
            price: 2,
            id: 2,
            hp: 5,
            img: fireWall,
            description:
              "Огненное существо, стоимость 2\n" +
              "Атака 0, жизнь 5\n" +
              "Когда стена огня призвана,\n" +
              "она наносит 5 урона всем\n" +
              "существам противника.",
          },
          {
            name: "ragnaros2s",
            isActive: false,
            spell: null,
            attack: 10,
            price: 3,
            id: 3,
            hp: 10,
            img: ragnaros,
            description:
              "Lorem Ipsum не только успешно пережил без заметных изменений пять веков,  недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
          },
          {
            name: "ragnaros3s",
            isActive: false,
            spell: null,
            attack: 10,
            price: 4,
            id: 4,
            hp: 10,
            img: ragnaros,
            description:
              "Lorem Ipsum не только успешно пережил без заметных изменений пять веков,  недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
          },
          {
            name: "ragnaros4s",
            isActive: false,
            spell: null,
            attack: 10,
            price: 5,
            id: 5,
            hp: 10,
            img: ragnaros,
            description:
              "Lorem Ipsum не только успешно пережил без заметных изменений пять веков,  недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
          },
          {
            name: "ragnaros5s",
            isActive: false,
            spell: null,
            attack: 10,
            price: 6,
            id: 6,
            hp: 10,
            img: ragnaros,
            description:
              "Lorem Ipsum не только успешно пережил без заметных изменений пять веков,  недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
          },
          {
            name: "ragnaros6s",
            isActive: false,
            spell: null,
            attack: 10,
            price: 7,
            id: 7,
            hp: 10,
            img: ragnaros,
            description:
              "Lorem Ipsum не только успешно пережил без заметных изменений пять веков,  недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
          },
          {
            name: "ragnaros7s",
            isActive: false,
            spell: null,
            attack: 10,
            price: 8,
            img: ragnaros,
            id: 8,
            hp: 10,
            description:
              "Lorem Ipsum не только успешно пережил без заметных изменений пять веков,  недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
          },
        ],
      },
      {
        name: "вода",
        count: 10,
        addMana: 1,
        cards: [
          {
            name: "ragnarosqs",
            isActive: false,
            spell: null,
            attack: 10,
            price: 5,
            id: 1,
            hp: 10,
            img: water,
            description:
              "Lorem Ipsum не только успешно пережил без заметных изменений пять веков,  недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
          },
          {
            name: "ragnarqoss",
            isActive: false,
            spell: null,
            attack: 10,
            price: 5,
            id: 2,
            hp: 10,
            img: water,
            description:
              "Lorem Ipsum не только успешно пережил без заметных изменений пять веков,  недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
          },
          {
            name: "ragnaroqs2s",
            isActive: false,
            spell: null,
            attack: 10,
            price: 5,
            id: 3,
            hp: 10,
            img: water,
            description:
              "Lorem Ipsum не только успешно пережил без заметных изменений пять веков,  недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
          },
          {
            name: "ragnarqos3s",
            isActive: false,
            spell: null,
            attack: 10,
            price: 5,
            id: 4,
            hp: 10,
            img: water,
            description:
              "Lorem Ipsum не только успешно пережил без заметных изменений пять веков,  недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
          },
          {
            name: "ragnarqos4s",
            isActive: false,
            spell: null,
            attack: 10,
            price: 5,
            id: 5,
            hp: 10,
            img: water,
            description:
              "Lorem Ipsum не только успешно пережил без заметных изменений пять веков,  недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
          },
          {
            name: "ragnqaros5s",
            isActive: false,
            spell: null,
            attack: 10,
            price: 5,
            id: 6,
            hp: 10,
            img: water,
            description:
              "Lorem Ipsum не только успешно пережил без заметных изменений пять веков,  недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
          },
          {
            name: "ragqnaros6s",
            isActive: false,
            spell: null,
            attack: 10,
            price: 5,
            id: 7,
            hp: 10,
            img: water,
            description:
              "Lorem Ipsum не только успешно пережил без заметных изменений пять веков,  недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
          },
          {
            name: "ragqnaros7s",
            isActive: false,
            spell: null,
            attack: 10,
            price: 5,
            img: water,
            id: 8,
            hp: 10,
            description:
              "Lorem Ipsum не только успешно пережил без заметных изменений пять веков,  недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
          },
        ],
      },
      {
        name: "земля",
        count: 10,
        addMana: 1,
      },
    ],
  },
  reducers: {
    setElement(state, { payload }) {
      state.choiceElement = payload;
    },
    addMana(state, { payload }) {
      state.book = state.book.map((el) => {
        return { ...el, count: el.count + el.addMana };
      });
    },

    setManaElement(state, { payload }) {
      state.book = state.book.map((el) => {
        if (el.name === payload.name) {
          return {
            ...el,
            count: el.count - payload.count,
          };
        } else {
          return el;
        }
      });
    },
    setActiveCard(state, { payload }) {
      state.choiceCard = payload;
    },
    setActive(state, { payload }) {
      state.book = state.book.map((el) => {
        if (el.name === payload.element) {
          return el;
        } else {
          return el;
        }
      });
    },

    test(state, action) {},
  },
});

export const {
  test,
  setElement,
  setActiveCard,
  setActive,
  setManaElement,
  addMana,
} = SpellBookSlice.actions;
export default SpellBookSlice.reducer;
