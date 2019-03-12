import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductFiveComponent } from './list-product-five.component';

describe('ListProductFiveComponent', () => {
  let component: ListProductFiveComponent;
  let fixture: ComponentFixture<ListProductFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProductFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
