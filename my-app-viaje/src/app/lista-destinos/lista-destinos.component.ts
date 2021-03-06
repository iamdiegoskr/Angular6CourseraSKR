import { Component, OnInit } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {

  destinos : DestinoViaje[];

  constructor() {
    this.destinos = [];
  }

  ngOnInit(): void {
  }

  saveDestiny(name:string,imageurl:string):boolean{
    this.destinos.push(new DestinoViaje(name,imageurl));
    return false;
  }

  elegido(destino:DestinoViaje){
    
    this.destinos.forEach(function(desti){
        desti.setSelected(false);
    })
    
    destino.setSelected(true);
  }

}
