import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>{{counter}}</h3>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="increaseBy()">-1</button>

  `
})

export class CounterComponent {

  counter: number = 10;


  increaseBy(typeOperation?: number): void {
    if(typeOperation){
      this.counter++;
    } else {
      this.counter--;
    }
  }

}
