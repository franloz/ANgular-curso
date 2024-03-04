import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  character: Character = {
    name: '',
    power: 0
  }

  emitCharacter():void{


    console.log(this.character);
    if(!this.character.name) return;
    this.onNewCharacter.emit({...this.character});//se pasa con el spread operator porque sino se pasaria una refernencia y no el objeto en si y no funcionaria bien

    this.character.name = '';
    this.character.power = 0;

  }
}
