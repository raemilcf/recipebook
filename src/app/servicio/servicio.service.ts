import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  url : string = environment.apiUrl;

  constructor( private http : HttpClient ) { }

  getUsers() {

    return this.http.get(this.url + "users", {responseType:"text"});
    
  }
}
