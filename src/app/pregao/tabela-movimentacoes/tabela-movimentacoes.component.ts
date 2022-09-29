import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MovimentacaoPregao } from 'src/app/app.model';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-tabela-movimentacoes',
  templateUrl: './tabela-movimentacoes.component.html',
  styleUrls: ['./tabela-movimentacoes.component.scss']
})
export class TabelaMovimentacoesComponent implements OnInit {

	@Input() data : string;

	movimentacoesDia$ : Observable<MovimentacaoPregao[]>;

  constructor(private service : AppService) { }

  ngOnInit(): void {
		this.movimentacoesDia$ =this.service.consultaMovimentacoesDia(this.data)
		.pipe(
			tap( console.log)
		);
  }

}
