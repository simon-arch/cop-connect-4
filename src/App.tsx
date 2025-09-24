import Board from "./components/Board/Board.tsx";
import {useState} from "react";
import { rows, cols } from "./config/constants.ts";
import type {CellOwner} from "./types/CellOwner.ts";

// TODO: Variable grid size (?)

// @ts-ignore : currently unused on purpose
const getEmptyGrid = (): CellOwner[][] =>
    Array(rows)
        .fill(null)
        .map(() => Array(cols)
            .fill("NN"));

const getCustomGrid = (): CellOwner[][] => {
  return [
    ["NN", "NN", "NN", "NN", "NN", "NN", "NN"],
    ["NN", "NN", "NN", "NN", "NN", "NN", "NN"],
    ["NN", "NN", "NN", "NN", "NN", "NN", "NN"],
    ["NN", "NN", "NN", "NN", "NN", "NN", "NN"],
    ["NN", "NN", "NN", "NN", "NN", "NN", "NN"],
    ["NN", "NN", "NN", "NN", "NN", "NN", "NN"],
  ];
};

function App() {
  const [grid, setGrid] = useState(getCustomGrid());

  return (
      <Board grid={grid}/>
  )
}

export default App
