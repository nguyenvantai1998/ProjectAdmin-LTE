import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductDeactiveComponent } from './list-product-deactive.component';

describe('ListProductDeactiveComponent', () => {
  let component: ListProductDeactiveComponent;
  let fixture: ComponentFixture<ListProductDeactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProductDeactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductDeactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
