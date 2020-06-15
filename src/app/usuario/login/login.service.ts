import { take } from 'rxjs/operators';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly rest = `${environment.API}login`;

  constructor(private http: HttpClient) {

  }
  logar(email: string, password: string) {
   const body = {
     email : email, password : password 
   }
    return this.http.post(`${this.rest}`, body, {observe: 'response', responseType : 'json'});
  }
}
