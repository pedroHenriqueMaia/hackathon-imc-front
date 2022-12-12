import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfissionalCadastroComponent } from './profissional-cadastro.component';

describe('ProfissionalCadastroComponent', () => {
  let component: ProfissionalCadastroComponent;
  let fixture: ComponentFixture<ProfissionalCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfissionalCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfissionalCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
