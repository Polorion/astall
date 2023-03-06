import { createSlice } from "@reduxjs/toolkit";
import ragnaros from "../../access/img/cards/ragnaros.png";
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
        cards: [
          {
            name: "ragnaros",
            isActive: false,
            spell: null,
            attack: 10,
            price: 5,
            id: 1,
            hp: 10,
            img: ragnaros,
            description:
              "Lorem Ipsum не только успешно пережил без заметных изменений пять веков,  недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
          },
          {
            name: "ragnaross",
            isActive: false,
            spell: null,
            attack: 10,
            price: 5,
            id: 2,
            hp: 10,
            img: ragnaros,
            description:
              "Lorem Ipsum не только успешно пережил без заметных изменений пять веков,  недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
          },
          {
            name: "ragnaros2s",
            isActive: false,
            spell: null,
            attack: 10,
            price: 5,
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
            price: 5,
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
            price: 5,
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
            price: 5,
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
            price: 5,
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
        cards: [
          {
            name: "ragnaros",
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
            name: "ragnaross",
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
            name: "ragnaros2s",
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
            name: "ragnaros3s",
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
            name: "ragnaros4s",
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
            name: "ragnaros5s",
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
            name: "ragnaros6s",
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
            name: "ragnaros7s",
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
      },
    ],
  },
  reducers: {
    setElement(state, { payload }) {
      state.choiceElement = payload;
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

export const { test, setElement, setActiveCard, setActive } =
  SpellBookSlice.actions;
export default SpellBookSlice.reducer;
