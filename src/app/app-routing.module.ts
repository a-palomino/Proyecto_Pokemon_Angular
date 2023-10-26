import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ErrorComponent } from './componentes/error/error.component';
import { ListComponent } from './componentes/list/list.component';
import { ListTableComponent } from './componentes/list-table/list-table.component';
import { DetailComponent } from './componentes/detail/detail.component';


const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path:"error", component:ErrorComponent},
  {path:"list", component:ListComponent},
  {path:"listTable", component:ListTableComponent},
  {path:"detail/:id", component:DetailComponent},
  {path:"**", component:ErrorComponent}//Esta ruta recoge cualquier busqueda que no este en el path (DEBE PONERSE EN ÚLTIMA POSICIÓN)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
