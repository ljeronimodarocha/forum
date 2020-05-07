import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './User';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';



@Injectable({
    providedIn: 'root'
})
export class registerService {
    private  readonly rest = `${environment.API}usuarios`;
    constructor(private http: HttpClient) {
        
    }
    save(u: User){
                const httpOptions = {
                    headers: new HttpHeaders({
                      'Authorization': 'Basic Y2xpZW50LWlkOnNlY3JldC1pZA=='
                    })
                  };
        return this.http.post<User>(this.rest , u).pipe(take(1));
    }
    checkEmail(email) {
        return this.http
            .get<User>(this.rest + "checkEmail/" + email);
    }
}