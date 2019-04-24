import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideColumnWidgetComponent } from './side-column-widget.component';

describe('SideColumnWidgetComponent', () => {
  let component: SideColumnWidgetComponent;
  let fixture: ComponentFixture<SideColumnWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideColumnWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideColumnWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
