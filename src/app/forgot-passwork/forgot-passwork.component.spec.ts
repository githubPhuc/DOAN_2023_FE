import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPassworkComponent } from './forgot-passwork.component';

describe('ForgotPassworkComponent', () => {
  let component: ForgotPassworkComponent;
  let fixture: ComponentFixture<ForgotPassworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotPassworkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotPassworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
