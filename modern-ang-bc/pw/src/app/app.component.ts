import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  useLetters: boolean = false;
  useNumbers: boolean = false;
  useSymbols: boolean = false;
  passwordLength: number = 0;
  password = '';

  onButtonClick() {
    this.logFields();
    this.password = 'MY PASSWORD!!!';
  }

  onChangeUseLetters() {
    this.useLetters = !this.useLetters;
  }

  onChangeUseNumbers() {
    this.useNumbers = !this.useNumbers;
  }

  onChangeUseSymbols() {
    this.useSymbols = !this.useSymbols;
  }

  onChangeLength(lengthString: string) {
    const parsedLength = parseInt(lengthString);
    if (!isNaN(parsedLength)) {
      this.passwordLength = parsedLength;
    }
  }

  private logFields(): void {
    console.log(`
      About to generate a password with the following:
      Use letters: ${this.useSymbols}
      Use numbers: ${this.useNumbers}
      Use symbols: ${this.useSymbols}
      Password length: ${this.passwordLength}
    `);
  }
}
