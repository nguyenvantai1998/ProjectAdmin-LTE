import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductTwoTab3Component } from './list-product-two-tab3.component';

describe('ListProductTwoTab3Component', () => {
  let component: ListProductTwoTab3Component;
  let fixture: ComponentFixture<ListProductTwoTab3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProductTwoTab3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductTwoTab3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
