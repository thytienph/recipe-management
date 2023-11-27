package com.thytienph.recipemanagementbackend.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "recipes")
public class Recipe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    @JsonProperty("id")
    private Long id;

    @Column(name = "name", nullable = false)
    @JsonProperty("name")
    private String name;

    @Lob
    @Column(name = "image_url", nullable = false)
    @JsonProperty("image")
    private String imageUrl;

    @Lob
    @Column(name = "description", nullable = false)
    @JsonProperty("description")
    private String description;

}