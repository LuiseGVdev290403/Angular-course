import { Component, computed, inject, signal } from '@angular/core';
import { GifListComponent } from "../../components/gif-list/gif-list.component";
import { GifService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-search-page',
  imports: [GifListComponent],
  templateUrl: './search-page.component.html',  
})
export default class SearchPageComponent { 
  gisfs = inject(GifService);
  gifsResult = signal<Gif[]>([]);

  onSearch (query:string) {
    this.gisfs.searchGifs(query).subscribe((resp) => {
      this.gifsResult.set(resp);
    });

  }

}
