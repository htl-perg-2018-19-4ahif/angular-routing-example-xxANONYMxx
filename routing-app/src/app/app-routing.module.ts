import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'pokemon', component: AppComponent},
  {path: 'pokemon/:id', component: PokemonDetailComponent},
  {path: '', redirectTo: '/pokemon', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
