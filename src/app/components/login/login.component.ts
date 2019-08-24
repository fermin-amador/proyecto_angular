import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error_login:boolean;
  user:usuario;
  data = new FormData();
  invalid_user:boolean = false;
  public loading = false;
  constructor(private router:Router,
              private UserService:UserService) { }

  ngOnInit() {
    this.error_login = false;
    this.user = {
      username:'',
      password:''
    };

  }

  login(form){
    this.data.append("username",form.value.username);
    this.data.append("password",form.value.password);
    this.loading = true;
    this.UserService.login(this.data).subscribe((data:any) =>{
      this.loading = false;
      if(data){



        if(data.status){
          sessionStorage.setItem('token',data.token);
          this.router.navigate(['/']);

        }else{
          this.invalid_user = true;
          sessionStorage.clear();
        }


        form.reset({
          username:this.user.username,
          pass:''
        });
      }


    },(error)=>{
      console.log(error);
      this.loading = false;
    });


  }


}
