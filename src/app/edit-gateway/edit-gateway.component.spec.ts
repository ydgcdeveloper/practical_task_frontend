import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGatewayComponent } from './edit-gateway.component';

describe('EditGatewayComponent', () => {
  let component: EditGatewayComponent;
  let fixture: ComponentFixture<EditGatewayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGatewayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditGatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
