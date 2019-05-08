import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsItemWidgetComponent } from './news-item-widget.component';

describe('NewsItemWidgetComponent', () => {
  let component: NewsItemWidgetComponent;
  let fixture: ComponentFixture<NewsItemWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsItemWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsItemWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
