import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeDeviceComponent } from './free-device.component';

describe('FreeDeviceComponent', () => {
  let component: FreeDeviceComponent;
  let fixture: ComponentFixture<FreeDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeDeviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
