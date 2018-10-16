import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../model/User';
import {Router} from '@angular/router';
import {PATH_HOME_LOGOUT} from '../constantes.routes';
import {isErrorMatchEquals} from '../validators/isErrorMatchEquals';
import {LoginService} from '../services/LoginService';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {



  identifiantCtrl: FormControl;
  passwordCtrl: FormControl;
  villeCtrl: FormControl;
  emailCtrl: FormControl;
  passwordConfirmCtrl: FormControl;
  nameArtisteCtrl: FormControl;
  descriptionCtrl: FormControl;
  userForm: FormGroup;
  user = new User();
  hidePassword = true;
  hidePasswordConfirm = true;

  validArtist = false;
  villeList = ['lille', 'perth'];



  constructor(fb: FormBuilder, private router: Router,  private serviceSignUp: LoginService) {

  console.log('inscription component creer ');
    this.passwordCtrl = fb.control('', Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$'));
    this.identifiantCtrl = fb.control('', Validators.required);
    this.villeCtrl = fb.control('', Validators.required);
    this.passwordConfirmCtrl = fb.control('', Validators.required);
    this.emailCtrl = fb.control('', [Validators.required, Validators.email]);
    this.nameArtisteCtrl = fb.control('', Validators.required);
    this.descriptionCtrl = fb.control('', Validators.required);
    this.userForm = fb.group({
      identifiantCtrl: this.identifiantCtrl,
      villeCtrl: this.villeCtrl,
      emailCtrl: this.emailCtrl,
      passwordCtrl: this.passwordCtrl,
      passwordConfirmCtrl: this.passwordConfirmCtrl,
      nameArtisteCtrl: this.nameArtisteCtrl,
      descriptionCtrl: this.descriptionCtrl,
    }, {validator: isErrorMatchEquals});
  }
  // Checkbox affiche ou non les field artiste
  showAristeCheckBox() {
    this.descriptionCtrl.setValue('');
    this.nameArtisteCtrl.setValue('');
    this.validArtist = !this.validArtist;
  }

  showOrHide() {
    return this.validArtist;
  }
  // END -------------------------------


  // Message d'erreur  pour le login
  getErrorMessageIdentifier() {
    return this.passwordCtrl.hasError('required') ? 'Entre un Login' : 'Entre un Logins';
  }
  // Message d'erreur  pour le password

  getErrorMessagePassword() {
    return this.passwordCtrl.hasError('required') ? 'Entre un password' :
      this.passwordCtrl.hasError('pattern') ? 'Le mot de passe doit avoir au moin une lettre majuscule, un chiffre et 8 caractere' :
        '';
  }
  // Message d'erreur  pour le  mail
  getErrorMessageMail() {
    return this.emailCtrl.hasError('required') ? 'champ requis' :
      this.emailCtrl.hasError('email') ? 'vore mail est incorrect' :
        '';
  }
  // Message d'erreur  pour l'artiste
  getErrorMessageNameArtist() {
    return this.nameArtisteCtrl.hasError('required') ? 'Entre un nom dartiste' : '';
  }

  getErrorMessageDescriptionArtiste() {
    return this.descriptionCtrl.hasError('required') ? 'Entre une description' : '';
  }

// confirmation du password
  onPasswordInput() {
    if (this.userForm.hasError('passwordMismatch')) {
      this.passwordConfirmCtrl.setErrors([{'passwordMismatch': true}]);
    } else {
      this.passwordConfirmCtrl.setErrors(null);
    }
  }

  // validation
  handleSubmit() {
    console.log('username : ' + this.identifiantCtrl.value);
    this.serviceSignUp.addUserSignUp(this.identifiantCtrl.value, this.passwordCtrl.value, this.villeCtrl.value, this.emailCtrl.value,
   this.nameArtisteCtrl.value, this.descriptionCtrl.value)
 //  serviceSignUp.addUserSignUp(this.user.username,this.user.password,this.user.email,this.user.ville,this.user.);
  }
//  addUserSignUp() this.user.username,this.user.password,this.user.email,this.user.ville,this.user. ;
  navigateToHomePage() {
    this.router.navigate([PATH_HOME_LOGOUT]);
  }

  ngOnInit() {
      if ( this.validArtist) {
        this.descriptionCtrl.setValue('');
        this.nameArtisteCtrl.setValue('');
      } else {
        this.descriptionCtrl.setValue(' ');
        this.nameArtisteCtrl.setValue(' ');
      }

  }

}
