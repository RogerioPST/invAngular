import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotinasComponent } from './rotinas.component';

describe('RotinasComponent', () => {
  let component: RotinasComponent;
  let fixture: ComponentFixture<RotinasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotinasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
