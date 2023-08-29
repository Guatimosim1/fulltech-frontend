import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverSessaoComponent } from './remover-sessao.component';

describe('RemoverSessaoComponent', () => {
  let component: RemoverSessaoComponent;
  let fixture: ComponentFixture<RemoverSessaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoverSessaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoverSessaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
