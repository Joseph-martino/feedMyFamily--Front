import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { HttpRecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-pagecomponent',
  templateUrl: './pagecomponent.component.html',
  styleUrls: ['./pagecomponent.component.scss']
})

export class PagecomponentComponent implements OnInit {

  recipes: Recipe[] = [];

  recipe: string="Recipe";
 
  constructor(private serviceRecipe:HttpRecipeService) { 
    this.serviceRecipe.findAll().subscribe((data: Recipe[])=> this.recipes =data);
  }

  ngOnInit(): void {

  }

  onDeleteRecipe(id: number) {
    this.serviceRecipe.delete(id).subscribe(() => {
      this.recipes = this.recipes.filter(this.recipe => this.recipe.id !== id)
    })
  }

  onSaveRecipe(recipe: any) {
    this.serviceRecipe.save(recipe).subscribe((newRecipe: any) => this.recipes.push(newRecipe))
  }

}
