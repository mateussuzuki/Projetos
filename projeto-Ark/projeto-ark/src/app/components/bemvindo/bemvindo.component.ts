import { Component, OnInit } from '@angular/core';
import { Destaque } from 'src/app/components/carrossel/destaque';

@Component({
  selector: 'app-bemvindo',
  templateUrl: './bemvindo.component.html',
  styleUrls: ['./bemvindo.component.scss']
})
export class BemvindoComponent implements OnInit{

    destaques = [
    new Destaque('/assets/imagens-destaque/ark2.png', 'Akr2'),
    new Destaque('/assets/imagens-destaque/ark-genesis.jpeg', 'Ark genesis'),
    new Destaque('/assets/imagens-destaque/amargassaurus.webp', 'Argamassaurus'),
  ]
  
    constructor(){
    }

    ngOnInit(): void {
    }
}
