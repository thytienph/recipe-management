package com.thytienph.recipemanagementbackend.repository;

import com.thytienph.recipemanagementbackend.entity.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IRecipeRepository extends JpaRepository<Recipe, Long> {
}