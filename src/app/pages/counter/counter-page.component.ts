import { Component, signal } from "@angular/core";


@Component({
    templateUrl: './counter-page.component.html'
})
export class CounterPageCompanent {
    counter = 10;
    counterSignal = signal(10); // obtenido del mismo angular

    decrementBy(value: number) {
        this.counter -= value;

       
    }
    resetBy() {
        this.counter = 10;
        this.counterSignal.set(0);
    }


    increaseBy(value:number) {
        this.counter += value;
         this.counterSignal.update((current) => current + value);
    }
}