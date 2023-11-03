import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GLOBAL } from 'src/app/services/global';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges{
  
  
  //Valores numericos de paginación
  @Input() nPokemons:number = 0;
  @Input() pActual:number = 0; //Página Actual, En función de offset
  totalPokemon:number = GLOBAL.totalPokemon;
  totalPaginas:number = 0;
  pSiguiente:number = 0; //Página siguiente, En función de offset
  pAnterior:number = 0; //Página anterior, En función de offset

  //Valores del texto de la paginación
  textoPActual:string = "";
  textoPAnterior:string = "";
  textoPSiguiente:string = "";

  //Valores para activar/desactivar los botones de la paginación
  pAnteriorBloqueado:boolean = true;
  pSiguienteBloqueado:boolean = false;

  ngOnInit(): void {
    //console.log(this.nPokemons);
    //console.log("Pokemons limite: " + this.nPokemons + '-- offset: ' + this.pActual);
    this.calcularPaginacion();
    this.configurarTextoPaginacion();
  }

  /**
   * 
   * @param changes Al recargar la página padre, volveremos a configurar los datos
   */
  ngOnChanges(): void {
    this.calcularPaginacion();
    this.configurarTextoPaginacion();
  }

  /**
   * Esta función se encarga de calcular y adaptar los valores de paginación en función de offset y limit de la API
   */
  calcularPaginacion():void{
    let limitePokemons:number = this.nPokemons;
    let offset:number = this.pActual;
    this.totalPaginas = Math.floor(GLOBAL.totalPokemon / limitePokemons);
    //console.log('Total paginas: ' + this.totalPaginas);
    

    //Calculamos la anterior página, si pActual es 0, bloquemos el paso a la anterior página
    if(this.pActual == 0){
      //Bloqueamos el paso a la anterior página
      this.pAnteriorBloqueado = true;
    }else{
      this.pAnterior = +offset - +limitePokemons;
      this.pAnteriorBloqueado = false;
    }

    //Calculamos la siguiente página, si pActual es mayor que el total de resultados de la API, entonces bloqueamos la acción de siguiente página
    //Ejemplo: Si pActual = 1280
    //this.pSiguiente = offset + limitePokemons;
    this.pSiguiente = +offset + +limitePokemons;
    

    if(this.pActual >= this.totalPokemon){
      //Bloqueamos el paso a la siguiente página
      this.pSiguienteBloqueado = true;
    }else{
      //Activamos el paso a la siguiente página
      this.pSiguienteBloqueado = false;
    }

  }

  /**
   * Esta función configura los textos de los botones de paginación
   */
  configurarTextoPaginacion():void{
    //Variable Auxiliar
    const paginaActual:number =  this.pActual / this.nPokemons;
    const paginaAnterior:number = paginaActual-1;
    const paginaSiguiente:number = paginaActual+1;
    //Página Actual
    this.textoPActual = paginaActual.toString();

    //Página Anterior
    if(paginaActual == 0){
      this.textoPAnterior = "...";
    }else{
      this.textoPAnterior = paginaAnterior.toString();
    }

    //Página Siguiente
    if(paginaActual <= this.totalPaginas){
      this.textoPSiguiente = paginaSiguiente.toString();
    }else{
      this.textoPSiguiente = "...";
    }

  }
}
