import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicePage } from './device.page';

describe('DeviceComponent', () => {
  let component: DevicePage;
  let fixture: ComponentFixture<DevicePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevicePage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
