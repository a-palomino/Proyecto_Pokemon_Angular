import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'primeraLetraMayuscula'
})
export class PrimeraLetraMayusculaPipe implements PipeTransform {

  transform(nombre: string): string {
    //let palabraMayuscula = nombre.substring(0,1).toLocaleUpperCase() + nombre.substring(1);   Hace lo mismo xddd
    const primeraLetraMayuscula:string = nombre.charAt(0).toUpperCase();
    const restoTexto:string = nombre.slice(1);
    return primeraLetraMayuscula + restoTexto;
  }

}
