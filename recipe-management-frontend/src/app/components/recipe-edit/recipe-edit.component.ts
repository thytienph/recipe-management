import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RecipeService} from "../../recipe.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.scss'
})
export class RecipeEditComponent implements OnInit {
  id: number = NaN;
  submitted = false;
  recipeForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl('Recipe Name',
      Validators.required
    ),
    image: new FormControl('',
      Validators.required
    ),
    description: new FormControl('Description',
      Validators.required
    ),
  });

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getRecipe();
  }


  getRecipe(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.recipeService.getRecipe(this.id).subscribe(
      recipe => {
        this.recipeForm.patchValue({
          id: this.id,
          name: recipe.name,
          image: recipe.image,
          description: recipe.description
        });
      }
    );
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.recipeForm.valid) {
      if (this.recipeForm.value.id) {
        this.recipeService.updateRecipe(this.recipeForm).subscribe(
          () => this.goBack()
        );
      } else {
        this.recipeService.addRecipe(this.recipeForm).subscribe(
          () => this.goBack()
        )
      }
    } else {

    }
  }

  goBack(): void {
    this.router.navigate(['/', 'recipe']);
  }

  get recipeFormControl() {
    return this.recipeForm.controls;
  }

}
