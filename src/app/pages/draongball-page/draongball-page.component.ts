import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';


interface Character {
  id: number;
  name: string;
  power: number;
}


@Component({
  selector: 'app-draongball-page',
  imports: [],
  templateUrl: './draongball-page.component.html'
})
export class DraongballPageComponent {

  name = signal('Gohan');
  power = signal(100);


  characters = signal<Character[]>([
    {id: 1, name: 'Goku', power: 9001}
  ]); // se le dice a la signal directamente que se trabajara con un array

  powerClasses = computed(() => {
    return {
      'text-danger': true
    }
  })

  addPower() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter:Character = {
      id: this.characters.length + 1,
      name: this.name(),
      power: this.power()
    };

    this.characters.update( (list) => [...list, newCharacter]);
    this.resetField();
  }

  resetField () {
    this.name.set('');
    this.power.set(0);
  }

}
