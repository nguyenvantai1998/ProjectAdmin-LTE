import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductTwoTab2Component } from './list-product-two-tab2.component';

describe('ListProductTwoTab2Component', () => {
  let component: ListProductTwoTab2Component;
  let fixture: ComponentFixture<ListProductTwoTab2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProductTwoTab2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductTwoTab2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
