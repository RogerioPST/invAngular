import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import {
  Ano,
  Provento,
  ProventoAno,
  ProventoMes,
  TotalProvento,
} from '../app.model';
import { AppService } from '../app.service';

@Component({
  selector: 'app-proventos',
  templateUrl: './proventos.component.html',
  styleUrls: ['./proventos.component.scss'],
})
export class ProventosComponent implements OnInit {
  formulario: FormGroup;

  verdade = true;
  verdade1 = false;

  ano2022: ProventoAno;
  ano2021: ProventoAno;
  arrayAnos: ProventoAno[] = [];
  jan2022: ProventoMes;
  fev2022: ProventoMes;
  jan2021: ProventoMes;
  arrayMeses2022: ProventoMes[] = [];
  arrayMeses2021: ProventoMes[] = [];
  totalProventosGeral: TotalProvento;

  consultaAnos$ = this.getAnosJson();

  //anos: Observable<Ano[]>

  //anos = ['2022', '2021', '2020', '2019']

  // anos = new FormControl('', Validators.required);

  //anos : any[];

  /* 
	
	totalProventosMes += parseFloat(provento.valor);
        divBarra.classList.add("provento");

        const valorStyle = `height: ${(totalProventosMes / 250).toFixed(
          2
        )}rem;`;
        divBarra.setAttribute("style", valorStyle);
      });

      spanTotalProventosMes.textContent = totalProventosMes.toFixed(2);
      divBarra.append(spanMes, spanTotalProventosMes);
      divMes.append(divBarra);
      section.append(divMes);			
			*/

  consultaProventos$: Observable<Provento[]>;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private service: AppService
  ) {}

  ngOnInit(): void {
    this.consultaProventos$ = this.service.consultaTodosProventos();

    //this.anos = this.getAnos();
    this.formulario = this.formBuilder.group({
      ano: [0, [Validators.required]],
    });

    this.ano.valueChanges.subscribe((ano) => {
      this.consultaProventos$ = this.service.consultaTodosProventos();
    });

    this.inicializaMockProventos();
  }

  inicializaMockProventos() {
    this.jan2022 = {
      mes: 1,
      total: 1000,
    };

    this.fev2022 = {
      mes: 2,
      total: 2000,
    };
    this.jan2021 = {
      mes: 1,
      total: 1500,
    };

    this.arrayMeses2021.push(this.jan2021);
    this.arrayMeses2022.push(this.jan2022);
    this.arrayMeses2022.push(this.fev2022);
    this.arrayMeses2021.push(this.jan2021);
    this.arrayMeses2022.push(this.jan2022);
    this.arrayMeses2022.push(this.fev2022);
    this.arrayMeses2021.push(this.jan2021);
    this.arrayMeses2022.push(this.jan2022);
    this.arrayMeses2022.push(this.fev2022);

    this.ano2022 = {
      ano: 2022,
      meses: this.arrayMeses2022,
    };
    this.ano2021 = {
      ano: 2021,
      meses: this.arrayMeses2021,
    };

    this.arrayAnos.push(this.ano2021);
    this.arrayAnos.push(this.ano2022);
    this.arrayAnos.push(this.ano2022);

    this.totalProventosGeral = {
      total: 2000,
      anos: this.arrayAnos,
    };
  }
  get ano(): FormControl {
    return this.formulario.get('ano') as FormControl;
  }

  getAnos() {
    return [{ ano: 2022 }, { ano: 2021 }, { ano: 2020 }];
  }

  onChange(valor) {
    //console.log(this.formulario.get('ano'));
    console.log(valor);
    console.log(this.formulario.get('ano').value);
  }

  getAnosJson() {
    return this.http.get<Ano[]>('assets/dados/anos.json');
  }

  buildAnos() {
    /* const values = this.anos.map((v) => {
      return new FormControl(v);
    });

    console.log('valores', values);
    return this.formBuilder.array(values); */
  }
}
