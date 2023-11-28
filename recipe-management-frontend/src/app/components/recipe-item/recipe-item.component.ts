import {Component, OnInit} from '@angular/core';
import {RecipeService} from "../../recipe.service";
import {Recipe} from "../../recipe";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.scss'
})
export class RecipeItemComponent implements OnInit{
  recipes: Recipe[] = [];
  constructor(
    private recipeService: RecipeService
  ) {
  }

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes(): void {
    this.recipeService.getRecipes().subscribe(
      recipes => {
        this.recipes = recipes;
      }
    )
  }


}
