import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WtsOtpComponent } from './wts-otp.component';

describe('WtsOtpComponent', () => {
  let component: WtsOtpComponent;
  let fixture: ComponentFixture<WtsOtpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WtsOtpComponent]
    });
    fixture = TestBed.createComponent(WtsOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
