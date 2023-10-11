import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { Conteudo } from 'src/app/components/carrossel/conteudo';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.scss']
})

export class CarrosselComponent implements OnInit, OnDestroy {

  timerSubs!: Subscription;

  @Input() imagens: Conteudo[] = [];

  private _indexImagemAtiva: number = 0;

  get indexImagemAtiva() {
    return this._indexImagemAtiva;
  }

  set indexImagemAtiva(value: number) {
    this._indexImagemAtiva =
      value < this.imagens.length ? value : 0;
  }

  ngOnInit(): void {
    this.iniciarTimer();
  }

  ngOnDestroy(): void {
    this.pararTimer();
  }

  iniciarTimer(): void {
    this.timerSubs = timer(5000).subscribe(() => {
      this.ativarImagem(
        this.indexImagemAtiva + 1
      );
    });
  }

  pararTimer(): void {
    this.timerSubs?.unsubscribe();
  }
  
  ativarImagem(index: number): void {
    this.indexImagemAtiva = index;
    this.iniciarTimer();
  }

  imagemAnterior(): void {
    const index = this.indexImagemAtiva - 1;
    
    if (index < 0) {
      this.indexImagemAtiva = this.imagens.length - 1;
    } else {
      this.indexImagemAtiva = index;
    }
    this.pararTimer();
    this.iniciarTimer();
  }

  imagemPosterior(): void {
  const index = this.indexImagemAtiva + 1;

  if (index >= this.imagens.length) {
    this.indexImagemAtiva = 0;
  } else {
    this.indexImagemAtiva = index;
  }

  this.pararTimer();
  this.iniciarTimer();
  }

}



