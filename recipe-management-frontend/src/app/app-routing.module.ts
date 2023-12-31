import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from "./components/about/about.component";
import {NoRecipeComponent} from "./components/no-recipe/no-recipe.component";
import {RecipeEditComponent} from "./components/recipe-edit/recipe-edit.component";
import {RecipeDetailsComponent} from "./components/recipe-details/recipe-details.component";
import {RecipeListComponent} from "./components/recipe-list/recipe-list.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'recipe',
    pathMatch: 'full'
  },
  {
    path: 'recipe',
    component: RecipeListComponent,
    children: [
      {
        path: '',
        component: NoRecipeComponent
      },
      {
        path: 'new',
        component: RecipeEditComponent
      },
      {
        path: 'details/:id',
        component: RecipeDetailsComponent
      },
      {
        path: 'edit/:id',
        component: RecipeEditComponent
      }
    ]
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
