import {Injectable} from '@angular/core';
import {ApiService} from './ApiService';
import {User} from '../model/User';
import {Router} from '@angular/router';
import {PATH_HOME_LOGOUT, PATH_LOGIN} from '../constantes.routes';
import {HttpResponse} from '@angular/common/http';

@Injectable ({
  providedIn: 'root'
})
export class LoginService {

  user: User;
  public token: string;

  constructor(private api: ApiService, private route: Router) {
  }

  login(username: string, password: string): Promise<string> {
    return new Promise ((resolve) => {
      this.api
        .getLogin(username, password)
        .then((response: HttpResponse<any>) => {
          this.token = response.headers.get('Authorization');
          console.log('Response Token : ', this.token);
          resolve(this.token);
        });
    });
  }

// récupere les données de l'inscription retourne une promise et envoyer dans l'apiService
  addUserSignUp(username, password, email, artistName, description) {
    return new Promise( (resolve) => {
        this.api.signUp(username, password, email, artistName, description)
          .then(() => this.route.navigate([PATH_LOGIN])
          )
          .catch(error => console.log('Error : ', error));
      }

    );
  }
}

