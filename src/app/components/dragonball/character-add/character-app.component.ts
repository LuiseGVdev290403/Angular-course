import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { Character } from '../../../intrefaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-app.component.html'
})
export class CharacterAddComponent { 
  name = signal('');
  power = signal(0);

  newCharacter = output<Character>(); // recibe del hija 

  addPower() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter:Character = {
      id:  Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power()
    };

   // this.characters.update( (list) => [...list, newCharacter]);
   // console.log( {newCharacter}) 
   this.newCharacter.emit(newCharacter);
   this.resetField();
  }

  resetField () {
    this.name.set('');
    this.power.set(0);
  }
}
