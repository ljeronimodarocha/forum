import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadPostsService {

  private readonly rest = `${environment.API}posts`;
  httpOptions = {
    headers: new HttpHeaders({ 'Authorization': localStorage.getItem("authorization") })
  };

  constructor(private http: HttpClient) { 

  }

  buscaPosts() : Observable<any>{
    return this.http.get(this.rest, this.httpOptions).pipe(
      retry(1)
    );
  }
}
