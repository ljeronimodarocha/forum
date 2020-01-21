import { user } from './user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class registerService {
    private rest = 'http://localhost:8080/';
    constructor(private http: HttpClient) {
       
    }
    save(u:user){
        this.http.post(this.rest+ "/save", u).subscribe();
    }
}