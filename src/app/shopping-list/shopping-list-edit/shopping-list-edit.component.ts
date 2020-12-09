import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<{ingredientName: string, ingredientAmount: number}>();

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    this.ingredientAdded.emit({
      ingredientName: nameInput.value,
      ingredientAmount: Number(amountInput.value)
    });
  }

}
