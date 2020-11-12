import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { DestinoViajeComponent } from './destino-viaje/destino-viaje.component';
import { ListaDestinosComponent } from './lista-destinos/lista-destinos.component';
import { FooterComponent } from './footer/footer.component';
import { DestinoDetalleComponent } from './destino-detalle/destino-detalle.component';



//routes
const ROUTES: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path: 'home', component: ListaDestinosComponent},
  { path: 'destino-detail', component:DestinoDetalleComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DestinoViajeComponent,
    ListaDestinosComponent,
    FooterComponent,
    DestinoDetalleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
