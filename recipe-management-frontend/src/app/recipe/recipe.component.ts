import {Component, OnInit} from '@angular/core';
import {Recipe} from "./recipe";
import {RecipeService} from "./recipe.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss'
})
export class RecipeComponent implements OnInit {
  recipes: Recipe[] = [];

  selectedRecipe?: Recipe;

  constructor(
    private recipeService: RecipeService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.getRecipes();
  }

  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }

  getRecipes() {
    this.recipeService.getRecipes().subscribe(
      recipes => {
        this.recipes = recipes;
      }
    )
  }
}
