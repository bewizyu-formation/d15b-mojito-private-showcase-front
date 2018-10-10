import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-artist-user',
  templateUrl: './home-artist-user.component.html',
  styleUrls: ['./home-artist-user.component.css']
})
export class HomeArtistUserComponent implements OnInit {

  constructor(private router: Router) { }

  login = 111;

  navigateToHomeArtiste() {
    this.router.navigate(['home/' + this.login]);
  }

  ngOnInit() {
  }

}
