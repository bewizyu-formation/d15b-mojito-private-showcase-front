import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PATH_INSCRIPTION, PATH_LOGIN} from '../constantes.routes';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private router: Router) { }

  navigateToLogin() {
    this.router.navigate([PATH_LOGIN]);
  }

  navigateToInscription () {
    this.router.navigate([PATH_INSCRIPTION]);
  }


  ngOnInit() {
  }

}
