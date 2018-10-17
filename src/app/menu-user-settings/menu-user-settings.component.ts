import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PATH_ARTISTE_ADMIN} from '../constantes.routes';

@Component({
  selector: 'app-menu-user-settings',
  templateUrl: './menu-user-settings.component.html',
  styleUrls: ['./menu-user-settings.component.css']
})
export class MenuUserSettingsComponent implements OnInit {

  constructor(private router: Router) { }

  isArtist = true;

  navigateToHomeArtistAdmin() {
    this.router.navigate(['home/' + '/artist/artist']);
  }

  navigateToChangeUser() {
    this.router.navigate(['home/' + '/userAccount']);
  }

  ngOnInit() {
  }

}
