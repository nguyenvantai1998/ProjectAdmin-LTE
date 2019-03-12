import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductOneComponent } from './list-product-one.component';

describe('ListProductOneComponent', () => {
  let component: ListProductOneComponent;
  let fixture: ComponentFixture<ListProductOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProductOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
