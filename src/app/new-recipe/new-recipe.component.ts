import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DifficultyToOptions } from '../constantes';
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
  difficultyToOptions = DifficultyToOptions;

  constructor(private recipeService: RecipeService, private router: Router) {
    this.recipe = {
      visibility: 'public'
    };
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
    this.recipeService
    .create(this.recipe)
    .subscribe(
      (result: Recipe) => this.router.navigateByUrl(`/recipe/${result.id}`)
    );
  }

}
