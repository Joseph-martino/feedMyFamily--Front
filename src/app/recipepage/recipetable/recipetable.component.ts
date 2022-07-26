import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { HttpRecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipetable',
  templateUrl: './recipetable.component.html',
  styleUrls: ['./recipetable.component.scss']
})
export class RecipetableComponent implements OnInit {

  recipes: any[] = [];

  constructor(private serviceRecipe: HttpRecipeService) { }

  ngOnInit(): void {
    this.serviceRecipe.findByUserId(4).subscribe((data) => this.recipes = data);
  }

  onEdit() {
  }

  onDelete() {
  }

}
