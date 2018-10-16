import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable ({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getLogin(username: string, password: string): Promise<any> {
    return this.http.post(`${environment.API_BASE_URL}/login`, {
        username,
        password,
      },
      {observe: 'response'}
    ).toPromise();
  }
/* inscription requet hhtpcli */
  signUp(username: string, password: string, artistName: string,
        ville: string, descriptionCourte: string , email: string): Promise<any> {
         return this.http.post(`${environment.API_BASE_URL}/users/`, {
        username,
        password,
        artistName,
        ville,
        descriptionCourte,
        email
      },
      {observe: 'response'}
    ).toPromise();
  }






}
