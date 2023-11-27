import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {RecipeService} from "../recipe.service";
import {Location} from "@angular/common";


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.scss'
})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipe: Recipe = {};
  id: number | undefined = 0;

  recipeForm: FormGroup;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private location: Location,
    private router: Router
  ) {
    this.recipeForm = new FormGroup<any>({
      id: new FormControl(),
      name: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.getRecipe();
  }

  reloadCurrentPage() {
    window.location.reload();
  }

  getRecipe(): void {
    this.route.children[0].url.subscribe(
      url => {
         this.id = Number(url[1].path) ;
      }
    )
    this.recipeService.getRecipe(this.id).subscribe(
      recipe => {
        this.recipeForm.patchValue({
          id: this.id,
          name: recipe.name,
          image: recipe.image,
          description: recipe.description,
        });
      }
    );
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
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
    }
  }

  get userFormControl() {
    return this.recipeForm.controls;
  }

}
