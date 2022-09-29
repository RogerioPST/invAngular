import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from './app.model';

@Injectable({
  providedIn: 'root',
})
export class UsuarioLogadoService {
  private readonly API = 'api/usuario';
  private readonly _usuarioLogado$ = new BehaviorSubject<string | null>(null);
  readonly usuarioLogado$ = this._usuarioLogado$.asObservable();

  constructor(private router: Router, private httpClient: HttpClient) {
    this.verificaSeEstaLogado();
  }

  logar(login: string): void {
    this.httpClient.get<Usuario[]>(this.API).subscribe((usuarios) => {
      if (usuarios.some((usuario) => usuario.login === login)) {
        this._usuarioLogado$.next(login);        
        localStorage.setItem('usuarioLogado', login);
        
      }
    });
  }

  deslogar(): void {
    localStorage.removeItem('usuarioLogado');
    this.router.navigate(['/']);
    this._usuarioLogado$.next(null);
  }

  private verificaSeEstaLogado(): void {
    const usuarioLogado = localStorage.getItem('usuarioLogado');
    if (usuarioLogado) {
      this.logar(usuarioLogado);
    }
  }
}
