import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PATH_HOME_LOGGED} from '../constantes.routes';

@Component({
  selector: 'app-formulaire-event',
  templateUrl: './formulaire-event.component.html',
  styleUrls: ['./formulaire-event.component.css']
})
export class FormulaireEventComponent implements OnInit {

  constructor(private router: Router) { }

  navigateToHomeArtiste() {
    this.router.navigate([PATH_HOME_LOGGED]);
  }

  ngOnInit() {
  }

}
