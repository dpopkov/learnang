import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  intervalRef: any;
  lastNumber: number = 0;
  countElements: [] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(): void {
    this.intervalRef = setInterval(() => {
      this.lastNumber++;
      this.intervalFired.emit(this.lastNumber);
    }, 1000);
  }

  onPauseGame(): void {
    clearInterval(this.intervalRef);
  }
}
