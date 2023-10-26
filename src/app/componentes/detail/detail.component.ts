import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{
  
  pokemonId:string = "1";
  aPokemon:Array<any> = [];
  constructor(private _pokemonService:PokemonService){

  }
  
  ngOnInit(): void {
    this.getDatos();
  }

  getDatos() {
    this._pokemonService.getPokemon(this.pokemonId).subscribe({
      next:(result) => {
        this.aPokemon = result;
        console.log(this.aPokemon);
        //Añadir atributo urlImagen (lipiamos url)
        /*for(let pokemon of this.aPokemon){
        
        }*/
      },
      error:(error) => {},
      complete: () => {}
    });

  }

}
