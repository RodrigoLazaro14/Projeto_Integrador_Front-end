import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaHospitaisComponent } from './pesquisa-hospitais.component';

describe('PesquisaHospitaisComponent', () => {
  let component: PesquisaHospitaisComponent;
  let fixture: ComponentFixture<PesquisaHospitaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesquisaHospitaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaHospitaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
