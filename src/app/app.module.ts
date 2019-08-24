import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxLoadingModule } from 'ngx-loading';

import {  app_routing } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { HeaderMobileComponent } from './components/header-mobile/header-mobile.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { RegisterComponent } from './components/register/register.component';
import { PageContainerComponent } from './components/page-container/page-container.component';
import { HeaderDesktopComponent } from './components/header-desktop/header-desktop.component';
import { RolesDirective } from './directives/roles.directive';
import { RouterModule } from '@angular/router';
import { UsuariosModule } from './modulos/usuarios/usuarios.module';
import { InventarioModule } from './modulos/inventario/inventario.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMobileComponent,
    FooterComponent,
    MenuComponent,
    LoginComponent,
    RegisterComponent,
    PageContainerComponent,
    HeaderDesktopComponent,
    RolesDirective
  ],
  imports: [
    app_routing,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxLoadingModule


  ],
  providers: [UserService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
