import { usuario } from 'src/app/models/usuario.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


Injectable({
  providedIn: 'root'
})

// interface users{
// users:[];
// usuarios:[];
// }

export class UserService {


    url:string = 'http://localhost/api_fermo/';

    constructor(private http : HttpClient) { }

    get_user(){
      // return this.http.get<users>(this.url+'user/hola');
    }
    get_users(){
       return  this.http.get('/api/user/get_users');
    }

    register(usuario:FormData){
      return this.http.post('/api/user/register',usuario);
    }

    login(usuario:FormData){
      return this.http.post('/api/user/login',usuario);
    }
}
