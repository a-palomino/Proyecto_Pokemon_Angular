import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from './global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url:string = GLOBAL.API_URL;
  constructor(
    private _http:HttpClient
  ) { }

  getPokemons(nPokemons:number, nOffset:number):Observable<any>{
    return this._http.get(this.url + '?limit='+nPokemons+'&offset=' + nOffset );
  }

  getPokemon(id:string):Observable<any>{
    return this._http.get(this.url + id);
    //return this._http.get(this.url + id);
  }
}
