import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  paymentDate: string;
  amount: number;

  onNameChange(nameValue: string) {
    this.name = nameValue;
  }

  onDateChange(dateValue: string) {
    this.paymentDate = dateValue;
  }

  onAmountChange(amountStr: string) {
    this.amount = parseFloat(amountStr);
  }
}
