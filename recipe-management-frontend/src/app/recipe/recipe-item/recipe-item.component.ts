import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.scss'
})
export class RecipeItemComponent {

  @Input() recipes: Recipe[] = [];

  @Output() selectedRecipeEvent = new EventEmitter<Recipe>();

  selectedRecipe(value: Recipe) {
    this.selectedRecipeEvent.emit(value);
  }



}
