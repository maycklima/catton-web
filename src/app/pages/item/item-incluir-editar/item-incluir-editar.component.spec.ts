import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemIncluirEditarComponent } from './item-incluir-editar.component';

describe('ItemIncluirEditarComponent', () => {
  let component: ItemIncluirEditarComponent;
  let fixture: ComponentFixture<ItemIncluirEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemIncluirEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemIncluirEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
