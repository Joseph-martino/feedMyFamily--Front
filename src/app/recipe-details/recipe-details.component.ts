import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DifficultyToOptions } from '../constantes';
import { Recipe } from '../models/recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  id!: number;
  recipe!: Recipe;
  difficultyToOptions = DifficultyToOptions;

  constructor(private route: ActivatedRoute, 
    private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => { 
      this.id = params['id'];
      this.recipeService
      .getById(this.id)
      .subscribe((result) => this.recipe = result);
;  });
  }
}
