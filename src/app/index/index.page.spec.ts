import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPage } from './index.page';

describe('IndexComponent', () => {
  let component: IndexPage;
  let fixture: ComponentFixture<IndexPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
