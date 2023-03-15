import { createSlice } from "@reduxjs/toolkit";
import ragnaros from "../../access/img/cards/ragnaros.png";
import goblin from "../../access/img/cards/fire/goblin.png";
import fireWall from "../../access/img/cards/fire/fireWall.png";
import firePriest from "../../access/img/cards/fire/firePrist.png";
import redDragon from "../../access/img/cards/fire/redDragon.png";
import orcWarrior from "../../access/img/cards/fire/orcWarrior.png";
import fireWave from "../../access/img/cards/fire/fireWave.png";
import armageddon from "../../access/img/cards/fire/armagedon.png";
import brogul from "../../access/img/cards/fire/brogul.png";
import magickDragon from "../../access/img/cards/fire/bigDragon.png";
import minotaur from "../../access/img/cards/fire/minotavr.png";
import inferno from "../../access/img/cards/fire/inferno.png";
import fireElemental from "../../access/img/cards/fire/fireElemental.png";
import meditation from "../../access/img/cards/water/meditation.png";
import waterSpirit from "../../access/img/cards/water/waterSpirit.png";
import waterDefender from "../../access/img/cards/water/waterDefender.png";
import frozenFairy from "../../access/img/cards/water/frozenFairy.png";
import seaSage from "../../access/img/cards/water/seaSage.png";
import iceGuard from "../../access/img/cards/water/iceGuard.png";
import seaTank from "../../access/img/cards/water/seaTank.png";
import acidRain from "../../access/img/cards/water/asidRain.png";
import waterCommander from "../../access/img/cards/water/seaComandor.png";
import waterElemental from "../../access/img/cards/water/waterElemental.png";
const SpellBookSlice = createSlice({
  name: "typeBook",
  initialState: {
    choiceElement: "огонь",
    choiceCard: null,
    book: [
      {
        name: "огонь",
        count: 100,
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
            focus: "computer",
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
            focus: "computer",
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
            name: "Армагеддон",
            isActive: false,
            type: "spell",
            element: "огонь",
            actionOnStart: null,
            actionOnEnd: null,
            actionOnDeath: null,
            focus: "computer",
            actionSpell: "armageddonAction",
            actionDamage: null,
            actionDamageSpell: null,
            attack: 0,
            price: 11,
            img: armageddon,
            id: 0,
            hp: 0,
            description:
              "Армагеддон Огненное заклинание, стоимость 11 Наносит (8+сила Огня мага) урона противнику и всем существам в игре.",
          },
          {
            name: "Магический дракон",
            isActive: false,
            type: "card",
            element: "огонь",
            actionOnStart: "damageAllUnitOwnerAndEnemy",
            actionOnEnd: null,
            actionOnDeath: null,
            actionSpell: null,
            actionDamage: null,
            actionDamageSpell: null,
            attack: 9,
            price: 12,
            img: magickDragon,
            id: 12,
            hp: 40,
            description:
              " Магический дракон Огненное существо, стоимость 12 Атака 9, жизнь 40 Дракон увеличивает на 50% весь урон, нанесенный заклинаниями хозяина.",
          },
        ],
      },
      {
        name: "вода",
        count: 10,
        addMana: 1,
        cards: [
          {
            name: "Медитация",
            isActive: false,
            type: "spell",
            element: "вода",
            focus: "owner",
            actionOnStart: null,
            actionOnDeath: null,
            actionOnEnd: null,
            actionSpell: "meditationAction",
            actionIncreaseMana: 1,
            actionDamageSpell: null,
            dependsOnMana: false,
            actionDamage: null,
            attack: 0,
            price: 1,
            id: 13,
            hp: 0,
            img: meditation,
            description:
              "\t\n" +
              "Медитация\n" +
              "Водное заклинание, стоимость 1\n" +
              "Увеличивает магу силу Огня,\n" +
              "Воздуха и Земли на 1.",
          },
          {
            name: "Водный дух",
            isActive: false,
            type: "card",
            element: "вода",
            focus: "owner",
            actionOnStart: null,
            actionOnDeath: null,
            actionOnEnd: "waterSpiritAction",
            actionSpell: null,
            actionIncreaseMana: null,
            actionDamageSpell: null,
            dependsOnMana: false,
            actionDamage: 2,
            attack: 5,
            price: 2,
            id: 14,
            hp: 22,
            img: waterSpirit,
            description:
              "\t\n" +
              "Водный дух\n" +
              "Водное существо, стоимость 2\n" +
              "Атака 5, жизнь 22\n" +
              "Водный дух наносит 2 урона\n" +
              "хозяину каждый ход.",
          },
          {
            name: "Водный страж",
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
            attack: 3,
            price: 3,
            id: 15,
            hp: 10,
            img: waterDefender,
            description:
              "\t\n" +
              "Водный страж\n" +
              "Водное существо, стоимость 3\n" +
              "Атака 3, жизнь 10\n" +
              "Когда Водный страж призван, он\n" +
              "увеличивает Силу Огня хозяина на 2.",
          },
          {
            name: "Замершая фея",
            isActive: false,
            type: "card",
            element: "вода",
            focus: "owner",
            actionOnStart: "frozenFairy",
            actionOnDeath: "frozenFairy",
            actionOnEnd: null,
            actionSpell: null,
            actionIncreaseMana: null,
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
          {
            name: "Морской мудрец",
            id: 17,
            isActive: false,
            type: "card",
            element: "вода",
            focus: "owner",
            actionOnStart: "seaSageAction",
            actionOnDeath: "seaSageAction",
            actionOnEnd: null,
            actionSpell: null,
            actionIncreaseMana: 1,
            actionDamageSpell: null,
            dependsOnMana: false,
            actionDamage: null,
            spellImmunity: false,
            attack: 3,
            price: 5,
            hp: 16,
            img: seaSage,
            description:
              "\t\n" +
              "Морской мудрец\n" +
              "Водное существо, стоимость 5\n" +
              "Атака 3, жизнь 16\n" +
              "Мерфолк мудрец увеличивает прирост\n" +
              "Силы Воздуха хозяина на 1.",
          },
          {
            name: "Ледяной страж",
            id: 18,
            isActive: false,
            type: "card",
            element: "вода",
            focus: "owner",
            actionOnStart: "iceGuardAction",
            actionOnDeath: "iceGuardAction",
            actionOnEnd: null,
            actionSpell: null,
            actionIncreaseMana: null,
            actionDamageSpell: null,
            dependsOnMana: false,
            actionDamage: 50,
            spellImmunity: false,
            attack: 3,
            price: 6,
            hp: 20,
            img: iceGuard,
            description:
              "\t\n" +
              "Ледяной страж\n" +
              "Водное существо, стоимость 6\n" +
              "Атака 3, жизнь 20\n" +
              "Ледяной страж уменьшает на 50% весь\n" +
              "урон, нанесенный хозяину.",
          },
          {
            name: "Морской броненосец",
            id: 19,
            isActive: false,
            type: "card",
            element: "вода",
            focus: "owner",
            actionOnStart: "seaTankAction",
            actionOnDeath: "seaTankAction",
            actionOnEnd: null,
            actionSpell: null,
            actionIncreaseMana: null,
            actionDamageSpell: null,
            dependsOnMana: false,
            actionDamage: 5,
            spellImmunity: false,
            attack: 5,
            price: 7,
            hp: 16,
            img: seaTank,
            description:
              "\t\n" +
              "Морской броненосец\n" +
              "Водное существо, стоимость 7\n" +
              "Атака 5, жизнь 16\n" +
              "Весь урон, нанесенный по\n" +
              "Морскому броненосцу, уменьшается на 5.",
          },
          {
            name: "Отравленный Дождь",
            id: 20,
            isActive: false,
            type: "spell",
            element: "вода",
            focus: "computer",
            actionOnStart: null,
            actionOnDeath: null,
            actionOnEnd: null,
            actionSpell: "acidRain",
            actionIncreaseMana: 1,
            actionDamageSpell: 15,
            dependsOnMana: false,
            actionDamage: null,
            spellImmunity: false,
            attack: 0,
            price: 8,
            hp: 0,
            img: acidRain,
            description:
              "Отравленный Дождь Водное заклинание, стоимость 8\n" +
              "Наносит 15 урона по всем существам.\n" +
              "Уменьшает на 1 все Силы соперника.",
          },
          {
            name: "Подводный командир",
            id: 21,
            isActive: false,
            type: "card",
            element: "вода",
            focus: "owner",
            actionOnStart: "waterCommander",
            actionOnDeath: "waterCommander",
            actionOnEnd: null,
            actionSpell: null,
            actionIncreaseMana: null,
            actionDamageSpell: null,
            dependsOnMana: false,
            actionDamage: null,
            spellImmunity: false,
            attack: 7,
            price: 9,
            hp: 35,
            img: waterCommander,
            description:
              "Подводный командир Водное существо, стоимость 9 Атака 7, жизнь 35 Мерфолк предводитель позволяет существам хозяина, призванным в соседние слоты, атаковать в том же ходу, в котором они призваны.",
          },
          {
            name: "Элементаль воды",
            isActive: false,
            type: "card",
            element: "вода",
            actionOnStart: "elementalWaterAction",
            actionOnEnd: null,
            actionOnDeath: "elementalWaterAction",
            actionSpell: null,
            actionDamage: 10,
            dependsOnMana: true,
            actionIncreaseMana: 1,
            actionDamageSpell: null,
            attack: 0,
            price: 10,
            img: waterElemental,
            id: 22,
            hp: 37,
            description:
              "Элементаль воды, стоимость 10, атака\n" +
              "равна Силе Воды хозяина, жизнь 37\n" +
              "Когда водный элементаль призван, он\n" +
              "лечит хозяину 10 жизни. Увеличивает\n" +
              "на 1 прирост Силы Воды хозяина.",
          },
        ],
      },
      {
        name: "воздух",
        count: 10,
        addMana: 1,
        cards: [
          {
            name: "Отравленный Дождь",
            id: 20,
            isActive: false,
            type: "spell",
            element: "вода",
            focus: "computer",
            actionOnStart: null,
            actionOnDeath: null,
            actionOnEnd: null,
            actionSpell: "acidRain",
            actionIncreaseMana: 1,
            actionDamageSpell: 15,
            dependsOnMana: false,
            actionDamage: null,
            spellImmunity: false,
            attack: 0,
            price: 8,
            hp: 0,
            img: acidRain,
            description:
              "Отравленный Дождь Водное заклинание, стоимость 8\n" +
              "Наносит 15 урона по всем существам.\n" +
              "Уменьшает на 1 все Силы соперника.",
          },
        ],
      },
    ],
  },
  reducers: {
    setElement(state, { payload }) {
      state.choiceElement = payload;
    },

    setManaBook(state, { payload }) {
      state.book = state.book.map((el) => {
        if (el.name === payload.element) {
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
      if (payload?.type) {
        state.book = state.book.map((el) => {
          if (el.name === payload.type) {
            return el;
          } else {
            return { ...el, count: el.count + el.addMana };
          }
        });
      } else {
        state.book = state.book.map((el) => {
          return { ...el, count: el.count + el.addMana };
        });
      }
    },
    addCurrentMana(state, { payload }) {
      state.book = state.book.map((el) => {
        if (el.name === payload.name) {
          return { ...el, count: el.count + payload.count };
        } else {
          return el;
        }
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
  addCurrentMana,
} = SpellBookSlice.actions;
export default SpellBookSlice.reducer;
