import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginHospitalComponent } from './login-hospital.component';

describe('LoginHospitalComponent', () => {
  let component: LoginHospitalComponent;
  let fixture: ComponentFixture<LoginHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginHospitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
