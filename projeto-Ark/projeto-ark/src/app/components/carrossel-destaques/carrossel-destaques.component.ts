import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-carrossel-destaques',
  templateUrl: './carrossel-destaques.component.html',
  styleUrls: ['./carrossel-destaques.component.scss']
})
export class CarrosselDestaquesComponent implements OnInit, OnDestroy {
  
    timerSubs!: Subscription;

    @Input() imagens: string[] = [];
  
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
  }

