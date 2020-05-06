import { take } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly rest = `${environment.API}oauth/token?grant_type=password&username=`;

  constructor(private http: HttpClient, ) {

  }
  logar(email: string, password: string) {
    let params = new URLSearchParams();
    params.append('grant_type', 'password');

    let headers = new HttpHeaders({ 'Accept': 'text/json' });
    headers.append('Accept', 'text/json');
    headers.append('Authorization', 'Basic Y2xpZW50LWlkOnNlY3JldC1pZA==');
    return this.http.get(`${this.rest}${email}` + '&password=' + `${password}`, params.toString(),  {headers: headers }).subscribe();
  }
}
