import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  recipeUrl = 'http://localhost:8080/recipes';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  constructor(
    private httpClient: HttpClient
  ) { }
  getRecipes(): Observable<Recipe[]> {
    return this.httpClient.get<Recipe[]>(this.recipeUrl);
  }
  getRecipe(id: number | undefined): Observable<Recipe> {
    const url = `${this.recipeUrl}/${id}`;
    return this.httpClient.get<Recipe>(url);
  }
  addRecipe(body: any): Observable<Recipe> {
    let recipe = JSON.stringify(body.value);
    return this.httpClient.post<Recipe>(this.recipeUrl, recipe, this.httpOptions);
  }
  updateRecipe(body: any): Observable<any> {
    let recipe = JSON.stringify(body.value);
    const url = `${this.recipeUrl}/${body.value.id}`;
    return this.httpClient.put(url, recipe, this.httpOptions);
  }
  deleteRecipe(id: number): Observable<Recipe> {
    const url = `${this.recipeUrl}/${id}`;
    return this.httpClient.delete<Recipe>(url, this.httpOptions);
  }
}



export interface Recipe {
  id?: number;
  name?: string;
  image?: string;
  description?: string;
}
