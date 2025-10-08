import { Routes } from '@angular/router';
import { CounterPageCompanent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { DraongballPageComponent } from './pages/draongball-page/draongball-page.component';
import { DraongballSuperPageComponent } from './pages/draongball-super/draongball-super-page.component';

export const routes: Routes = [
    {
        path: '',
        component: CounterPageCompanent
    },
    {
        path: 'hero',
        component: HeroPageComponent
    },
    {
        path: 'dragonball',
        component: DraongballPageComponent
    },
     {
        path: 'dragonball-super',
        component: DraongballSuperPageComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
