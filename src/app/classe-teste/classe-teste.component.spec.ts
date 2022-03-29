import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseTesteComponent } from './classe-teste.component';

describe('ClasseTesteComponent', () => {
  let component: ClasseTesteComponent;
  let fixture: ComponentFixture<ClasseTesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClasseTesteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasseTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
