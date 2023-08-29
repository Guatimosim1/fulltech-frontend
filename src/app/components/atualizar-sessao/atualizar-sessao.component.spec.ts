import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarSessaoComponent } from './atualizar-sessao.component';

describe('AtualizarSessaoComponent', () => {
  let component: AtualizarSessaoComponent;
  let fixture: ComponentFixture<AtualizarSessaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarSessaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizarSessaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
