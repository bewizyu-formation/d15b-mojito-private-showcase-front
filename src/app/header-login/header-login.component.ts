import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PATH_HOME_LOGOUT} from '../constantes.routes';
@Component({
  selector: 'app-header-login',
  templateUrl: './header-login.component.html',
  styleUrls: ['./header-login.component.css']
})
export class HeaderLoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigateToHomePage() {
    this.router.navigate([PATH_HOME_LOGOUT] );
  }
}
