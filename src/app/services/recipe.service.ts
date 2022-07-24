import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../constantes';
import { Recipe } from '../models/recipe';


const PATH = '/recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private httpClient: HttpClient) { }

  create(recipe: Recipe){
    const url = BASE_URL + PATH;
    return this.httpClient.post(url, recipe);
  }
}
