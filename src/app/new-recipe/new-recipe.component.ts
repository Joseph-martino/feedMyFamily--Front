import { Component, OnInit } from '@angular/core';
import { Difficulty } from '../models/difficulty';
import { Recipe } from '../models/recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss']
})
export class NewRecipeComponent implements OnInit {

  recipe!: Recipe;
  difficultyToOptions!: {
    value: Difficulty;
    label: string;
  }[];

  constructor(private recipeService: RecipeService) {
    this.recipe = {
      visibility: 'public'
    };
    this.difficultyToOptions = [
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
   }

  ngOnInit(): void {
  }

  onChangeDuration(e: Event){
    const target = e.target as HTMLInputElement;
    this.recipe.duration = target.value;
  }

  onChangeInstructions(e: Event){
    const target = e.target as HTMLTextAreaElement;
    this.recipe.instruction = target.value;
  }

  onSubmitForm(): void {
    this.recipeService.create(this.recipe).subscribe(
      () => console.log('recette crée')
    );
  }

}
