import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { MovimentacaoPregao, Pregao } from '../app.model';
import { AppService } from '../app.service';

@Component({
  selector: 'app-pregao',
  templateUrl: './pregao.component.html',
  styleUrls: ['./pregao.component.scss']
})
export class PregaoComponent implements OnInit {

	

	readonly formDia = new FormControl('', Validators.required);

  readonly consultaPregoes$: Observable<Pregao[]> =
    this.formDia.valueChanges.pipe(
      switchMap((dia: string) => this.service.consultaTodasMovimentacoes())
    ).pipe(
      tap((rotinasDias) => {
        //this.rotinasDiaStatus = rotinasDias.map(r => r.status);
      })
    );
  constructor(private service: AppService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    setTimeout(() =>
      this.formDia.setValue(this.devolveDiaFormatado())
    )
  }

	private devolveDiaFormatado(): string {
		return this.service.devolveDiaFormatado();
	}

}
