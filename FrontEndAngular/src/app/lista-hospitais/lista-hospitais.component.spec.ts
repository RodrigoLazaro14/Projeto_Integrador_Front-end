import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaHospitaisComponent } from './lista-hospitais.component';

describe('ListaHospitaisComponent', () => {
  let component: ListaHospitaisComponent;
  let fixture: ComponentFixture<ListaHospitaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaHospitaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaHospitaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
