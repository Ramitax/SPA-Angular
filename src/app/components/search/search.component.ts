import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/interface/heroe';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  heroes : Heroe [] = [];
  searchText : string = '';

  constructor( private activatedRoute: ActivatedRoute, private _heroesService: HeroesService ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( (params) => {
      this.searchText = params['text'];
      this.heroes = this._heroesService.searchHeroes(params['text']);
    })
  }
}
