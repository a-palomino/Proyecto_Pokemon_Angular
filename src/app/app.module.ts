import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { MenuPrincipalComponent } from './componentes/menu-principal/menu-principal.component';
import { HomeComponent } from './componentes/home/home.component';
import { ErrorComponent } from './componentes/error/error.component';
import { ListComponent } from './componentes/list/list.component';
import { ListTableComponent } from './componentes/list-table/list-table.component';
import { DetailComponent } from './componentes/detail/detail.component';
import { PrimeraLetraMayusculaPipe } from './pipes/primera-letra-mayuscula.pipe';
import { PreloaderComponent } from './componentes/preloader/preloader.component';
import { PaginationComponent } from './componentes/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuPrincipalComponent,
    HomeComponent,
    ErrorComponent,
    ListComponent,
    ListTableComponent,
    DetailComponent,
    PrimeraLetraMayusculaPipe,
    PreloaderComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
