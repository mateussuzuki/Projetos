import { Component, OnInit } from '@angular/core';
import { Conteudo } from 'src/app/components/carrossel/conteudo';

@Component({
  selector: 'app-bemvindo',
  templateUrl: './bemvindo.component.html',
  styleUrls: ['./bemvindo.component.scss']
})
export class BemvindoComponent {

    conteudo = [
    new Conteudo('/assets/imagens-destaque/ark2.png', 'Akr2', 'Venha conferir as novas atualizações do Ark 2'),
    new Conteudo('/assets/imagens-destaque/ark-genesis.jpeg', 'Ark genesis', 'Conheça o novo mapa Ark Genesis com muitas novidades e novas criaturas!'),
    new Conteudo('/assets/imagens-destaque/amargassaurus.webp', 'Argamassaurus', 'Criatura nova vem junto com o novo mapa The Lost Island'),
  ]
  
    constructor(){
    }
    
}
