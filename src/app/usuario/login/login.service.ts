import { take } from 'rxjs/operators';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly rest = `${environment.API}oauth/token`;

  constructor(private http: HttpClient, ) {

  }
  logar(email: string, password: string) {
    const httpOptions = {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Basic Y2xpZW50LWlkOnNlY3JldC1pZA=='),
      params: new HttpParams().append('grant_type', 'password')
        .append('username', 'admin@admin.com')
        .append('password', 'admin')
    };
    return this.http.post(`${this.rest}`, {withCredentials:true, httpOptions});
  }
}
