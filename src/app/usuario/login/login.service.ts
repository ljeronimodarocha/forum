import { take } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
    let params = new URLSearchParams();
    params.append('grant_type', 'password');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic Y2xpZW50LWlkOnNlY3JldC1pZA==',
      }),
      params: new HttpParams().append('grant_type', 'password')
        .append('username', 'admin@admin.com')
        .append('password', 'admin')

    };
    console.log(httpOptions);

    return this.http.get(`${this.rest}`, httpOptions).pipe(take(1));
  }
}
