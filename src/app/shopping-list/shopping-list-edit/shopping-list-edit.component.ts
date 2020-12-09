import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    const newIngredient = new Ingredient(String(nameInput.value), Number(amountInput.value));
    this.ingredientAdded.emit(newIngredient);
  }

}
