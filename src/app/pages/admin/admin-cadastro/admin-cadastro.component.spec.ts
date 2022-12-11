import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCadastroComponent } from './admin-cadastro.component';

describe('AdminCadastroComponent', () => {
  let component: AdminCadastroComponent;
  let fixture: ComponentFixture<AdminCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
