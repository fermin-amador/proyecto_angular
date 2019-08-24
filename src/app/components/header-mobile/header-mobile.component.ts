import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


class usuariointerface{
  id_usuario:String;
  username:String;
  password:String;
}
@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.css']
})


export class HeaderMobileComponent implements OnInit {



  usuario:Array<usuariointerface>;
  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.userService.get_user().subscribe(datos =>{
    //   this.usuario =  datos.users;
    //   // this.dat =  datos.users;
    //   console.log(datos.users);
    // })
  }

}
