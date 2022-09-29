import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { RotinasComponent } from './rotinas/rotinas.component';
import { LoginComponent } from './navbar/login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RotinaComponent } from './rotinas/rotina/rotina.component';
import { HomeComponent } from './home/home.component';
import { MensagemComponent } from './componentes/mensagem/mensagem.component';
import { MsgComponent } from './componentes/msg/msg.component';
import { PregaoComponent } from './pregao/pregao.component';
import { MovimentacaopregaoComponent } from './pregao/movimentacaopregao/movimentacaopregao.component';
import { TabelaMovimentacoesComponent } from './pregao/tabela-movimentacoes/tabela-movimentacoes.component';
import { ProventosComponent } from './proventos/proventos.component';
import { ProventoAnoComponent } from './proventos/provento-ano/provento-ano.component';
import { ProventoMesComponent } from './proventos/provento-mes/provento-mes.component';


@NgModule({
  declarations: [AppComponent,  
		NavbarComponent, RotinasComponent, LoginComponent, UsuariosComponent, 
		RotinaComponent, HomeComponent, MensagemComponent, MsgComponent, PregaoComponent, 
		MovimentacaopregaoComponent, TabelaMovimentacoesComponent, 
		ProventosComponent, ProventoAnoComponent, ProventoMesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
