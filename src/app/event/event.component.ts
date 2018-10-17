import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PATH_HOME_LOGGED} from '../constantes.routes';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(private router: Router) { }

  navigateToHomeArtiste () {
    this.router.navigate([PATH_HOME_LOGGED]);
  }

  ngOnInit() {
  }

}
