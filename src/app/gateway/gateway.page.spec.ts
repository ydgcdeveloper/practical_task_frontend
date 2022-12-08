import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewayPage } from './gateway.page';

describe('GatewayComponent', () => {
  let component: GatewayPage;
  let fixture: ComponentFixture<GatewayPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatewayPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GatewayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
