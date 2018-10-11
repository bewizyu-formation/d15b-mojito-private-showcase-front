import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const detailUrl = 'https://api.github.com/users/nartawak';

@Injectable ({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  // getLogin(username: string, password: string): Promise<any> {
  //   return this.http.post(`${this.env.getPrivateShowcaseApiConfig().uri}${RESOURCES_LOGIN}`, {
  //       username,
  //       password,
  //     },
  //     {observe: 'response'}
  //   ).toPromise();
  // }




}
