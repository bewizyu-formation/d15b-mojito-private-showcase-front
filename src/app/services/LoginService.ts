import {Injectable} from '@angular/core';
import {ApiService} from './ApiService';
import {User} from '../model/User';

@Injectable ({
  providedIn: 'root'
})
export class LoginService {

  user: User;

  constructor(private api: ApiService) {
  }

  addUserLogin(username , password) {
    return new Promise((resolve) => {
        this.api.getLogin(username, password)
          .then()
          .catch(error => console.log('Error : ', error));
      }

    );
  }
// récupere les données de l'inscription retourne une promise et envoyer dans l'apiService
  addUserSignUp(username, password, email, artistName, description) {
    return new Promise( (resolve) => {
        this.api.signUp(username, password, email, artistName, description)
          .then(() => {
            console.log('SIGN UP =>', username, password, email, artistName, description);
          })
          .catch(error => console.log('Error : ', error));
      }

    );
  }
}

