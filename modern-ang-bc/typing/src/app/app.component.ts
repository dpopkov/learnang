import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Typing Challenge';
  randomText: string = lorem.sentence();
  enteredText: string = '';
  solved: boolean = false;

  onInput(typedText: string): void {
    this.enteredText = typedText;
    this.solved = typedText === this.randomText;
  }

  classForLetterAt(idx: number): string {
    let styleClass: string = '';
    if (idx >= this.enteredText.length) {
      styleClass = 'pending';
    } else {
      styleClass = (this.randomText[idx] === this.enteredText[idx]) ? 'correct' : 'incorrect'
    }
    return styleClass;
  }
}
