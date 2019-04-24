import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsListWidgetComponent } from './news-list-widget.component';

describe('NewsListWidgetComponent', () => {
  let component: NewsListWidgetComponent;
  let fixture: ComponentFixture<NewsListWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsListWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsListWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
