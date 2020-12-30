import { Component } from '@angular/core';

@Component({
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DataComponent {
  counter = 0;

  increment(): void {
    this.counter++;
  }

  decrement(): void {
    this.counter--;
  }
}
