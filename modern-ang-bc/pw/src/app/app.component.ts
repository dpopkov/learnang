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
  passwordLength = 0;
  password = '';

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwzyz';
    const symbols = '!@#$%^&*()';
    let validChars: string = '';
    if (this.useNumbers) {
      validChars += numbers;
    }
    if (this.useLetters) {
      validChars += letters;
    }
    if (this.useSymbols) {
      validChars += symbols;
    }
    let generatedPassword: string = '';
    for (let i = 0; i < this.passwordLength; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }

  notReadyToGenerate(): boolean {
    return this.passwordLength == 0 || !(this.useNumbers || this.useLetters || this.useSymbols);
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
    if (lengthString.length == 0) {
      this.passwordLength = 0;
    } else {
      const parsedLength = parseInt(lengthString);
      if (!isNaN(parsedLength)) {
        this.passwordLength = parsedLength;
      }
    }
  }
}
