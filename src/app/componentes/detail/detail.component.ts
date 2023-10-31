import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GLOBAL } from 'src/app/services/global';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy{
  
  pokemonId:string = "";
  elPokemon:any = {};
  constructor(
    private _pokemonService:PokemonService,
    private _route:ActivatedRoute, //Recoger parametros de la ruta activa
    private _router:Router //Objeto que contiene metodos para trabajar
    ){

  }
  
  //HOOKS
  ngOnInit(): void {
    this.getDatos();
  }

  ngOnDestroy(): void {
    console.log("Detalle destruido");
  }

  //Metodos



  getDatos() {
    //Recoger id de la ruta
    this._route.params.subscribe({
      next:(params) => {
        this.pokemonId = params['id'];//Anotación corchete
        //this.pokemonId = params.id;//Anotación punto
        console.log(params);
        
      },
      error:(error) => {
        this._router.navigate(['error']);
      }
      ,
      complete: () => {}
    });

    this._pokemonService.getPokemon(this.pokemonId).subscribe({
      next:(result) => {
        this.elPokemon = result;
        this.elPokemon.imagen = GLOBAL.URL_IMAGES + this.pokemonId + '.png';
        console.log(this.elPokemon);
         
        
      },
      error:(error) => {},
      complete: () => {}
    });

  }

}
