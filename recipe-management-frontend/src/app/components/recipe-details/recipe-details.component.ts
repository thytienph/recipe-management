import {Component, OnInit} from '@angular/core';
import {Recipe, RecipeService} from "../../recipe.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.scss'
})
export class RecipeDetailsComponent implements OnInit {
  isCollapsed = false;
  id: number = NaN;
  recipe: Recipe = {};

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  ngOnInit(): void {
    this.getRecipe();
  }


  getRecipe(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.recipeService.getRecipe(this.id).subscribe(
      recipe => {
        this.recipe = recipe;
      }
    );
  }

  deleteRecipe(): void {
    this.recipeService.deleteRecipe(this.id).subscribe(
      () => {
        this.goBack();
      }
    );
  }

  editRouting(): void {
    this.router.navigate(['recipe/edit/' + this.id]);
  }


  goBack(): void {
    this.router.navigate(['/', 'recipe']);
  }

  clickDropdown() {
    this.isCollapsed = !this.isCollapsed;
  }
}
