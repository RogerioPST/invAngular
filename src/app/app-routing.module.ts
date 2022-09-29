import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PregaoComponent } from './pregao/pregao.component';
import { ProventosComponent } from './proventos/proventos.component';
import { RotinasComponent } from './rotinas/rotinas.component';
import { UsuarioLogadoGuard } from './usuario-logado.guard';

import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },  
  {    
    path: 'rotinas',
    component: RotinasComponent,
    canActivate: [UsuarioLogadoGuard]
  },
  {    
    path: 'pregao',
    component: PregaoComponent,
    canActivate: [UsuarioLogadoGuard]
  },
  {    
    path: 'provento',
    component: ProventosComponent,
    canActivate: [UsuarioLogadoGuard]
  },
  {    
    path: 'usuarios',
    component: UsuariosComponent,
    canActivate: [UsuarioLogadoGuard]
  },
  {
    path: '**',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
