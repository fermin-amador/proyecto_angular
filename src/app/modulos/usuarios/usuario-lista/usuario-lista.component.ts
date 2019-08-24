import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.css']
})
export class UsuarioListaComponent implements OnInit {

  users:any;
  public usuario = new usuario();
  public searchText: string;
  public ModeModal:number;

  constructor(private UserService:UserService) {

  }

   ngOnInit() {


      this.UserService.get_users().subscribe((data:any) => {
     this.users = data.usuarios;
    });
  }


  clearInputs(){
    this.usuario.fullname = '';
    this.usuario.username = '';
    this.usuario.email = '';
    this.usuario.tipo_usuario = 0;
    this.usuario.estado = 0;
}

openModal(id_usuario){

  // this.peopleService.getPeopleById(IdPeople).subscribe( data =>{
  //     this.peopler = data;
  // });

}

}
