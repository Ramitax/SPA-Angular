import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private router: Router, private _heroService: HeroesService) { }

  ngOnInit() {
  }
  
  searchHero ( text: string) {
    this.router.navigate( ['/heroes', text] )
  }
}
