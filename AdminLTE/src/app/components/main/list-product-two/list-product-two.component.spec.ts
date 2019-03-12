import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductTwoComponent } from './list-product-two.component';

describe('ListProductTwoComponent', () => {
  let component: ListProductTwoComponent;
  let fixture: ComponentFixture<ListProductTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProductTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
