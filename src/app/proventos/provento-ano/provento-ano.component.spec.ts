import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProventoAnoComponent } from './provento-ano.component';

describe('ProventoAnoComponent', () => {
  let component: ProventoAnoComponent;
  let fixture: ComponentFixture<ProventoAnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProventoAnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProventoAnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
