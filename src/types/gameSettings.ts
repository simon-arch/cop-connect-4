import type {CellOwner} from "./cellOwner.ts";

export interface GameSettings {
    playAnimations: boolean;
    gridRows: number;
    gridCols: number;
    winSize: number;
    initialPlayer: Exclude<CellOwner, null>
}