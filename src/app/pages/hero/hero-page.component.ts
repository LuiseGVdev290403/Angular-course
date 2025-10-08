import { Component, signal } from "@angular/core";



@Component({
    templateUrl: './hero-page.component.html'
})
export class HeroPageComponent {
    name = signal('Iroman');
    age = signal(45)

    getHeroDescription():string {
        return `${ this.name().toUpperCase()} - ${ this.age() }`
    }

    changeHero() {
        this.name.update((name) => name = 'Spiderman');
        this.age.update((age) => age = 22);
    }

    resetForm() {
        this.name.set('Iroman');
        this.age.set(45)
    }
    changeAge() {
        this.age.update((age) => age = 60);
    }
}