package com.thytienph.recipemanagementbackend.controller;

import com.thytienph.recipemanagementbackend.entity.Recipe;
import com.thytienph.recipemanagementbackend.service.IRecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("recipes")
public class RecipeController {
    @Qualifier("recipeServiceImpl")
    @Autowired
    private IRecipeService recipeService;

    @PostMapping
    public ResponseEntity<Recipe> createNewRecipe(@RequestBody Recipe recipe) {
        return new ResponseEntity<>(this.recipeService.save(recipe), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<Iterable<Recipe>> getAllRecipe() {
        return new ResponseEntity<>(this.recipeService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Recipe> getRecipe(@PathVariable Long id) {
        Optional<Recipe> recipeOptional = this.recipeService.findById(id);
        return recipeOptional.map(recipe -> new ResponseEntity<>(recipe, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Recipe> updateRecipe(@PathVariable Long id, @RequestBody Recipe recipe) {
        Optional<Recipe> recipeOptional = this.recipeService.findById(id);
        return recipeOptional.map(recipe1 -> {
            recipe.setId(recipe1.getId());
            return new ResponseEntity<>(this.recipeService.save(recipe), HttpStatus.OK);
        }).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Recipe> deleteRecipe(@PathVariable Long id) {
        Optional<Recipe> recipeOptional = this.recipeService.findById(id);
        return recipeOptional.map(recipe -> {
            this.recipeService.remove(id);
            return new ResponseEntity<>(recipe, HttpStatus.OK);
        }).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}
