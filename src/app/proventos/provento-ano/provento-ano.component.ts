import { Component, Input, OnInit } from '@angular/core';
import { ProventoAno } from 'src/app/app.model';

@Component({
  selector: 'app-provento-ano',
  templateUrl: './provento-ano.component.html',
  styleUrls: ['./provento-ano.component.scss']
})
export class ProventoAnoComponent implements OnInit {

	@Input() ano : string;
	@Input() proventoAno : ProventoAno;

	

  constructor() { }

  ngOnInit(): void {

		console.log(this.ano)
  }

}
