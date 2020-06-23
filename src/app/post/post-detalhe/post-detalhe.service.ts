import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostDetalheService {

  private readonly rest = `${environment.API}posts/`;
  httpOptions = {
    headers: new HttpHeaders({ 'Authorization': localStorage.getItem("authorization") })
  };

  constructor(private http: HttpClient) { }
  buscaPostsDetalhe(codigo: any): Observable<any> {
    return this.http.get(`${this.rest}` + codigo, this.httpOptions);
  }
}
