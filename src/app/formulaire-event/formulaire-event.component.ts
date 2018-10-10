import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-formulaire-event',
  templateUrl: './formulaire-event.component.html',
  styleUrls: ['./formulaire-event.component.css']
})
export class FormulaireEventComponent implements OnInit {

  constructor(private router: Router) { }

  login = 111;

  navigateToHomeArtiste() {
    this.router.navigate(['home/' + this.login]);
  }

  ngOnInit() {
  }

}
