import { createSlice } from "@reduxjs/toolkit";
import ragnaros from "../../access/img/cards/ragnaros.png";
import goblin from "../../access/img/cards/fire/goblin.png";
import fireWall from "../../access/img/cards/fire/fireWall.png";
import firePriest from "../../access/img/cards/fire/firePrist.png";
import redDragon from "../../access/img/cards/fire/redDragon.png";
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
            element: "огонь",
            actionOnStart: null,
            actionOnDeath: null,
            actionOnEnd: "damageThisUnit",
            actionDamage: 2,
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
            element: "огонь",
            actionOnStart: "damageAll",
            actionDamage: 5,
            actionOnEnd: null,
            actionOnDeath: null,
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
            name: "Жрец Огня",
            isActive: false,
            spell: null,
            element: "огонь",
            actionOnStart: "addFireMana",
            actionOnEnd: null,
            actionOnDeath: "subFireMana",
            actionDamage: 1,
            attack: 3,
            price: 3,
            id: 3,
            hp: 13,
            img: firePriest,
            description:
              "\t\n" +
              "Жрец огня\n" +
              "Огненное существо, стоимость 3\n" +
              "Атака 3, жизнь 13\n" +
              "Жрец огня увеличивает на 1\n" +
              "прирост Силы Огня хозяина.",
          },
          {
            name: "Огненный дракончик",
            isActive: false,
            spell: null,
            element: "огонь",
            actionOnStart: "addFireMana",
            actionOnEnd: null,
            actionOnDeath: "subFireMana",
            actionDamage: 1,
            attack: 3,
            price: 3,
            id: 4,
            hp: 13,
            img: redDragon,
            description:
              "\t\n" +
              "Огненный дракончик\n" +
              "Огненное существо, стоимость 4\n" +
              "Атака 4, жизнь 18\n" +
              "Огненный дракончик атакует\n" +
              "на том же ходу, что и призван.",
          },
          {
            name: "ragnaros4s",
            isActive: false,
            spell: null,
            element: "огонь",
            actionOnStart: "damageOwner",
            actionOnEnd: null,
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
            element: "огонь",
            actionOnStart: "damageOwner",
            actionOnEnd: null,
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
            element: "огонь",
            actionOnStart: "damageOwner",
            actionOnEnd: null,
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
            element: "огонь",
            actionOnStart: "damageOwner",
            actionOnEnd: null,
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
            element: "вода",
            actionOnStart: null,
            actionOnEnd: null,
            price: 5,
            id: 11,
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
            id: 12,
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
            id: 13,
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
            id: 14,
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
            id: 15,
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
            id: 16,
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
            id: 17,
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
            id: 18,
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
    setManaBook(state, { payload }) {
      console.log(payload);
      state.book = state.book.map((el) => {
        if (el.name === payload.card.element) {
          if (payload.type === "add") {
            return { ...el, addMana: el.addMana + payload.card.actionDamage };
          } else {
            return { ...el, addMana: el.addMana - payload.card.actionDamage };
          }
        } else {
          return el;
        }
      });
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
  },
});

export const {
  setElement,
  setActiveCard,
  setManaBook,
  setManaElement,
  addMana,
} = SpellBookSlice.actions;
export default SpellBookSlice.reducer;
