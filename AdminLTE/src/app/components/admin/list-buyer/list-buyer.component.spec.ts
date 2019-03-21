import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBuyerComponent } from './list-buyer.component';

describe('ListBuyerComponent', () => {
  let component: ListBuyerComponent;
  let fixture: ComponentFixture<ListBuyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBuyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
