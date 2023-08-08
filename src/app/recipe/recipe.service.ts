import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
// to inject one service to another use onjectable decorator
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  //manage our recipes
  private recipes: Recipe[] = [
    new Recipe(
      'Fruit custard',
      'Made with fresh fruits, milk',
      'https://www.vegrecipesofindia.com/wp-content/uploads/2021/11/fruit-custard-4.jpg',
      [
        new Ingredient('mango', 10),
        new Ingredient('Orange', 5),
        new Ingredient('apple', 5),
      ]
    ),
    new Recipe(
      'Fruit Salad',
      'Made with seasonal fruits',
      'https://images.unsplash.com/photo-1564093497595-593b96d80180?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
      [
        new Ingredient('apple', 5),
        new Ingredient('pomegranate', 1),
        new Ingredient('strawberry', 15),
      ]
    ),
  ];
  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToSHoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
