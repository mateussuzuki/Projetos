import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BemvindoComponent } from './components/bemvindo/bemvindo.component';
import { SobreComponent } from './components/sobre/sobre.component';

const routes: Routes = [
  { path: 'home', component: BemvindoComponent },
  { path: 'sobre', component: SobreComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
