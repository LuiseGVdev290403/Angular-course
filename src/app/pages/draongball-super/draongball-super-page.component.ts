import { Component, computed, inject, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/chracter-list/character-list.component";
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-app.component";
import { DragonballService } from '../../services/dragonball.service';



@Component({
  imports: [CharacterListComponent, CharacterAddComponent],
  selector: 'dragonball-super',
  templateUrl: './draongball-super-page.component.html'
})
export class DraongballSuperPageComponent {

  //constructor( 
    //public dragonballService: DragonballService
  //){}

  public dragonballService = inject(DragonballService);


 /* characters = signal<Character[]>([
    {id: 1, name: 'Goku', power: 9001},
    {id: 2, name: 'Vegeta', power: 8000}
  ]); // se le dice a la signal directamente que se trabajara con un array

  addCharacter(character: Character) {
    this.characters.update((list) => [...list, character]);
  }*/


  powerClasses = computed(() => {
    return {
      'text-danger': true
    }
  })



}
