import { Difficulty } from "./models/difficulty";

export const BASE_URL = 'http://localhost:4200';

export const DifficultyToOptions = [
    {
      value: Difficulty.EASY,
      label: "Facile"
    },

    {
      value: Difficulty.MEDIUM,
      label: "Moyen"
    },

    {
      value: Difficulty.DIFFICULT,
      label: "Difficile"
    }  
  ];