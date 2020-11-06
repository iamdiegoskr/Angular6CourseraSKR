import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent{

  currentDate : number;

  constructor() {
    this.currentDate = new Date().getFullYear()
  }

  
}
