import { Difficulty } from "./difficulty";

export interface Recipe {
    id?: number;
    name?: string;
    description?: string;
    duration?: number | string;
    visibility?: string;
    difficulty?: Difficulty;
    instruction?: string;
}