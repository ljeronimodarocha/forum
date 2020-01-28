import { user } from './user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { } from '@angular/common/http'



@Injectable({
    providedIn: 'root'
})
export class registerService {
    private rest = 'http://localhost:8080/';
    constructor(private http: HttpClient) {

    }
    save(u: user) {
        this.http.post<user>(this.rest + "save", u).subscribe();
    }
    checkEmail(email) {
        return this.http
            .get<user>(this.rest + "checkEmail/" + email);
    }
}