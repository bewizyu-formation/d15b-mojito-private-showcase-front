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
  signUp(username: string, password: string,  email: string, artistName: string, description: string): Promise<any> {
         return this.http.post(`${environment.API_BASE_URL}/users/`, {
        username,
        password,
        email,
        artistName,
        description
      },
      {observe: 'response'}
    ).toPromise();
  }

}
