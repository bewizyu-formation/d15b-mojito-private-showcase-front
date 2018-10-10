import { Component, OnInit } from '@angular/core';
import {PATH_HOME_LOGOUT} from '../constantes.routes';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home-artist',
  templateUrl: './home-artist.component.html',
  styleUrls: ['./home-artist.component.css']
})
export class HomeArtistComponent implements OnInit {

  login = 1111;

  constructor(private router: Router) { }

  navigateToHomePage() {
    this.router.navigate([PATH_HOME_LOGOUT]);
  }

  navigateToEvent() {
    this.router.navigate(['home/' + this.login + '/event']);
  }

  ngOnInit() {
  }
}
