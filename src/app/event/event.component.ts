import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  login = 'nnnnnn';

  constructor(private router: Router) { }

  navigateToHomeArtiste () {
    this.router.navigate(['home', this.login]);
  }

  ngOnInit() {
  }

}
