import {Injectable} from '@angular/core';
import {ApiService} from './ApiService';
import {User} from '../model/User';

@Injectable ({
  providedIn: 'root'
})
export class LoginService {

  user: User;

  constructor(private api: ApiService) {}

  // addUserLogin() {
  //   return new Promise( (resolve) => {
  //     this.api.getLogin(this.user.username, this.user.password)
  //       .then(() => {
  //         resolve(this.user);
  //       })
  //       .catch(error => console.log('Error : ', error));
  //     }
  //
  //   );
  // }
}
