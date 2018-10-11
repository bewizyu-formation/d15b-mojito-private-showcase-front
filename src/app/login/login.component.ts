import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../model/User';
import {Router} from '@angular/router';
import {PATH_HOME_LOGOUT} from '../constantes.routes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  identifiantCtrl: FormControl;
  passwordCtrl: FormControl;
  userForm: FormGroup;
  user = new User();

  constructor(fb: FormBuilder, private router: Router) {
    this.passwordCtrl = fb.control('', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$')]);
    this.identifiantCtrl = fb.control('', Validators.required);
    this.userForm = fb.group({
      identifiantCtrl: this.identifiantCtrl,
      password: this.passwordCtrl
    });
  }

  // Message d'erreur  pour le login
  getErrorMessageIdentifier() {
    return this.passwordCtrl.hasError('required') ? 'Entre un Login' : '';
  }
  // Message d'erreur  pour le password
  getErrorMessagePassword() {
    return this.passwordCtrl.hasError('required') ? 'Entre un password' :
      this.passwordCtrl.hasError('pattern') ? 'Le mot de passe doit avoir au moin une lettre majuscule, un chiffre et 8 caractere' :
        '';
  }

  // validation
  handleSubmit() {

  }

  navigateToHomePage() {
    this.router.navigate([PATH_HOME_LOGOUT]);
  }
  ngOnInit() {
  }

}
