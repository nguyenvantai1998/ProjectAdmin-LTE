import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductFourComponent } from './list-product-four.component';

describe('ListProductFourComponent', () => {
  let component: ListProductFourComponent;
  let fixture: ComponentFixture<ListProductFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProductFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
