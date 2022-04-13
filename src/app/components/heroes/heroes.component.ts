import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/interface/heroe';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroes : Heroe [] = [];

  constructor( private _heroesService: HeroesService) { }

  ngOnInit() {
    this.heroes = this._heroesService.heroes;
  }
}
