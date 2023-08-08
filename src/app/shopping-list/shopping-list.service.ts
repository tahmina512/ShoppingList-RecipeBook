import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  //inform other component that a data is available
  ingredientChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 10),
    new Ingredient('Orange', 5),
  ];
  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
    // addIngredients(ingredients: Ingredient[])
    // {
    //   for(let ingredient of ingredients)
    //   {
    //     this.addIngredient(ingredient);
    //   }

    // }
  }
  addIngredients(ingredient: Ingredient[]) {
    this.ingredients.push(...ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
