import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductTwoTab1Component } from './list-product-two-tab1.component';

describe('ListProductTwoTab1Component', () => {
  let component: ListProductTwoTab1Component;
  let fixture: ComponentFixture<ListProductTwoTab1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProductTwoTab1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductTwoTab1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
