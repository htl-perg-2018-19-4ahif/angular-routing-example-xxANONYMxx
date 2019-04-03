import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'pokemons', component: AppComponent},
  {path: '', redirectTo: '/pokemons', pathMatch: 'full'},
  {path: 'pokemons/:id', component: PokemonDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
