package com.thytienph.recipemanagementbackend.service.impl;

import com.thytienph.recipemanagementbackend.entity.Recipe;
import com.thytienph.recipemanagementbackend.repository.IRecipeRepository;
import com.thytienph.recipemanagementbackend.service.IRecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RecipeServiceImpl implements IRecipeService {

    @Autowired
    private IRecipeRepository recipeRepository;

    @Override
    public List<Recipe> findAll() {
        return this.recipeRepository.findAll();
    }

    @Override
    public Optional<Recipe> findById(Long id) {
        return this.recipeRepository.findById(id);
    }

    @Override
    public Recipe save(Recipe recipe) {
        return this.recipeRepository.save(recipe);
    }

    @Override
    public void remove(Long id) {
        this.recipeRepository.deleteById(id);
    }
}
