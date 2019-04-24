import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersListWidgetComponent } from './orders-list-widget.component';

describe('OrdersListWidgetComponent', () => {
  let component: OrdersListWidgetComponent;
  let fixture: ComponentFixture<OrdersListWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersListWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersListWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
