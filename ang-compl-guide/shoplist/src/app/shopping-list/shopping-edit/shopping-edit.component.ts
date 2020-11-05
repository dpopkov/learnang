import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInputRef', { static: false }) nameInputField: ElementRef;
  @ViewChild('amountInputRef', { static: false }) amountInputField: ElementRef;
  @Output() addIngredientFired = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient() {
    const name: string = this.nameInputField.nativeElement.value;
    const amount: number = this.amountInputField.nativeElement.value;
    const ingredient: Ingredient = new Ingredient(name, amount);
    this.addIngredientFired.emit(ingredient);
  }
}
