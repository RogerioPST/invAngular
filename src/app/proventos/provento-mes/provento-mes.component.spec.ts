import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProventoMesComponent } from './provento-mes.component';

describe('ProventoMesComponent', () => {
  let component: ProventoMesComponent;
  let fixture: ComponentFixture<ProventoMesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProventoMesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProventoMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
