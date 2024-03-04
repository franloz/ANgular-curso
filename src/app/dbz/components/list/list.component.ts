import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()//indica q puede recibir una property del component padre, en este caso main-page
  characterList: Character[] = [//al ponerlo el input recibe la info del padre y esta info de trunk quedaria como por defecto y se mostraria sino se envia data
    {
      name: 'Trunk',
      power: 10
    }
  ];

  @Output()
  deleteCharacter: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(index: string):void {

    this.deleteCharacter.emit(index);
  }

}
