import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GLOBAL } from 'src/app/services/global';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  //http://localhost:4200/list?nPokemons=50&offset=50
  aPokemons:Array<any> = [];
  nPokemon:number = 20;
  nOffset:number = 0;
  isLoading:boolean = true;
  constructor(
    private _pokemonService:PokemonService,
    private _route:ActivatedRoute, //Recoger parametros de la ruta activa
    private _router:Router
  ){

  }

  ngOnInit(): void {
    this.getDatos();
  }

  //Obtenemos los datos recogidos por el servicio de pokemon
  getDatos(): void {
    //Recogemos los datos de la ruta
    this._route.params.subscribe({
      next:(params) => {
        console.log('hola jejejejejeej');
        if(Object.keys(params).length > 0){
          this.nPokemon = params['nPokemons'];//Anotación corchete
          this.nOffset = params['offset'];//Anotación corchete
        }else{
          this.nPokemon = 50;//Anotación corchete
          this.nOffset = 50;//Anotación corchete
        }

        this.obtenerDatosPokemon();
        
        //console.log("Pokemons limite: " + this.nPokemon + '-- offset: ' + this.nOffset);
        },
      error:(error) => {
        this._router.navigate(['error']);
      }
      
    });

    


  }

  //Obtenemos el id de cada pokemon a partir de la url extraida de la API previamente
  extraeIdPokemon(url:string):string{
    return url.slice(34, -1);
  }

  /**
   * En esta función obtenemos los datos de los pokemons
   */
  obtenerDatosPokemon(): void{
    //Obtenemos los datos del servicio de pokemon API
    this._pokemonService.getPokemons(this.nPokemon, this.nOffset).subscribe({
      next:(result) => {
        console.log(this.nPokemon + '---------' + this.nOffset);
        this.aPokemons = result.results;
        //Añadir atributo urlImagen (lipiamos url)
        for(let pokemon of this.aPokemons){
          pokemon.id = this.extraeIdPokemon(pokemon.url);
          pokemon.urlImagen = GLOBAL.URL_IMAGES + pokemon.id + '.png';
        }
      },
      error:(error) => {this._router.navigate(['error']);},
      complete: () => {this.isLoading = false;}
    });
  }
}
