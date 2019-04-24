import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSingleWidgetComponent } from './image-single-widget.component';

describe('ImageSingleWidgetComponent', () => {
  let component: ImageSingleWidgetComponent;
  let fixture: ComponentFixture<ImageSingleWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageSingleWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSingleWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
