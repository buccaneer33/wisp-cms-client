import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteTitleWidgetComponent } from './site-title-widget.component';

describe('SiteTitleWidgetComponent', () => {
  let component: SiteTitleWidgetComponent;
  let fixture: ComponentFixture<SiteTitleWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteTitleWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteTitleWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
