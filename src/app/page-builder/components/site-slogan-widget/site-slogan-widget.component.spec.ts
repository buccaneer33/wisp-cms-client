import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteSloganWidgetComponent } from './site-slogan-widget.component';

describe('SiteSloganWidgetComponent', () => {
  let component: SiteSloganWidgetComponent;
  let fixture: ComponentFixture<SiteSloganWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteSloganWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteSloganWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
