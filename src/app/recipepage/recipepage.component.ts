import { Component, OnInit } from '@angular/core';
import { HttpRecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../models/recipe.model';



@Component({
  selector: 'app-recipepage',
  templateUrl: './recipepage.component.html',
  styleUrls: ['./recipepage.component.scss']
})
export class RecipepageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {}

}
