import { configureStore } from "@reduxjs/toolkit";
import spellReducer from "./SpellBookSlice";
import PlayerReducer from "./PlayerSlice";
import ComputerSlice from "./ComputerSlice";

export default configureStore({
  reducer: {
    spellBook: spellReducer,
    player: PlayerReducer,
    computer: ComputerSlice,
  },
});
