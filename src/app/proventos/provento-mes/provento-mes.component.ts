import { Component, Input, OnInit } from '@angular/core';
import { ProventoMes } from 'src/app/app.model';

@Component({
  selector: 'app-provento-mes',
  templateUrl: './provento-mes.component.html',
  styleUrls: ['./provento-mes.component.scss']
})
export class ProventoMesComponent implements OnInit {	

	@Input() proventoMes: ProventoMes;	

  constructor() { }

  ngOnInit(): void {
  }

}
