import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  heroName: string[] = ['Spider', 'Ironman', 'Thor', 'Hulk'];
  deletedHero?: string;

  removeLastHeroe(): void {
    this.deletedHero = this.heroName.pop();
  }
}
