import { createSlice } from "@reduxjs/toolkit";
import ragnaros from "../../access/img/cards/ragnaros.png";
import goblin from "../../access/img/cards/fire/goblin.png";
import fireWall from "../../access/img/cards/fire/fireWall.png";
import firePriest from "../../access/img/cards/fire/firePrist.png";
import redDragon from "../../access/img/cards/fire/redDragon.png";
import orcWarrior from "../../access/img/cards/fire/orcWarrior.png";
import fireWave from "../../access/img/cards/fire/fireWave.png";
import brogul from "../../access/img/cards/fire/brogul.png";
import minotaur from "../../access/img/cards/fire/minotavr.png";
import inferno from "../../access/img/cards/fire/inferno.png";
import fireElemental from "../../access/img/cards/fire/fireElemental.png";
import water from "../../access/img/cards/WaterElemental.jpg";
const SpellBookSlice = createSlice({
  name: "typeBook",
  initialState: {
    choiceElement: "огонь",
    choiceCard: null,
    book: [
      {
        name: "огонь",
        count: 110,
        addMana: 1,
        cards: [
          {
            name: "Гоблин берсеркер",
            isActive: false,
            type: "card",
            element: "огонь",
            actionOnStart: null,
            actionOnDeath: null,
            actionSpell: null,
            actionDamageSpell: null,
            dependsOnMana: false,
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
            type: "card",
            element: "огонь",
            actionOnStart: "damageAll",
            actionDamage: 5,
            actionOnEnd: null,
            actionSpell: null,
            actionDamageSpell: null,
            actionIncreaseMana: null,
            actionOnDeath: null,
            dependsOnMana: false,
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
            type: "card",
            element: "огонь",
            actionOnStart: "addFireMana",
            actionOnEnd: null,
            actionSpell: null,
            actionDamageSpell: null,
            dependsOnMana: false,
            actionOnDeath: "subFireMana",
            actionDamage: 1,
            actionIncreaseMana: 1,
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
            isActive: true,
            attackFirstRound: true,
            type: "card",
            element: "огонь",
            actionOnStart: null,
            actionOnEnd: null,
            actionSpell: null,
            actionDamageSpell: null,
            actionIncreaseMana: null,
            actionOnDeath: null,
            dependsOnMana: false,
            actionDamage: 1,
            attack: 4,
            price: 3,
            id: 4,
            hp: 18,
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
            name: "Орк предводитель",
            isActive: false,
            type: "card",
            element: "огонь",
            actionOnStart: "addDamageNearby",
            actionOnEnd: null,
            actionSpell: null,
            actionIncreaseMana: null,
            actionDamageSpell: null,
            dependsOnMana: false,
            actionOnDeath: "subDamageNearby",
            actionDamage: 2,
            attack: 3,
            price: 5,
            id: 5,
            hp: 17,
            img: orcWarrior,
            description:
              "Орк предводитель\n" +
              "Огненное существо, стоимость 5\n" +
              "Атака 3, жизнь 17\n" +
              "Орк предводитель увеличивает атаку\n" +
              "соседних существ хозяина на 2.",
          },
          {
            name: "Огненная волна",
            isActive: false,
            type: "spell",
            element: "огонь",
            actionOnStart: null,
            actionOnEnd: null,
            actionOnDeath: null,
            actionIncreaseMana: null,
            actionSpell: "fireWave",
            actionDamage: null,
            dependsOnMana: false,
            actionDamageSpell: 9,
            attack: null,
            price: 6,
            id: 6,
            hp: null,
            img: fireWave,
            description:
              "\t\n" +
              "Огненная волна\n" +
              "Огненное заклинание, стоимость 6\n" +
              "Наносит 9 урона существам противника.",
          },
          {
            name: "Командир минотавров",
            isActive: false,
            type: "card",
            element: "огонь",
            actionOnStart: "addDamageAllUnit",
            actionOnEnd: null,
            actionOnDeath: "subDamageAllUnit",
            actionSpell: null,
            actionIncreaseMana: null,
            dependsOnMana: false,
            actionDamage: 1,
            actionDamageSpell: null,
            attack: 5,
            price: 7,
            id: 7,
            hp: 20,
            img: minotaur,
            description:
              "\t\n" +
              "Командир минотавров\n" +
              "Огненное существо, стоимость 7\n" +
              "Атака 6, жизнь 20\n" +
              "Командир минотавров увеличивает на 1\n" +
              "атаку всех остальных существ хозяина\n" +
              "(кроме стен).",
          },
          {
            name: "Баргул",
            isActive: false,
            type: "card",
            element: "огонь",
            actionOnStart: "damageAllUnitOwnerAndEnemy",
            actionOnEnd: null,
            actionOnDeath: null,
            actionSpell: null,
            actionIncreaseMana: null,
            actionDamage: 4,
            actionDamageSpell: null,
            attack: 8,
            price: 8,
            img: brogul,
            dependsOnMana: false,
            id: 8,
            hp: 26,
            description:
              "Баргул\n" +
              "Огненное существо, стоимость 8\n" +
              "Атака 8, жизнь 26\n" +
              "Когда баргул призван, он наносит\n" +
              "4 урона всем остальным существам.",
          },
          {
            name: "Инферно",
            isActive: false,
            type: "spell",
            element: "огонь",
            actionOnStart: null,
            actionOnEnd: null,
            actionOnDeath: null,
            actionSpell: "meteorite",
            actionDamage: null,
            actionIncreaseMana: null,
            actionDamageSpell: [18, 10],
            attack: 8,
            price: 8,
            img: inferno,
            dependsOnMana: false,
            id: 9,
            hp: 26,
            description:
              "Инферно Огненное заклинание, стоимость 9  Наносит 18 урона выбранному существу     и 10 урона всем остальным  существам противника.",
          },
          {
            name: "Огненный элементаль",
            isActive: false,
            type: "card",
            element: "огонь",
            actionOnStart: "damageAllUnitEnemy",
            actionOnEnd: null,
            actionOnDeath: "subIncreaseMana",
            actionSpell: null,
            actionDamage: 3,
            dependsOnMana: true,
            actionIncreaseMana: 1,
            actionDamageSpell: null,
            attack: 0,
            price: 10,
            img: fireElemental,
            id: 10,
            hp: 37,
            description:
              "Огненное существо, стоимость 10, атака равна силе Огня хозяина, жизнь 37 Когда огненный элементаль призван, он наносит 3 урона противнику и его существам. Увеличивает на 1 прирост Силы Огня хозяина.",
          },
          {
            name: "Баргул2",
            isActive: false,
            type: "card",
            element: "огонь",
            actionOnStart: "damageAllUnitOwnerAndEnemy",
            actionOnEnd: null,
            actionOnDeath: null,
            actionSpell: null,
            actionDamage: 4,
            actionDamageSpell: null,
            attack: 8,
            price: 8,
            img: brogul,
            id: 11,
            hp: 26,
            description:
              "Баргул\n" +
              "Огненное существо, стоимость 8\n" +
              "Атака 8, жизнь 26\n" +
              "Когда баргул призван, он наносит\n" +
              "4 урона всем остальным существам.",
          },
          {
            name: "Баргул3",
            isActive: false,
            type: "card",
            element: "огонь",
            actionOnStart: "damageAllUnitOwnerAndEnemy",
            actionOnEnd: null,
            actionOnDeath: null,
            actionSpell: null,
            actionDamage: 4,
            actionDamageSpell: null,
            attack: 8,
            price: 8,
            img: brogul,
            id: 12,
            hp: 26,
            description:
              "Баргул\n" +
              "Огненное существо, стоимость 8\n" +
              "Атака 8, жизнь 26\n" +
              "Когда баргул призван, он наносит\n" +
              "4 урона всем остальным существам.",
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
            type: null,
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
            type: null,
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
            type: null,
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
            type: null,
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
            type: null,
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
            type: null,
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
            type: null,
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
            type: null,
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
            return {
              ...el,
              addMana: el.addMana + payload.card.actionIncreaseMana,
            };
          } else {
            return {
              ...el,
              addMana: el.addMana - payload.card.actionIncreaseMana,
            };
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
