import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }


  Islogged(){
    return this.http.get<boolean>('http://localhost/api_fermo/login/isLogged');
  }

}
