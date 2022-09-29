import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  RotinaDia,
  StatusNome,
  Dia,
  Usuario,
  MovimentacaoPregao,
  Pregao,
  Provento,
} from './app.model';
import { map, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private readonly API = 'api/movimentacao_pregao';
  private readonly API_PREGAO = 'api/pregao';
  private readonly API_PROVENTO = 'api/provento';
  private readonly API_STATUS = 'api/status';
  private readonly API_DIA = 'api/dias';

  constructor(private httpClient: HttpClient) {}

  consultaTodosProventos(): Observable<any[]> {
    return this.httpClient.get<Provento[]>(`${this.API_PROVENTO}`)
		.pipe(
			tap(r => console.log("proventos", r)),
			//realizo transformacoes p ficar do jeito q preciso exibir no angular ou trago do backend formatado (RECOMENDADO)
			map(r => {
				let retorno =[{ aba: r[0].valor

				}]
				return retorno

				
			}),
			map(r => {
				let retorno =[{ abaretorno2: 0

				}]
				return retorno

				
			})


		);
  }

  consultaMovimentacoesDia(data: string): Observable<MovimentacaoPregao[]> {
    return this.httpClient.get<MovimentacaoPregao[]>(`${this.API}/${data}`)
		.pipe(
			tap((r) => console.log("teste", r)),
			
			);
  }

	/* 
	
	export interface Movimentacoes {
  dia: string;
  movimentacaoPorAtivo: MovimentacaoPorAtivo[];
}

export interface MovimentacaoPorAtivo {
  ativo: string;
  valorOutrasTaxas: number;
  valorTaxaEmolumentos: number;
  valorTaxaLiquida: number;
  valorOperacaoTotal: number;
  ativoMovimentacao: AtivoMovimentacao[];
}

export interface AtivoMovimentacao {
  quantidade: number;
  preco: number;
  valorOperacao: number;
}


/////////////////////////////////////////////////////////


export interface
export interface Movimentacoes {
  dia: string;

  movimentacoesPorAtivo: [{
    ativo: string;
    valorOutrasTaxas: number;
    valorTaxaEmolumentos: number;
    valorTaxaLiquida: number;
    valorOperacaoTotal: number;
    ativoMovimentacoes: [{
      quantidade: number;
      preco: number;
      valorOperacao: number;
    }];
  }];
}

*/

  consultaTodasMovimentacoes(): Observable<Pregao[]> {
    return this.httpClient.get<Pregao[]>(`${this.API_PREGAO}`);
  }

  salvarRotinaDia(rotinaDia: RotinaDia, status: string): Observable<RotinaDia> {
    return this.buscarStatus(status).pipe(
      switchMap((retornoStatus: StatusNome) =>
        this.httpClient.put<RotinaDia>(`${this.API}/${rotinaDia.id}`, {
          ...rotinaDia,
          status: retornoStatus,
        })
      )
    );
  }

  salvarDia(dia: Dia, status: string): Observable<Dia> {
    return this.buscarStatus(status).pipe(
      switchMap((retornoStatus: StatusNome) => {
        return this.httpClient.put<Dia>(`${this.API_DIA}/${dia.id}`, {
          ...dia,
          status: retornoStatus,
        });
      })
    );
  }

  buscarStatus(status: string): Observable<StatusNome> {
    return this.httpClient.get<StatusNome>(`${this.API_STATUS}/${status}`);
  }


	devolveUsuarioLogado(): Usuario{
		return {
      id: 6,
      nome: 'Roger',
			login: "a"      
    };
	}
  /* devolveUsuarioLogado(): Usuario{
		return {
      id: 6,
      nome: 'Roger',
      matricula: 'c007007',
      tipo: 'ADM',
    };
	}
 */
  devolveHoraFormatada(): string {
    const data = new Date();
    return `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;
  }

  devolveDiaFormatado(): string {
    const data = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    return `${data.getFullYear()}-${mes}-${dia}`;
  }
}
