import { Injectable } from '@angular/core';
import {  Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(private authService:AuthService,
            private router:Router){

}
isLogged: boolean;
canActivate(){

  // this.authService.Islogged().subscribe(data =>{
  //   this.isLogged = data;
  // });

  this.isLogged = (sessionStorage.getItem('token'))?true:false;

  if(this.isLogged){
      return true;
  }else{
    this.router.navigate(['/login']);
    return false;

  }



}


}
