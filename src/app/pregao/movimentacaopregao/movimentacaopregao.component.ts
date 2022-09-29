import { Component, Input, OnInit } from '@angular/core';
import { MovimentacaoPorAtivo, MovimentacaoPregao, MovimentacoesPorDia, ResumoPorAtivo } from 'src/app/app.model';

@Component({
  selector: 'app-movimentacaopregao',
  templateUrl: './movimentacaopregao.component.html',
  styleUrls: ['./movimentacaopregao.component.scss']
})
export class MovimentacaopregaoComponent implements OnInit {

	@Input() movimentacaoPregao: MovimentacaoPregao;	

	movimentacaoPregaoAnterior: MovimentacaoPregao;

	a1: MovimentacaoPorAtivo;
	a2: MovimentacaoPorAtivo;
	a3: MovimentacaoPorAtivo;
	a4: MovimentacaoPorAtivo;
	vetorA: MovimentacaoPorAtivo[] = [];
	vetorb: MovimentacaoPorAtivo[] = [];

	r1 : ResumoPorAtivo;
	r2 : ResumoPorAtivo;
	arrayr1 : ResumoPorAtivo[] = [];
	arrayr2 : ResumoPorAtivo[] = [];

	m: MovimentacoesPorDia;

	@Input() impar: boolean;

	@Input() ultimaLinhaAtivo: boolean;

  constructor() { }

  ngOnInit(): void {			
		
		
		this.a1 = {
			operacao: 'COMPRA',
			ativo: 'BBAS3',
			quantidade: 9,
			preco: 28.88,
			valorOperacao: 259.92
		}
		
		this.a2 = {
			operacao: 'COMPRA',
			ativo: 'BBAS3',
			quantidade: 1,
			preco: 28.88,
			valorOperacao: 28.88
		}
		this.a3 = {
			operacao: 'COMPRA',
			ativo: 'ENBR3',
			quantidade: 9,
			preco: 28.88,
			valorOperacao: 259.92
		}
		
		this.a4 = {
			operacao: 'COMPRA',
			ativo: 'ENBR3',
			quantidade: 1,
			preco: 28.88,
			valorOperacao: 28.88
		}
		
		this.vetorA.push(this.a1);
		this.vetorA.push(this.a2);
		this.vetorb.push(this.a3);
		this.vetorb.push(this.a4);
		this.r1 ={
			valorOutrasTaxas: 0.34,
			valorTaxaEmolumentos: 0.01,
			valorTaxaLiquida: 0.07,
			valorOperacaoTotal: 288.80,
			ativoMovimentacao: this.vetorA
		}
		this.r2 ={
			valorOutrasTaxas: 0.34,
			valorTaxaEmolumentos: 0.01,
			valorTaxaLiquida: 0.07,
			valorOperacaoTotal: 288.80,
			ativoMovimentacao: this.vetorb
		}

		this.arrayr1.push(this.r1);
		this.arrayr1.push(this.r2);

		this.m ={
			dia: '30-12-2021',
			movimentacaoPorAtivo: this.arrayr1
		}
		
		
  }
	
}
