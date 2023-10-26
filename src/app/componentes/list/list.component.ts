import { Component, OnInit } from '@angular/core';
import { GLOBAL } from 'src/app/services/global';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  
  aPokemons:Array<any> = [];
  nPokemon:number = 50;
  constructor(
    private _pokemonService:PokemonService
  ){

  }

  ngOnInit(): void {
    this.getDatos();
  }

  //Obtenemos los datos recogidos por el servicio de pokemon
  getDatos() {
    this._pokemonService.getPokemons(this.nPokemon).subscribe({
      next:(result) => {
        this.aPokemons = result.results;
        //Añadir atributo urlImagen (lipiamos url)
        for(let pokemon of this.aPokemons){
          pokemon.id = this.extraeIdPokemon(pokemon.url);
          pokemon.urlImagen = GLOBAL.URL_IMAGES + pokemon.id + '.png';
        }
      },
      error:(error) => {},
      complete: () => {}
    });

  }

  //Obtenemos el id de cada pokemon a partir de la url extraida de la API previamente
  extraeIdPokemon(url:string):string{
    return url.slice(34, -1);
  }
}
