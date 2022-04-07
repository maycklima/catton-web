import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LojaEditarComponent } from './loja-editar.component';

describe('LojaEditarComponent', () => {
  let component: LojaEditarComponent;
  let fixture: ComponentFixture<LojaEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LojaEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LojaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
