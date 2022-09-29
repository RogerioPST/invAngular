import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentacaopregaoComponent } from './movimentacaopregao.component';

describe('MovimentacaopregaoComponent', () => {
  let component: MovimentacaopregaoComponent;
  let fixture: ComponentFixture<MovimentacaopregaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimentacaopregaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimentacaopregaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
