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

  getAll(){
    const url = BASE_URL + PATH;
    return this.httpClient.get<Recipe[]>(url);
  }

  getById(id: number){
    const url = `${BASE_URL}${PATH}/${id}`;
    return this.httpClient.get<Recipe>(url);
  }
}
