import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from './user';
import { Observable } from 'rxjs';



@Injectable({
    providedIn: 'root'
})
export class registerService {
    private rest = 'http://localhost:8080/';
    constructor(private http: HttpClient) {

    }
    save(u: user){
        return this.http.post<user>(this.rest + "save", u).toPromise();
    }
    checkEmail(email) {
        return this.http
            .get<user>(this.rest + "checkEmail/" + email);
    }
}