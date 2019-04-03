import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface IPokemon{
  name;
  url;
}
interface IPokemonList{
  results:IPokemon[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  public pokemonList:IPokemon[];

  constructor(private httpClient: HttpClient) { 
    this.fetchPokemonList();
  }

  async fetchPokemonList(){
    this.pokemonList = (await this.httpClient.get<IPokemonList>("https://pokeapi.co/api/v2/pokemon?limit=964").toPromise()).results;
  }

}
