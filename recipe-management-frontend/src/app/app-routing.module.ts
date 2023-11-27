import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecipeModule} from "./recipe/recipe.module";
import {RecipeComponent} from "./recipe/recipe.component";
import {RecipeDetailsComponent} from "./recipe/recipe-details/recipe-details.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'recipe',
    pathMatch: "full"
  },
  {
    path: 'recipe',
    component: RecipeComponent,
    children: [
      {
        path: 'new',
        component: RecipeDetailsComponent
      },
      {
        path: 'details/:id',
        component: RecipeDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
