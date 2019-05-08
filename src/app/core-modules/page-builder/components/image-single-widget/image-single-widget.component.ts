import { Component, Input } from '@angular/core';
import { AbstractWidgetComponent } from '../abstract-widget.component';

import { AbstractWidget } from '@page-builder/models/fields/abstractWidget';

@Component({
  selector: 'app-image-single-widget',
  templateUrl: './image-single-widget.component.html',
  styleUrls: ['./image-single-widget.component.sass']
})
export class ImageSingleWidgetComponent extends AbstractWidgetComponent {
    @Input()
    widget: AbstractWidget;
}
