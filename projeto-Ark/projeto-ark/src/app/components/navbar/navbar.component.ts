import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
    constructor() {
    }
    mostrarComponent: boolean = false;
    mostrarComponente() {
      this.mostrarComponent = !this.mostrarComponent;
    }

    ngOnInit(){
    }
}
