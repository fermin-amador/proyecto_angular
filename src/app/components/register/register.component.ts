import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { usuario } from 'src/app/models/usuario.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: usuario;
  canRegister: boolean;
  checkUser:boolean;
  data = new FormData();
  exist_username :boolean;
  exist_email :boolean;
  register_sucess:boolean;
  public loading = false;

  constructor(private router:Router,
              private UserService:UserService) { }

  ngOnInit() {
    this.register_sucess = false;
    this.exist_username =  false;
    this.exist_email =  false;
    this.checkUser = false;
    this.canRegister = true;
    this.user = {
      fullname:'',
      username:'',
      email:'',
      password:'',
      tipo_usuario:1,
      checkUser:''
    };
    // this.userForm = this.formBuilder.group({
    //   'fullname':['',Validators.compose([Validators.minLength(5),Validators.maxLength(35)])],
    //   'username':['',Validators.compose([Validators.minLength(5),Validators.maxLength(20)])],
    //   'email':['',Validators.compose([Validators.required,Validators.pattern(this.emailPattern)])],
    //   'password':['',Validators.compose([Validators.minLength(5),Validators.maxLength(25)])],
    //   'inputcheck':[false,Validators.pattern('true')]

    // });


  }

  registerUser(){



    this.data.append("fullname", this.user.fullname);
    this.data.append("username", this.user.username);
    this.data.append("password", this.user.password);
    this.data.append("email", this.user.email);
    this.loading = true;
    this.UserService.register(this.data).subscribe((data:any) =>{
      this.loading = false;
      if(data){
        this.exist_username = (data.exist_username)?true:false;
        this.exist_email = (data.exist_email)?true:false;

        if(data.register){
          Swal.fire({
            title:"Bien Hecho!",
            text:'Su cuenta ha sido creada correctamente',
            type:'success'
          });
          this.router.navigate(['/login']);

        }


      }

    },(error) => {
      this.loading = false;
      console.log(error);
    })




  // this.UserService.register(form.value).subscribe((data) =>{
  //   console.log('se registro bien')
  // },(error) =>{
  //   console.log(error);
  // });
  }

}
