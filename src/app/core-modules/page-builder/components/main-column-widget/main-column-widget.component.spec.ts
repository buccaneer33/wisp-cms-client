import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainColumnWidgetComponent } from './main-column-widget.component';

describe('MainColumnWidgetComponent', () => {
  let component: MainColumnWidgetComponent;
  let fixture: ComponentFixture<MainColumnWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainColumnWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainColumnWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
