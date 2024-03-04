import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor(private dbzService: DbzService) {//inyeccion de dependencias, habilita en todo el main-page la info del service

  }

  get characters(): Character[] {

    return [...this.dbzService.characters];// lo pongo con el spread para q se cree un acopia del array y no mande el propio array
  }

  deleteList(id: string): void {

    this.dbzService.deleteList(id);
  }

  onNewCharacter(character: Character) {
    this.dbzService.onNewCharacter(character)
;  }
}
