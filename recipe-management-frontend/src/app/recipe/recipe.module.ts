import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { NoRecipeComponent } from './no-recipe/no-recipe.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RecipeComponent } from './recipe.component';


@NgModule({
  declarations: [
    RecipeDetailsComponent,
    RecipeItemComponent,
    NoRecipeComponent,
    RecipeComponent
  ],
  imports: [
    CommonModule,
    RecipeRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class RecipeModule { }
