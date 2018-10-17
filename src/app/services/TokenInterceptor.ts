import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginService} from './LoginService';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private loginService: LoginService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.loginService.token) {
      const clone = req.clone({
        setHeaders: {
          'Authorization': this.loginService.token,
        }
      });
      return next.handle(clone);
    }
    return next.handle(req);
  }
}
