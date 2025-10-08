import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../intrefaces/character.interface';

const loadFromLocalStorage = (): Character[] => {
    const characters = localStorage.getItem('characters');

   
    return characters ? JSON.parse(characters) : [];

}


@Injectable({providedIn: 'root'})
export class DragonballService {
      characters = signal<Character[]>(loadFromLocalStorage()); // se le dice a la signal directamente que se trabajara con un array

  addCharacter(character: Character) {
    this.characters.update((list) => [...list, character]);
  }

  saveToLocalStorage = effect( ()=> {
    localStorage.setItem('characters', JSON.stringify(this.characters()))
  } ) // los effect saben cuando son usados
    
}