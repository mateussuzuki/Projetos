import { Component } from '@angular/core';
import { Destaque } from './components/carrossel-destaques/destaque';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projeto-ark';
  destaques = [
    new Destaque('/assets/imagens-destaque/ark2.png', 'Akr2'),
    new Destaque('/assets/imagens-destaque/ark-genesis.jpeg', 'Ark genesis'),
    new Destaque('/assets/imagens-destaque/amargassaurus.webp', 'Argamassaurus'),
  ]
}