import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BemvindoComponent } from './components/bemvindo/bemvindo.component';
import { FormularioComponent } from './components/formulario/formulario.component';

const routes: Routes = [
  { path: 'home', component: BemvindoComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'formulario', component: FormularioComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
