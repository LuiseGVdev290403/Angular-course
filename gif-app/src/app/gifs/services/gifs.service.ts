import { HttpClient } from "@angular/common/http";
import { computed, inject, Injectable, signal } from "@angular/core";
import { environment } from "@environments/environment";
import type { GiphyResponse } from "../interfaces/giphy.interfaces";
import { Gif } from "../interfaces/gif.interface";
import { GifMapper } from "../mapper/gif.mapper";
import { map, tap } from "rxjs";


const loadFromLocalStorage = () => {
    const gifsFromLocalStorage = localStorage.getItem('gifs') ?? '{}';
    const gifs = JSON.parse(gifsFromLocalStorage);

    return gifs;
}



@Injectable({providedIn: 'root'})
export class GifService {



    private http = inject(HttpClient); // para que inyecte el propio angular ya viene

    trendingGifs = signal<Gif[]>([]);
    trendingGifsLoading = signal(true);


    searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage());
    searchHistoryKeys = computed(() => Object.keys(this.searchHistory()))


    constructor () {
        this.loadTrendingGifs();
    }

    saveGifsToLocalStorage () {
        const historyString = JSON.stringify(this.searchHistory());
        localStorage.setItem('gifs', historyString);
    }


    loadTrendingGifs () {
        this.http.get<GiphyResponse>( `${ environment.giphyUrl }/gifs/trending`, {
            params: {
                api_key: environment.giphyApiKey,
                limit: 20
            } // llama al endpoint pero primero hacer la configuracion en el app.rout
        }).subscribe((resp) => {
            const gifs = GifMapper.mapGiphyItensToGifArray(resp.data);
            this.trendingGifs.set(gifs);
            this.trendingGifsLoading.set(false);
            console.log(gifs);
        })
    }

    searchGifs(query:string) {
        return this.http.get<GiphyResponse>( `${ environment.giphyUrl }/gifs/search`, {
            params: {
                api_key: environment.giphyApiKey,
                limit: 20,
                q: query, 
            } // llama al endpoint pero primero hacer la configuracion en el app.rout
        }).pipe(
            map(({data}) => data),
            map((items) => GifMapper.mapGiphyItensToGifArray(items)),
            tap( (items) => {
            this.searchHistory.update ( (history) => ({
                ...history,
                [query.toLowerCase()]: items,
            }))
        }));
         
        /*.subscribe((resp) => {
            const gifs = GifMapper.mapGiphyItensToGifArray(resp.data);
            console.log({search: gifs});
        })*/
    };

    getHistoryGifs(query: string):Gif[] {
        return this.searchHistory()[query] ?? [];
    }
}