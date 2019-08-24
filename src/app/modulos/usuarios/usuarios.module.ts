import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsuarioListaComponent],
  imports: [
    CommonModule,
    FormsModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
