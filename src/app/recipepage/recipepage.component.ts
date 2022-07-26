import { Component, OnInit } from '@angular/core';
import { HttpRecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../models/recipe.model';



@Component({
  selector: 'app-recipepage',
  templateUrl: './recipepage.component.html',
  styleUrls: ['./recipepage.component.scss']
})
export class RecipepageComponent implements OnInit {

  recipes: Recipe[] = [];

  constructor(private serviceRecipe:HttpRecipeService) {
    this.serviceRecipe.findAll().subscribe((data)=> this.recipes=data);
  }

  ngOnInit(): void {}

}
