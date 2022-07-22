import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { environment } from 'src/environments/environment';

const apiUrlFilm = environment.API_URL+"/Recipe"

@Injectable({
  providedIn: 'root'
})
export class HttpRecipeService {

  constructor(private http:HttpClient) {

  }

  findAll() {
    return this.http.get<Recipe>(apiUrlRecipe);
  }

  findById(id:number){
    return this.http.get<Recipe>(`${apiUrlRecipe}/${id}`);
  }

  save(recipe:Recipe){
    return this.http.post<Recipe>(apiUrlRecipe,recipe);
  }

  delete(id:number){
    return this.http.delete<Recipe>(`${apiUrlERecipe}/${id}`);
  }

}
