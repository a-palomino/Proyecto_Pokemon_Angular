import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GLOBAL } from 'src/app/services/global';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.css']
})
export class ListTableComponent implements OnInit{
  
  aPokemons:Array<any> = [];
  nPokemon:number = 50;
  nOffset:number = 50;
  constructor(
    private _pokemonService:PokemonService,
    private _router:Router
  ){

  }

  ngOnInit(): void {
    this.getDatos();
  }

  //Obtenemos los datos recogidos por el servicio de pokemon
  getDatos() {
    this._pokemonService.getPokemons(this.nPokemon, this.nOffset).subscribe({
      next:(result) => {
        this.aPokemons = result.results;
        //Añadir atributo urlImagen (lipiamos url)
        for(let pokemon of this.aPokemons){
          pokemon.id = this.extraeIdPokemon(pokemon.url);
          pokemon.urlImagen = GLOBAL.URL_IMAGES + pokemon.id + '.png';
        }
      },
      error:(error) => {this._router.navigate(['error']);},
      complete: () => {}
    });

  }

  //Obtenemos el id de cada pokemon a partir de la url extraida de la API previamente
  extraeIdPokemon(url:string):string{
    return url.slice(34, -1);
  }
}
