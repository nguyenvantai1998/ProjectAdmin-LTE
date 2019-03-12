import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductThreeComponent } from './list-product-three.component';

describe('ListProductThreeComponent', () => {
  let component: ListProductThreeComponent;
  let fixture: ComponentFixture<ListProductThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProductThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
