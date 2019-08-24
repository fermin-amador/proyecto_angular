import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageContainerComponent } from './components/page-container/page-container.component';

const routes: Routes = [

  // { path: 'footer', component: FooterComponent,canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path: '', component: PageContainerComponent,canActivate:[AuthGuard],
  children:[
    {path: 'usuarios', loadChildren:'./modulos/usuarios/usuarios.module#UsuariosModule'},
    {path: 'inventario', loadChildren:'./modulos/inventario/inventario.module#InventarioModule'}
  ]}

];

NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export const app_routing = RouterModule.forRoot(routes, {useHash: false})
