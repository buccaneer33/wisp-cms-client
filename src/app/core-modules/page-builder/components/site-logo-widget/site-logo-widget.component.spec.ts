import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteLogoWidgetComponent } from './site-logo-widget.component';

describe('SiteLogoWidgetComponent', () => {
  let component: SiteLogoWidgetComponent;
  let fixture: ComponentFixture<SiteLogoWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteLogoWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteLogoWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
