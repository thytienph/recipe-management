import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { NoRecipeComponent } from './components/no-recipe/no-recipe.component';
import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';
import { RecipeEditComponent } from './components/recipe-edit/recipe-edit.component';
import {HttpClientModule} from "@angular/common/http";
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    RecipeListComponent,
    NoRecipeComponent,
    RecipeItemComponent,
    RecipeEditComponent,
    RecipeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
