import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  public pokeID:Number;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.pokeID = params.id;
    });
  }

  ngOnInit() {
    
  }

}
