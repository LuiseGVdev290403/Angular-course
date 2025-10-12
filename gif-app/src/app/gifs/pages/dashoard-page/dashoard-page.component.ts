import {  Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GifsSideMenuComponent } from "../../components/gifs-side-menu/gifs-side-menu.component";


@Component({
  selector: 'app-dashoard-page',
  imports: [RouterOutlet, GifsSideMenuComponent],
  templateUrl: './dashoard-page.component.html',
})
export default class DashoardPageComponent { }
