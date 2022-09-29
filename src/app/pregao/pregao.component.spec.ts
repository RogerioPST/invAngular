import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PregaoComponent } from './pregao.component';

describe('PregaoComponent', () => {
  let component: PregaoComponent;
  let fixture: ComponentFixture<PregaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PregaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PregaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
